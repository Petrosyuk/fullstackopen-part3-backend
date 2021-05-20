require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const errorHandler = require("./middleware/errorHandler");

const Person = require("./models/person");

const PORT = process.env.PORT || 3001;
const app = express();

//Middleware
app.use(express.json());
app.use(cors());
app.use(express.static("build"));

app.use(
  morgan(function (tokens, req, res) {
    return [
      tokens.method(req, res),
      tokens.url(req, res),
      tokens.status(req, res),
      tokens.res(req, res, "content-length"),
      "-",
      tokens["response-time"](req, res),
      "ms",
      JSON.stringify(req.body),
    ].join(" ");
  })
);

app.get("/api/persons", (req, rsp) => {
  Person.find({})
    .then((persons) => rsp.status(200).json(persons))
    .catch((err) =>
      rsp.status(400).json({
        error: "cannot establish db connection",
      })
    );
});

app.post("/api/persons", (req, rsp, next) => {
  const newPerson = req.body;

  //Check object validity
  // if (!newPerson.name || !newPerson.number) {
  //   return rsp.status(404).json({
  //     error: "missing customer details",
  //   });
  // }

  // Save new person
  const person = new Person({
    name: newPerson.name,
    number: newPerson.number,
  });

  person
    .save()
    .then((savedPerson) => rsp.status(201).json(savedPerson))
    .catch((err) => next(err));
});

app.get("/api/persons/:id", (req, rsp, next) => {
  const requestId = req.params.id;

  Person.findById(requestId)
    .then((foundPerson) => rsp.status(200).json(foundPerson))
    .catch((err) => next(err));
});

app.patch("/api/persons/:id", (req, rsp) => {
  const requestId = req.params.id;
  const updatedPerson = req.body;

  Person.findByIdAndUpdate({ _id: requestId }, updatedPerson, { new: true })
    .then((patchedPerson) => rsp.status(200).json(patchedPerson))
    .catch((err) => rsp.status(400).end());
});

app.delete("/api/persons/:id", (req, rsp, next) => {
  const requestId = req.params.id;

  Person.findByIdAndDelete(requestId)
    .then((success) => {
      rsp.status(204).end();
    })
    .catch((err) => next(err));
});

app.get("/info", (req, rsp) => {
  const now = new Date();

  Person.estimatedDocumentCount().then((personCount) => {
    const phonebookLen = personCount;
    console.log(phonebookLen);
    rsp.send(`<h3> Phoneboook has info for ${phonebookLen} people</h3>
            <br> ${now}`);
  });
});

app.use(errorHandler);
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

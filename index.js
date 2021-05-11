const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

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

const phonebook = {
  persons: [
    {
      name: "Arto Hellas",
      number: "040-123456",
      id: 1,
    },
    {
      name: "Ada Lovelace",
      number: "39-44-5323523",
      id: 2,
    },
    {
      name: "Dan Abramov",
      number: "12-43-234345",
      id: 3,
    },
    {
      name: "Anton",
      number: "347-435-3433",
      id: 4,
    },
    {
      name: "Maria",
      number: "011-380-74-1223",
      id: 5,
    },
  ],
};

// Utility Funcs
const generateRandomId = () => {
  return Math.floor(Math.random() * 100000);
};
//

app.get("/api/persons", (req, rsp) => {
  rsp.status(200).json(phonebook.persons);
});

app.post("/api/persons", (req, rsp) => {
  const newPerson = req.body;

  if (!newPerson.name || !newPerson.number) {
    return rsp.status(404).json({
      error: "missing customer details",
    });
  }

  if (phonebook.persons.find((person) => person.name === newPerson.name)) {
    return rsp.status(422).json({
      "not-allowed": "name must be unique to the list",
    });
  }

  const newPersonObject = {
    name: newPerson.name,
    number: newPerson.number,
    id: generateRandomId(),
  };

  phonebook.persons = phonebook.persons.concat(newPersonObject);

  rsp.status(201).json(phonebook.persons);
});

app.get("/api/persons/:id", (req, rsp) => {
  const requestId = Number(req.params.id);
  const personData = phonebook.persons.find(
    (person) => person.id === requestId
  );

  if (personData) {
    return rsp.status(200).json(personData);
  }
  rsp.status(404).json({ error: "item not found" });
});

app.delete("/api/persons/:id", (req, rsp) => {
  const requestId = Number(req.params.id);
  phonebook.persons = phonebook.persons.filter(
    (person) => person.id !== requestId
  );
  rsp.status(204).end();
});

app.get("/info", (req, rsp) => {
  const phonebookLen = phonebook.persons.length;
  const now = new Date();

  rsp.send(`<h3> Phoneboook has info for ${phonebookLen} people</h3>
            <br> ${now}`);
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

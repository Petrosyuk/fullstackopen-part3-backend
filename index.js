const express = require("express");
const app = express();
const PORT = 3001;

const persons = {
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
      number: "347435343",
      id: 4,
    },
    {
      name: "Maria",
      number: "348735",
      id: 5,
    },
  ],
};

app.get("/api/persons", (req, rsp) => {
  rsp.status(200).json(persons.persons);
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

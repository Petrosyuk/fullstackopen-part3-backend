const express = require("express");
const app = express();
app.use(express.json());
const PORT = 3001;

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

const express = require("express");
const app = express();
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

app.get("/api/persons", (req, rsp) => {
  rsp.status(200).json(phonebook.persons);
});

app.get("/info", (req, rsp) => {
  const phonebookLen = phonebook.persons.length;
  const now = new Date();

  rsp.send(`<h3> Phoneboook has info for ${phonebookLen} people</h3>
            <br> ${now}`);
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

require("dotenv").config();
const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const URI = process.env.MONGO_URI;

console.log("Connecting to", URI);

mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then((rsl) => {
    console.log("connected to MongoDB");
  })
  .catch((err) => {
    console.log("ERROR establishing connection to the server", err);
  });

const personSchema = new mongoose.Schema({
  name: { type: String, minLength: 1, required: true, unique: true },
  number: { type: String, minLength: 3, required: true, unique: true },
});

personSchema.plugin(uniqueValidator);

personSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("Person", personSchema);

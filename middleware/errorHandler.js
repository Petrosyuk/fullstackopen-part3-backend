const errorHandler = (error, req, rsp, next) => {
  console.error(error.message);
  //   console.log(error);

  if (error.name === "CastError") {
    return rsp.status(400).send({ error: "malformatted id" });
  }

  if (error.name === "ValidationError") {
    return rsp.status(400).json({ error: error.message });
  }

  next(error);
};

module.exports = errorHandler;

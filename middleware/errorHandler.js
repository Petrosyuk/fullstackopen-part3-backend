const errorHandler = (error, req, rsp, next) => {
  console.error(error.message);
  console.log(error);

  if (error.name === "CastError") {
    return rsp.status(400).send({ error: "malformatted id" });
  }
  next(error);
};

module.exports = errorHandler;

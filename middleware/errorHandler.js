const { StatusCodes } = require("http-status-codes");
const errorHandlerMiddleware = (err, req, res, next) => {
  let CustomError = {
    //default error object
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    message: err.message || "Something went wrong, PLease try again later",
  };

  if (err.name === "ValidationError" || err.name === "ValidatorError") {
    CustomError.message = Object.values(err.errors)
      .map((item) => item.message)
      .join(",");

    CustomError.statusCode = 400;
  }
  if (err.name === "CastError") {
    CustomError.message = `No item found with ID ${err.value}`;
    CustomError.statusCode = 404;
  }
  return res.status(CustomError.statusCode).json({ msg: CustomError.message });
};

module.exports = errorHandlerMiddleware;

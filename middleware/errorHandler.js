const { CustomAPIError } = require("../errors/customErrors");

const errorHandler = (err, req, res, next) => {
  //   console.log(err);

  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ msg: `${err.message}` });
  }
  return res.status(err.status).json({ msg: `${err.message}` });
};
module.exports = errorHandler;

const asyncWrapper = (fn) => {
  return async (res, req, next) => {
    try {
      await fn(req, res, next);
    } catch (error) {
      next(error); // bo
    }
  };
};

module.exports = asyncWrapper;

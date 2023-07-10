const createHttpError = require('http-errors');

module.exports = (validator) => async (req, res, next) => {
  try {
    console.log("HI.......")
    const validated = await validator.validateAsync(req.body);
    console.log(validated)
    req.body = validated;
    return next();
  } catch (err) {
    console.log("ERRORRRR !!!!!!!!!")
    //* Pass err to next
    //! If validation error occurs call next with HTTP 422. Otherwise HTTP 500
    if (err.isJoi) { return next(createHttpError(422, { message: err.message })); }
    return next(createHttpError(500));
  }
};
// const errorHanlder = (err, req, res, next) => {
//   const statusCode = res.statusCode ? res.statusCode : 500;
//   res.json({ message: err.message, stackTrace: err.stack });
// };

// module.exports = errorHanlder;

// another method with switch and title

// const errorHanlder = (err, req, res, next) => {
//   switch (statusCode) {
//     case 400:
//       res.json({
//         title: "Validation Failed",
//         message: err.message,
//         stackTrace: err.stack,
//       });
//       break;

//     case 404:
//       res.json({
//         title: "Not Found",
//         message: err.message,
//         stackTrace: err.stack,
//       });

//     default:
//       break;
//   }
//   const statusCode = res.statusCode ? res.statusCode : 500;
// };

// module.exports = errorHanlder;

// another method by making use of constants.js file
const { constants } = require("../constants");

const errorHanlder = (err, req, res, next) => {
  switch (statusCode) {
    case constants.VALIDATION_ERROR:
      res.json({
        title: "Validation Failed",
        message: err.message,
        stackTrace: err.stack,
      });
      break;

    case constants.NOT_FOUND:
      res.json({
        title: "Not Found",
        message: err.message,
        stackTrace: err.stack,
      });

    case constants.FORBIDDEN:
      res.json({
        title: "Forbidden",
        message: err.message,
        stackTrace: err.stack,
      });

    case constants.UNAUTHORIZED:
      res.json({
        title: "Unauthorized",
        message: err.message,
        stackTrace: err.stack,
      });

    case constants.SERVER_ERROR:
      res.json({
        title: "Server Error",
        message: err.message,
        stackTrace: err.stack,
      });

    default:
      console.log("No error, All good!");
      break;
  }
  const statusCode = res.statusCode ? res.statusCode : 500;
};

module.exports = errorHanlder;

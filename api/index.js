const makePicture = require("./make-picture");

module.exports = (app) => {
  app.use("/md2", [], makePicture(app));
};

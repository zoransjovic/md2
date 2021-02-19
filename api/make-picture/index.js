const express = require("express");
const router = express.Router();
const controller = require("./make-picture.controller");

module.exports = () => {
  router.get("/rect", [], controller.drawRectangle);
  router.get("/romb", [], controller.drawRomb);

  return router;
};

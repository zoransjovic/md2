const DrawService = require("../../modules/make-picture/draw.service");

const drawRectangle = (req, res, next) => {
  const draw = new DrawService();
  const canvas = draw.drawRectangle();

  res.setHeader("Content-Type", "image/png");
  canvas.pngStream().pipe(res);
};

const drawRomb = (req, res, next) => {
  const draw = new DrawService();
  const canvas = draw.drawRomb();

  res.setHeader("Content-Type", "image/png");
  canvas.pngStream().pipe(res);
};

module.exports = {
  drawRectangle,
  drawRomb,
};

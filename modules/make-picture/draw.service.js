const Point = require("./models/point");
// const Rectangle = require("./models/rectangle");
// const Romb = require("./models/romb");
const Shape = require("./models/shape");

/**
 * Draw service to create canvas
 */
class DrawService {
  constructor() {}

  drawRectangle() {
    const a = new Point(220, 200);
    const b = new Point(460, 200);
    const c = new Point(460, 460);
    const d = new Point(220, 460);
    const e = new Point(220, 200);
    const points = [a, b, c, d, e];

    // const r = new Rectangle(points);
    const r = new Shape(points);
    const canvas = r.draw();

    return canvas;
  }

  drawRomb() {
    const a = new Point(400, 200);
    const b = new Point(450, 330);
    const c = new Point(400, 460);
    const d = new Point(350, 330);
    const e = new Point(400, 200);
    const points = [a, b, c, d, e];

    // const r = new Romb(points);
    const r = new Shape(points);
    const canvas = r.draw();

    return canvas;
  }
}

module.exports = DrawService;

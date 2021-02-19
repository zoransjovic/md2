const { createCanvas } = require("canvas");

/**
 * Base Shape class
 */
class Shape {
  constructor(points) {
    this.points = points;
    this.init();
  }

  /**
   * Create canvas
   */
  init() {
    if (this.context === undefined) {
      this.canvas = createCanvas(800, 600);
      this.context = this.canvas.getContext("2d");
    }
  }

  drawLine() {
    let i,
      ctx = this.context;

    ctx.beginPath();
    ctx.moveTo(this.points[0].x, this.points[0].y);

    for (i = 1; i < this.points.length; i++) {
      ctx.lineTo(this.points[i].x, this.points[i].y);
    }

    ctx.closePath();
    ctx.stroke();

    return this.canvas;
  }
}

module.exports = Shape;

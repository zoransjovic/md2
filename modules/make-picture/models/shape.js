const { createCanvas } = require("canvas");
const Line = require("./line");

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

  /**
   * Get Increment(hypotenuse)
   *
   * @param {number} dx
   * @param {number} dy
   */
  getIncrement(dx, dy) {
    return Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
  }

  /**
   * Draw shape
   */
  draw() {
    let i,
      j,
      dx = 10,
      dy,
      line,
      lineLength,
      numOfInterpolation;

    const charToDisplay = "*",
      ctx = this.context;

    ctx.beginPath();
    ctx.moveTo(this.points[0].x, this.points[0].y);
    ctx.font = "20px Georgia";

    for (i = 1; i < this.points.length; i++) {
      // ctx.lineTo(this.points[i].x, this.points[i].y);
      ctx.fillText(charToDisplay, this.points[i - 1].x, this.points[i - 1].y);

      // Get Line length
      line = new Line(this.points[i - 1], this.points[i]);
      lineLength = line.length();

      // Horisontal or Vertical line
      if (
        this.points[i].y === this.points[i - 1].y ||
        this.points[i].x === this.points[i - 1].x
      ) {
        dx = 24;
        numOfInterpolation = lineLength / dx;

        for (j = 1; j < numOfInterpolation; j++) {
          if (
            this.points[i].y === this.points[i - 1].y &&
            this.points[i].x > this.points[i - 1].x
          ) {
            ctx.fillText(
              charToDisplay,
              this.points[i - 1].x + j * dx,
              this.points[i - 1].y
            );
          } else if (
            this.points[i].x === this.points[i - 1].x &&
            this.points[i].y > this.points[i - 1].y
          ) {
            ctx.fillText(
              charToDisplay,
              this.points[i - 1].x,
              this.points[i - 1].y + j * dx
            );
          } else if (
            this.points[i].y === this.points[i - 1].y &&
            this.points[i].x < this.points[i - 1].x
          ) {
            ctx.fillText(
              charToDisplay,
              this.points[i - 1].x - j * dx,
              this.points[i - 1].y
            );
          } else if (
            this.points[i].x === this.points[i - 1].x &&
            this.points[i].y < this.points[i - 1].y
          ) {
            ctx.fillText(
              charToDisplay,
              this.points[i - 1].x,
              this.points[i - 1].y - j * dx
            );
          }
        }
      } else {
        // Diagonale line
        // Calculate 'y' increment
        dy =
          (dx * Math.abs(this.points[i].y - this.points[i - 1].y)) /
          Math.abs(this.points[i].x - this.points[i - 1].x);

          numOfInterpolation = lineLength / this.getIncrement(dx, dy);

        for (j = 1; j < numOfInterpolation; j++) {
          dy =
            (j * dx * Math.abs(this.points[i].y - this.points[i - 1].y)) /
            Math.abs(this.points[i].x - this.points[i - 1].x);

          if (
            this.points[i].x > this.points[i - 1].x &&
            this.points[i].y < this.points[i - 1].y
          ) {
            ctx.fillText(
              charToDisplay,
              this.points[i - 1].x + j * dx,
              this.points[i - 1].y - dy
            );
          } else if (
            this.points[i].x > this.points[i - 1].x &&
            this.points[i].y > this.points[i - 1].y
          ) {
            ctx.fillText(
              charToDisplay,
              this.points[i - 1].x + j * dx,
              this.points[i - 1].y + dy
            );
          } else if (
            this.points[i].x < this.points[i - 1].x &&
            this.points[i].y > this.points[i - 1].y
          ) {
            ctx.fillText(
              charToDisplay,
              this.points[i - 1].x - j * dx,
              this.points[i - 1].y + dy
            );
          } else if (
            this.points[i].x < this.points[i - 1].x &&
            this.points[i].y < this.points[i - 1].y
          ) {
            ctx.fillText(
              charToDisplay,
              this.points[i - 1].x - j * dx,
              this.points[i - 1].y - dy
            );
          }
        }
      }
    }
    ctx.closePath();
    ctx.stroke();

    return this.canvas;
  }
}

module.exports = Shape;

const Line = require("./line");
const Shape = require("./shape");

/**
 * Rectangle class
 */
class Rectangle extends Shape {
  constructor(points) {
    super(points);
  }

  draw() {
    let i,
      j,
      dx = 24,
      line,
      lineLength,
      numOfInterpolation;

    const charToDisplay = "*",
      ctx = this.context;

    ctx.beginPath();
    ctx.moveTo(this.points[0].x, this.points[0].y);
    ctx.font = "20px Georgia";

    for (i = 1; i < this.points.length; i++) {
      ctx.fillText(charToDisplay, this.points[i - 1].x, this.points[i - 1].y);

      // Get Line length
      line = new Line(this.points[i-1], this.points[i]);
      lineLength = line.length();

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
    }
    ctx.closePath();
    ctx.stroke();

    return this.canvas;
  }
}

module.exports = Rectangle;

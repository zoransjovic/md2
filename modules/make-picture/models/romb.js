const Shape = require("./shape");

/**
 * Romb class
 */
class Romb extends Shape {
  constructor(points) {
    super(points);
  }

  draw() {
    let i,
      j,
      dx = 10,
      dy,
      charToDisplay = "*",
      ctx = this.context;

    ctx.beginPath();
    ctx.moveTo(this.points[0].x, this.points[0].y);
    ctx.font = "20px Georgia";

    for (i = 1; i < this.points.length; i++) {
      // ctx.lineTo(this.points[i].x, this.points[i].y);
      ctx.fillText(charToDisplay, this.points[i - 1].x, this.points[i - 1].y);

      for (j = 1; j < 5; j++) {
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
    ctx.closePath();
    ctx.stroke();

    return this.canvas;
  }
}

module.exports = Romb;

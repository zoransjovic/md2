/**
 * Base Line class
 */
class Line {
  constructor(p1, p2) {
    this.p1 = p1;
    this.p2 = p2;
  }

  /**
   * Get Line length
   */
  length() {
    return Math.sqrt(
      Math.pow(this.p1.x - this.p2.x, 2) + Math.pow(this.p1.y - this.p2.y, 2)
    );
  }
}

module.exports = Line;

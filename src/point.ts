export class Point {
  static create({ x, y }: { x: number; y: number }) {
    return new Point(x, y);
  }

  public constructor(readonly x: number, readonly y: number) {
    this.x = x;
    this.y = y;
  }

  add(p: Point): Point {
    return new Point(this.x + p.x, this.y + p.y);
  }

  snapTo(gridX: number, gridY: number): Point {
    const x = Math.round(this.x / gridX) * gridX;
    const y = Math.round(this.y / gridY) * gridY;
    return new Point(x, y);
  }

  scale(factor: number): Point {
    return new Point(this.x * factor, this.y * factor);
  }

  scaleRelativeTo(point: Point, factor: number): Point {
    return this.subtract(point)
      .scale(factor)
      .add(point);
  }

  subtract(p: Point): Point {
    return new Point(this.x - p.x, this.y - p.y);
  }

  clone(): Point {
    return new Point(this.x, this.y);
  }

  toString() {
    return `${this.x},${this.y}`;
  }
}

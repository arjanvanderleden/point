import { Point } from "../src";

class SomeClass {
  constructor(public x: number , public y: number, private reason: string){
    console.log(this.reason);
  }
}

describe('class Point', () => {

    describe('static create', () => {
      it('should create a from object with x and y properties', () => {
        const point = Point.create({x:10,y:20});
        expect(point).toBeDefined();
        expect(point.x).toBe(10);
        expect(point.y).toBe(20);
      });

      it('should create a clone of a point', () => {
        const point1 = Point.create({x:10,y:20});
        const point2 = Point.create(point1);
        expect(point2).toBeDefined();
        expect(point2.x).toBe(10);
        expect(point2.y).toBe(20);
      });

      it('should create a point from any objects with propties x and y', () => {
        const obj = new SomeClass(20,30,"no reason");
        const point2 = Point.create(obj);
        expect(point2).toBeDefined();
        expect(point2.x).toBe(20);
        expect(point2.y).toBe(30);
      });
  });

  describe('add', () => {
    it('should return a new point with added coords', () => {
      const point = Point.create({x:10,y:20});
      const addPoint = Point.create({x:10,y:20});
      const newPoint = point.add(addPoint);
      expect(newPoint.x).toBe(20);
      expect(newPoint.y).toBe(40);
    });
  });

  describe('snapTo', () => {
    it('should return a new point snapped to grid (positive coords)', () => {
      const point = Point.create({x:12.33333,y:24});
      const newPoint = point.snapTo(10,10);
      expect(newPoint.x).toBe(10);
      expect(newPoint.y).toBe(20);
    });

    it('should return a new point snapped to grid (negative coords)', () => {
      const point = Point.create({x:-12.33333,y:-24});
      const newPoint = point.snapTo(10,10);
      expect(newPoint.x).toBe(-10);
      expect(newPoint.y).toBe(-20);
    });

    it('should return a new point snapped to rounded coords', () => {
      const point = Point.create({x:15.00001,y:27});
      const newPoint = point.snapTo(10,10);
      expect(newPoint.x).toBe(20);
      expect(newPoint.y).toBe(30);
    });

  });

  describe('scale', () => {
    it('should scale relative to the origin', () => {
      const point = Point.create({x:15.00001,y:27});
      const newPoint = point.scale(3);
      expect(Math.abs(newPoint.x - 45.00003)).toBeLessThan(.000001);
      expect(newPoint.y).toBe(81);
    });

  });

  describe('scaleRelativeTo', () => {
    it('should scale relative to a given point', () => {
      const point = Point.create({x:15.00001,y:27});
      const basePoint = Point.create({x:5,y:5});
      const newPoint = point.scaleRelativeTo(basePoint, 3);
      expect(Math.abs(newPoint.x - 35.00003)).toBeLessThan(.000001);
      expect(newPoint.y).toBe(71);
    });

    it('should result in a none transform when scaled realtive to self', () => {
      const point = Point.create({x:15.00001,y:27});
      const newPoint = point.scaleRelativeTo(point, 3);
      expect(Math.abs(newPoint.x - 15.00001)).toBeLessThan(.000001);
      expect(newPoint.y).toBe(27);
    });
  });

  describe('subtract', () => {
    it('should return a new point with subtracted positive coords', () => {
      const point = Point.create({x:10.5,y:20.5});
      const addPoint = Point.create({x:10,y:20});
      const newPoint = point.subtract(addPoint);
      expect(newPoint.x).toBe(0.5);
      expect(newPoint.y).toBe(0.5);
    });

    it('should return a new point with subtracted negative coords', () => {
      const point = Point.create({x:10.5,y:20.5});
      const addPoint = Point.create({x:-10,y:-20});
      const newPoint = point.subtract(addPoint);
      expect(newPoint.x).toBe(20.5);
      expect(newPoint.y).toBe(40.5);
    });
  });

  describe('clone', () => {
    it('should clone a point', ()=>{
      const newPoint = Point.create({x:10.5,y:20.5}).clone();
      expect(newPoint.x).toBe(10.5);
      expect(newPoint.y).toBe(20.5);
    });
  });

  describe('toString', () => {
    it('should return a string representation', () => {
      const newPoint = Point.create({x:10.5,y:20.5});
      const s = String(newPoint);
      expect(s).toBe('10.5,20.5');
    });

  });

});
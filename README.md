# @avdl/Point

A package with a point class with basic point transformations


## Install

```bash
npm install @avdl/point
```

## Usage

```typescript
import { Point } from '@avdl/point';

const firstPoint = Point.create({ x: 10, y: 20 });
const secondPoint = new Point(5,10);
const thirdPoint = firstPoint.add(secondPoint);

console.log(`firstPoint  ${firstPoint}`);  // firstPoint  10,20
console.log(`secondPoint ${secondPoint}`); // secondPoint 5,10
console.log(`thirdPoint  ${thirdPoint}`);  // thirdPoint  15,30

const fourthPoint = firstPoint.scaleRelativeTo(secondPoint, 2);
const fifthPoint = firstPoint.subtract(secondPoint).scale(2).add(secondPoint);

console.log(`fourthPoint ${fourthPoint}`); // fourthPoint 15,30
console.log(`fifthPoint  ${fifthPoint}`);  // fifthPoint  15,30

```
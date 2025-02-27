CoordinateSystem = {
    CARTESIAN: 0,
    POLAR: 1
  };
  
  class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static get factory() {
        return new PointFactory();
    }
  }

  class PointFactory {
    // not necessariliy static
     newPolarPoint(rho, theta) {
        return new Point(rho * Math.cos(theta), rho * Math.sin(theta));
    }

    static newCartesianPoint(x, y) {
        return new Point(x, y);
    }
  }
  let p1 = PointFactory.newCartesianPoint(4,5 );
  console.log(p1);
  
  let p2 = Point.factory.newPolarPoint(4, 6);
  console.log(p2);
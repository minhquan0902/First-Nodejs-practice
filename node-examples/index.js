var rect = require("./rectangle");
const rectangle = require("./rectangle");

function solveRect(l, b) {
  console.log("Solving for rectangle with L = " + l + " and b = " + b);

  rect(l, b, (err, rectangle) => {
    if (err) {
      console.log("ERROR: ", err.message);
    } else {
      console.log(
        "The are of the rectangle of dimension L = " +
          l +
          " And b = " +
          b +
          " is " +
          rectangle.area()
      );
      console.log(
        "The perimeter of the rectangle of dimension L = " +
          l +
          " And b = " +
          b +
          " is " +
          rectangle.perimeter()
      );
    }
  });
  console.log("This statement is after the call to rec");
}
solveRect(2, 4);
solveRect(3, 5);
solveRect(0, 5);
solveRect(-3, 5);

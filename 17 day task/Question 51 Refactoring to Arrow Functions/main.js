// Question 51:** Refactoring to Arrow Functions:
//  Take a simple function that calculates the area of a rectangle and 
//  refactor it into an arrow function.
function calculateArea(width, height) {
    return width * height;
}
// Refactored into an arrow function
var calculateAreaArrow = function (width, height) { return width * height; };

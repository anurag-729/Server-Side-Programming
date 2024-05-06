/*Q22. Write a JavaScript program to create a class called 'Rectangle' 
with properties for width and height. Include two methods to 
calculate rectangle area and perimeter. Create an instance of the 
'Rectangle' class and calculate its area and perimeter
*/

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    // Method to calculate the area of the rectangle
    calculateArea() {
        return this.width * this.height;
    }

    // Method to calculate the perimeter of the rectangle
    calculatePerimeter() {
        return 2 * (this.width + this.height);
    }
}

// Create an instance of the Rectangle class
const rectangle = new Rectangle(5, 8);

// Calculate area and perimeter
const area = rectangle.calculateArea();
const perimeter = rectangle.calculatePerimeter();

console.log("Area of the rectangle:", area); // Output: 40
console.log("Perimeter of the rectangle:", perimeter); // Output: 26

/*OUTPUT
---------
Area of the rectangle: 40
Perimeter of the rectangle: 26
---------
 */
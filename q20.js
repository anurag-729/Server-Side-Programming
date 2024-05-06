/*Q20. Write a JavaScript program to implement a stack that checks if 
a given element is present or not in the stack
*/

class Stack {
    constructor() {
        this.items = [];
    }

    // Method to check if an element is present in the stack
    contains(element) {
        return this.items.includes(element);
    }

    // Other methods for stack operations (push, pop, peek, etc.) can be added here

    // Method to push an element onto the stack
    push(element) {
        this.items.push(element);
    }

    // Method to remove and return the top element of the stack
    pop() {
        if (this.isEmpty()) {
            return "Underflow";
        }
        return this.items.pop();
    }

    // Method to return the top element of the stack without removing it
    peek() {
        return this.items[this.items.length - 1];
    }

    // Method to check if the stack is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Method to return the size of the stack
    size() {
        return this.items.length;
    }
}

// Example usage:
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);

console.log("Is 20 present in the stack?", stack.contains(20)); // Output: true
console.log("Is 40 present in the stack?", stack.contains(40)); // Output: false

/*OUTPUT
---------
Is 20 present in the stack? true
Is 40 present in the stack? false
---------
 */
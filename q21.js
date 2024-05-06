/*Q21. Write a JavaScript program to check whether a single linked list 
is empty or not. Return true otherwise false
*/

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    // Method to check if the linked list is empty
    isEmpty() {
        return this.head === null;
    }

    // Method to add an element to the linked list
    add(data) {
        const newNode = new Node(data);
        if (this.isEmpty()) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    // Method to delete all elements from the linked list
    deleteAll() {
        this.head = null;
    }
}

// Example usage:
const linkedList = new LinkedList();

console.log("Is the linked list empty?", linkedList.isEmpty()); // Output: true

linkedList.add(10);
linkedList.add(20);
linkedList.add(30);

console.log("Is the linked list empty after adding elements?", linkedList.isEmpty()); // Output: false

linkedList.deleteAll();

console.log("Is the linked list empty after deleting all elements?", linkedList.isEmpty()); // Output: true

/*OUTPUT
---------
Is the linked list empty? true
Is the linked list empty after adding elements? false
Is the linked list empty after deleting all elements? true
---------
 */
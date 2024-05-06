/*Q14. Write a JavaScript program to display the reading status (i.e. 
display book name, author name and reading status) of the following 
books.
var library = [ 
 {
 author: 'Bill Gates',
 title: 'The Road Ahead',
 readingStatus: true
 },
 {
 author: 'Steve Jobs',
 title: 'Walter Isaacson',
 readingStatus: true
 },
 {
 author: 'Suzanne Collins',
 title: 'Mockingjay: The Final Book of The Hunger Games', 
 readingStatus: false
}];

*/

var library = [
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title: 'Mockingjay: The Final Book of The Hunger Games',
        readingStatus: false
    }
];

function displayReadingStatus(library) {
    for (let i = 0; i < library.length; i++) {
        const book = library[i];
        console.log("Book Name:", book.title);
        console.log("Author Name:", book.author);
        console.log("Reading Status:", book.readingStatus ? "Already read" : "Not yet read");
        console.log("--------------------");
    }
}

// Display reading status of each book in the library
displayReadingStatus(library);

/*OUTPUT
---------
Book Name: The Road Ahead
Author Name: Bill Gates
Reading Status: Already read
--------------------
Book Name: Walter Isaacson
Author Name: Steve Jobs
Reading Status: Already read
--------------------
Book Name: Mockingjay: The Final Book of The Hunger Games       
Author Name: Suzanne Collins
Reading Status: Not yet read
---------
 */
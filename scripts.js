let myLibrary = [];

//book constructor
function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}

Book.prototype.info = function(){
    return `${this.title} by ${this.author} , has ${this.pages} pages  , ${this.status}`;
}

const firstBook = new Book('Book Name Example ', 'John book', '200', 'read already');

let insert = document.querySelector(".add-book");
insert.addEventListener("click", addBookToLibrary(titleOfBook, authorOfBook, pagesOfBook, statusOfBook));
//add new book function
function addBookToLibrary(titleOfBook, authorOfBook, pagesOfBook, statusOfBook) {
    titleOfBook = document.querySelector(".title-input").value;
    authorOfBook = document.querySelector(".author-input").value;
    pagesOfBook = document.querySelector(".pages-input").value;
    statusOfBook = document.querySelector(".status-input").value;

    let newBook = new Book(titleOfBook, authorOfBook, pagesOfBook, statusOfBook);
    console.log(newBook.info());

    myLibrary.push(newBook);
    console.log(myLibrary);
}

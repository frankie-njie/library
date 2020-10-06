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

//add new book function
function addBookToLibrary(titleOfBook, authorOfBook, pagesOfBook, statusOfBook) {
    titleOfBook = document.querySelector(".title-input").value;
    authorOfBook = document.querySelector(".author-input").value;
    pagesOfBook = document.querySelector(".pages-input").value;
    statusOfBook = document.querySelector(".status-input").value;

    if(titleOfBook == "" || authorOfBook == "" || pagesOfBook == "" || statusOfBook == "") {
        newBook == null;
        return;
    }

    let newBook = new Book(titleOfBook, authorOfBook, pagesOfBook, statusOfBook);

    myLibrary.push(newBook);
    return newBook;
}

//show book in document
function displayBook(){
    
}

// let insert = document.querySelector(".add-book");
// insert.addEventListener("click", addBookToLibrary(titleOfBook, authorOfBook, pagesOfBook, statusOfBook));

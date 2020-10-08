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
    statusOfBook = document.querySelector(".status-input").checked;

    // if(titleOfBook == "" || authorOfBook == "" || pagesOfBook == "" || statusOfBook == "") {
    //     newBook == undefined;
    //     return;
    // }

    let newBook = new Book(titleOfBook, authorOfBook, pagesOfBook, statusOfBook);

    myLibrary.push(newBook);
    displayBook(newBook);
}

//show book in document
function displayBook(newBook){
    let div = document.createElement('div');

    let title = document.createElement('p');
    title.innerHTML = newBook.title;

    let author = document.createElement('p');
    author.innerHTML = newBook.author;

    let pages = document.createElement('p');
    pages.innerHTML = newBook.pages;

    let status = document.createElement('p');
    status.innerHTML = newBook.status;
    
    div.appendChild(title);
    div.appendChild(author);
    div.appendChild(pages);
    div.appendChild(status);

    let mainDiv = document.getElementById('books');
    mainDiv.appendChild(div);
}

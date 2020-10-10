let myLibrary = [];
let form = document.getElementById('form');
let formButton = document.getElementsByClassName('create-form');
let addNewBook = document.getElementsByClassName('add-book');

//book constructor
function Book(id, title, author, pages, status) {
    this.id = id
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
    idOfBook = myLibrary.length + 1;
    titleOfBook = document.querySelector(".title-input").value;
    authorOfBook = document.querySelector(".author-input").value;
    pagesOfBook = document.querySelector(".pages-input").value;
    statusOfBook = document.querySelector(".status-input").checked;

    // if(titleOfBook == "" || authorOfBook == "" || pagesOfBook == "" || statusOfBook == "") {
    //     newBook == undefined;
    //     return;
    // }

    let newBook = new Book(idOfBook,titleOfBook, authorOfBook, pagesOfBook, statusOfBook);

    myLibrary.push(newBook);
    displayBook(newBook);
}

//show book in document
function displayBook(newBook){
    
    // myLibrary.forEach((book, index) => {
    //     console.log(book);
    //     return(
    //         <div>
    //             `${book.name}`
    //         </div>
    //     )
    // });
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

     removeBook();
}

function showForm(){
    form.style.visibility = "visible";
}
function removeBook(){
    let removeBtn = document.createElement('button');
    removeBtn.textContent = "Delete Book"

    let mainDiv = document.getElementById('books');
    mainDiv.appendChild(removeBtn);

    // removeBtn.onclick = function(){
    //     mainDiv.removeChild(div);
    //     console.log(myLibrary.splice(id)); 
    // }

}

formButton[0].addEventListener('click', showForm);
addNewBook[0].addEventListener('click', addBookToLibrary);
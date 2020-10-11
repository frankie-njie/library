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
    idOfBook = myLibrary.length ;
    titleOfBook = document.querySelector(".title-input").value;
    authorOfBook = document.querySelector(".author-input").value;
    pagesOfBook = document.querySelector(".pages-input").value;
    statusOfBook = document.querySelector(".status-input").checked;

    let form = document.getElementById('form');

    if(titleOfBook == "" || authorOfBook == "" || pagesOfBook == "" ) {
        alert("Enter a Book name and author ");
        return;
    }else{
        let newBook = new Book(idOfBook,titleOfBook, authorOfBook, pagesOfBook, statusOfBook);

        myLibrary.push(newBook);
        displayBook(newBook);
        form.reset();
    }

}

//Create and display book
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
    div.classList.add("single-book");

    let title = document.createElement('h5');
    title.innerHTML = newBook.title;

    let author = document.createElement('p');
    author.innerHTML = newBook.author;

    let pages = document.createElement('p');
    pages.innerHTML = newBook.pages;

    let status = document.createElement('p');
    status.innerHTML = newBook.status;

    let bookStatusBtn = document.createElement('button')
    bookStatusBtn.innerHTML = "Book Status"
    bookStatusBtn.classList.add('book-statusBtn');

    div.appendChild(title);
    div.appendChild(author);
    div.appendChild(pages);
    div.appendChild(status);
    div.appendChild(bookStatusBtn);

    let mainDiv = document.getElementById('books');
    mainDiv.appendChild(div);

    // Status text
    if(newBook.status === true){
        status.innerHTML = "Read";
    }else{
        status.innerHTML = "Unread";
    }

    //Status button
    bookStatusBtn.onclick = function (){
        if(status.innerHTML === "Read"){
            status.innerHTML = "Unread";
        } else if(status.innerHTML === "Unread"){
            status.innerHTML = "Read"
        }
    }

    //remove book button
     function removeBook(){
        let removeBtn = document.createElement('button');
        removeBtn.textContent = "Delete Book"
        removeBtn.classList.add('remove-bookBtn');
    
        div.appendChild(removeBtn);
    
        removeBtn.onclick = function(){
            mainDiv.removeChild(div);
            removeBtn.remove();
            console.log(myLibrary.splice(newBook.id)); 
        }
    }
    removeBook();
}
//create function to display all books from the array

function showForm(){
    form.style.visibility = "visible";
    form.style.position = "relative";
}
//close form
let closeForm = document.getElementsByClassName('close-form');
closeForm[0].onclick = function(){
    form.style.visibility = "hidden";
    form.style.position = "absolute";
}


formButton[0].addEventListener('click', showForm);
addNewBook[0].addEventListener('click', addBookToLibrary);
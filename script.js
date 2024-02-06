
const myLibrary = [{name: "Koning van Katoren", author: "Jan Terlouw", pages: "210", read: "true"}];

const bookContainer = document.querySelector(".bookcontainer")
const bookName = document.getElementById("Name")
const bookAuthor = document.getElementById("Author")
const bookPages = document.getElementById("Pages")
const bookRead = document.getElementById("Read")
const submitButton = document.querySelector(".submit-book")
const newBookButton = document.querySelector(".new-book")
const bookFormMain = document.querySelector(".book-form-main")
const bookForm = document.querySelector(".bookform")
const cancelButton = document.querySelector(".cancel")

cancelButton.addEventListener("click", (event) => cancelForm(event))
submitButton.addEventListener("click", (event) => submitForm(event))

newBookButton.addEventListener("click", () => showForm())
function showForm(){
    if(!bookForm.classList.contains("visible")){
    bookForm.classList.add("visible")
    bookFormMain.classList.add("visible")
    }
    else {
        bookForm.classList.remove("visible")
        bookFormMain.classList.remove("visible")
    }
}

function Book(name, author, pages, read) {
    this.name = name
    this.author = author
    this.pages = pages
    this.read = read
}

function addBookToLibrary() {
    const inputBookName = bookName.value
    const inputBookAuthor = bookAuthor.value
    const inputBookPages = bookPages.value
    const inputBookRead = bookRead.checked
    const newBook = new Book(inputBookName, inputBookAuthor, inputBookPages, inputBookRead);
    myLibrary.push(newBook)
    return displayBooks()
}

function displayBooks(){
    while (bookContainer.firstChild){
        bookContainer.removeChild(bookContainer.lastChild)
    }
    let indexNumber = 0
    myLibrary.forEach((book) => {
        const bookCard = document.createElement("div")
        bookCard.classList.add("bookcard")
        bookCard.dataset.index = indexNumber
        const nameBook = document.createElement("div")
        const nameAuthor = document.createElement("div")
        const pagesBook = document.createElement("div")
        const readBook = document.createElement("div")

        const bookdeleteButton = document.createElement("button")
        bookdeleteButton.classList.add("deletebutton")
        bookdeleteButton.dataset.index = indexNumber

        const bookReadButton = document.createElement("input")
        bookReadButton.setAttribute("type", "checkbox")
        bookReadButton.classList.add("readbutton")
        bookReadButton.dataset.index = indexNumber
        const bookReadButtonContainer = document.createElement("div")
        bookReadButtonContainer.classList.add("read-container")
       

        nameBook.textContent= `Name: ${book.name}`
        nameAuthor.textContent= `Author: ${book.author}`
        pagesBook.textContent= `Pages: ${book.pages}`
        readBook.textContent = "Read:"
        bookdeleteButton.textContent = "Remove book"
        bookReadButton.checked = book.read

        bookCard.appendChild(nameBook)
        bookCard.appendChild(nameAuthor)
        bookCard.appendChild(pagesBook)
        bookReadButtonContainer.appendChild(readBook)
        bookReadButtonContainer.appendChild(bookReadButton)
        bookCard.appendChild(bookReadButtonContainer)
        bookCard.appendChild(bookdeleteButton)
        bookContainer.appendChild(bookCard)

        indexNumber++
    }
    )
    document.querySelectorAll(".deletebutton").forEach(button =>
        button.addEventListener("click", () => deleteBook(button.dataset.index)))
    document.querySelectorAll(".readbutton").forEach(button =>
            button.addEventListener("click", () => readBook(button.dataset.index)))
    bookForm.classList.remove("visible")
    bookFormMain.classList.remove("visible")
}



function deleteBook(index){
   myLibrary.splice(index, 1)
   displayBooks()
}

function readBook(index){
    const book = myLibrary[index]
    if(book.read == true){
        readBook.textContent = "Not read"
        book.read = false
    }
    else {
        readBook.textContent = "Read"
        book.read = true
    }
    displayBooks()
}

function submitForm(event){
    let isFormValid = document.querySelector(".bookform").checkValidity()
    if(!isFormValid){
        document.querySelector(".bookform").reportValidity()
    }
    else{
    event.preventDefault();
    addBookToLibrary()
    bookForm.reset()
    }
}

function cancelForm(event){
    event.preventDefault();
    displayBooks()
    bookForm.reset()
}
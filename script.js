
const myLibrary = [{name: "Kareltje de pap", author: "Geranium Jopke", pages: "93", read: "true"}, {name: "Kareltje de pap", author: "Geranium Jopke", pages: "95", read: "true"}];

const bookCards = document.querySelector
const bookContainer = document.querySelector(".bookcontainer")
const bookName = document.getElementById("Name")
const bookAuthor = document.getElementById("Author")
const bookPages = document.getElementById("Pages")
const bookRead = document.getElementById("Read")
const submitButton = document.querySelector(".submit-book")

submitButton.addEventListener("click", () => addBookToLibrary())

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
    console.log(inputBookRead)
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
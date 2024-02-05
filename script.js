
const myLibrary = [{name: "Kareltje de pap", author: "Geranium Jopke", pages: "93", read: "on"}, {name: "Kareltje de pap", author: "Geranium Jopke", pages: "95", read: "on"}];

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
    const inputBookRead = bookRead.value
    const newBook = new Book(inputBookName, inputBookAuthor, inputBookPages, inputBookRead);
    myLibrary.push(newBook)
    return displayBooks()
    
}

function displayBooks(){
    myLibrary.forEach((book) => {
        const bookCard = document.createElement("div")
        bookCard.classList.add("bookCard")
        const nameBook = document.createElement("div")
        const nameAuthor = document.createElement("div")
        const pagesBook = document.createElement("div")
        const readBook = document.createElement("div")
    

        nameBook.textContent= book.name
        nameAuthor.textContent= book.author
        pagesBook.textContent= book.pages
        readBook.textContent= book.read

        bookCard.appendChild(nameBook)
        bookCard.appendChild(nameAuthor)
        bookCard.appendChild(pagesBook)
        bookCard.appendChild(readBook)
        bookContainer.appendChild(bookCard)

    })
}
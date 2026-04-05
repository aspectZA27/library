//Array to store all the books
const allBooks = [];

//Event listener for the form submission
const form = document.getElementById("form");
form.addEventListener("submit", addBook);

//Event listener for the view books button
const viewBooksButton = document.getElementById("viewBooks");
viewBooksButton.addEventListener("click", viewBooks);

//Function to popup all books
function popupBooks() {
  const booksContainer = document.getElementById("booksContainer");
  booksContainer.classList.toggle("show");
}

//Function to open the popup form
function popup() {
  var popup = document.getElementById("form");
  popup.classList.toggle("show");
}

//All inputs
const title = document.getElementById("title");
const author = document.getElementById("author");
const publicationYear = document.getElementById("publicationYear");
const genre = document.getElementById("genre");
const summary = document.getElementById("summary");
title.required = true;
author.required = true;
publicationYear.required = true;
genre.required = true;
summary.required = true;

//Function to add new books
function addBook(event) {
  let IDCount = allBooks.length + 1;
  event.preventDefault();
  const newBook = {
    id: IDCount,
    Title: title.value,
    Author: author.value,
    PublicationYear: publicationYear.value,
    Genre: genre.value,
    Summary: summary.value,
  };
  allBooks.push(newBook);
  console.log(IDCount);
  console.log(allBooks);
}

//Clear form inputs after submission
form.addEventListener("submit", () => {
  title.value = "";
  author.value = "";
  publicationYear.value = "";
  genre.value = "";
  summary.value = "";
});

//Function to view all books
function viewBooks() {
  const bookList = document.getElementById("bookList");

  bookList.innerHTML = "";

  allBooks.forEach((book) => {
    //Create new container for each book

    const bookItem = document.createElement("div");
    bookItem.classList.add("bookItem");

    if (book.id % 2 === 0) {
      bookItem.style.backgroundColor = "#87888a";
    }

    const bookTitle = document.createElement("h3");
    bookTitle.classList.add("title-men");
    bookTitle.textContent = `Title: ${book.Title}`;

    const bookAuthor = document.createElement("p");
    bookAuthor.classList.add("author-men");
    bookAuthor.textContent = `Author: ${book.Author}`;

    const bookDesc = document.createElement("p");
    bookDesc.classList.add("desc-men");
    bookDesc.textContent = `Description: ${book.Summary}`;

    const bookRead = document.createElement("button");
    bookRead.classList.add("bookList-button");
    bookRead.textContent = "Unread";
    bookRead.onclick = function () {
      if (bookRead.innerHTML === "Unread") {
        bookRead.innerHTML = "Read";
      } else {
        bookRead.innerHTML = "Unread";
      }
    };

    const bookDelete = document.createElement("button");
    bookDelete.classList.add("bookList-button");
    bookDelete.textContent = "Delete";
    bookDelete.onclick = function () {
      bookItem.remove();
      allBooks.splice(
        allBooks.findIndex((b) => b.id === book.id),
        1,
      );
    };

    bookItem.appendChild(bookTitle);
    bookItem.appendChild(bookAuthor);
    bookItem.appendChild(bookDesc);
    bookItem.appendChild(bookRead);
    bookItem.appendChild(bookDelete);

    bookList.appendChild(bookItem);
  });
}

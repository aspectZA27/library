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

//Function to view all books
function viewBooks() {
  const bookList = document.getElementById("bookList");
  bookList.innerHTML = "";
  allBooks.forEach((book) => {
    const bookItem = document.createElement("p");
    bookItem.textContent = `Title: ${book.Title} \n Author: ${book.Author}`;
    bookList.appendChild(bookItem);
  });
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
  event.preventDefault();
  const newBook = {
    id: Math.floor(Math.random() * 1000),
    Title: title.value,
    Author: author.value,
    PublicationYear: publicationYear.value,
    Genre: genre.value,
    Summary: summary.value,
  };
  allBooks.push(newBook);
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

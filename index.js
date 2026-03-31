const allBooks = [
  {
    id: 0,
    Title: "",
    Author: "",
    PublicationYear: "",
    Genre: "",
    Summary: "",
  },
];
const form = document.getElementById("form");
form.addEventListener("submit", addBook);

function popup() {
  var popup = document.getElementById("form");
  popup.classList.toggle("show");
}
//All inputs
const title = document.getElementById("title");
const author = document.getElementById("author");
const publicationYear = document.getElementById("publication-year");
const genre = document.getElementById("genre");
const summary = document.getElementById("summary");

//Function to add new books
function addBook(event) {
  event.preventDefault();
  const newBook = {
    id: Math.floor(Math.random() * 1000),
    Title: title,
    Author: author,
    PublicationYear: publicationYear,
    Genre: genre,
    Summary: summary,
  };

  allBooks.push(newBook);
  console.log(allBooks);
}

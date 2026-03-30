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

const books = document.getElementById("books");

const addbook = document.getElementById("addbook");

function popup() {
  var popup = document.getElementById("popup-form");
  popup.classList.toggle("show");
}

const BASE_URL = "http://localhost:3000";

const newBook = {
  title: "test book",
  author: "me",
  genres: ["CSS"],
  rating: 9,
};

const options = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(newBook),
};

fetch("http://localhost:3000/book", options)
  .then((res) => res.json)
  .then(console.log);

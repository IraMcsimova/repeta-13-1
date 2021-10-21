const BASE_URL = "http://localhost:3000";

function fetchBook() {
  return fetch(`${BASE_URL}/book`).then((res) => res.json());
}

function fetchBookById(bookId) {
  return fetch(`${BASE_URL}/book/${bookId}`).then((res) => res.json());
}

fetchBook();

fetchBookById(2);

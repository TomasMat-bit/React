import React, { useState, useEffect } from "react";

const App = () => {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState({ title: "", author: "", year: "" });

  // Įkelti knygas iš serverio
  useEffect(() => {
    fetch("http://localhost:5000/books")
      .then((response) => response.json())
      .then((data) => setBooks(data))
      .catch((error) => console.error("Klaida įkeliant knygas:", error));
  }, []);

  const addBook = () => {
    fetch("http://localhost:5000/books", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newBook),
    })
      .then((response) => response.json())
      .then((data) => {
        setBooks([...books, data]);
        setNewBook({ title: "", author: "", year: "" });
      })
      .catch((error) => console.error("Klaida pridedant knygą:", error));
  };

  const deleteBook = (id) => {
    fetch(`http://localhost:5000/books/${id}`, { method: "DELETE" })
      .then(() => setBooks(books.filter((book) => book.id !== id)))
      .catch((error) => console.error("Klaida trinant knygą:", error));
  };

  return (
    <div className="app-container">
      <h1 className="futuristic-title">Knygų Pasaulis</h1>{" "}
      <div className="book-list">
        {books.map((book) => (
          <div className="book-item" key={book.id}>
            <p>
              {book.title} - {book.author} ({book.year})
            </p>
            <button className="delete-btn" onClick={() => deleteBook(book.id)}>
              Ištrinti
            </button>
          </div>
        ))}
      </div>
      <div className="add-book-form">
        <h2>Pridėti naują knygą</h2>
        <input
          type="text"
          placeholder="Pavadinimas"
          value={newBook.title}
          onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Autorius"
          value={newBook.author}
          onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
        />
        <input
          type="number"
          placeholder="Metai"
          value={newBook.year}
          onChange={(e) => setNewBook({ ...newBook, year: e.target.value })}
        />
        <button onClick={addBook} className="add-btn">
          Pridėti knygą
        </button>
      </div>
    </div>
  );
};

export default App;

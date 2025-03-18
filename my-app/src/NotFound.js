import "./App.css";

function NotFound() {
  return (
    <div className="container">
      <h1>❌ Puslapis nerastas</h1>
      <p>Atrodo, kad šis puslapis neegzistuoja.</p>
      <a href="/" style={{ textDecoration: "none", color: "blue" }}>
        Grįžti į pagrindinį puslapį
      </a>
    </div>
  );
}

export default NotFound;

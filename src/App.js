import React, { Fragment, useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import BookList from "./Components/BookList";
import Form from "./Components/Form";

function App() {
  const [book, setBook] = useState({
    // {} es un objeto
    titulo: "",
    autor: "",
    edicion: 0,
  });

  const [books, setBooks] = useState([]); // manejar estados (estado inicial) este hook es para agregar estados a nuestros componentes

  const [listUpdated, setListUpdated] = useState(false); // manejamos estados cuando se haga una modificación en la tabla

  //[estado, métodoEstado]
  useEffect(() => {
    // hook para el efecto de actualizar los datos de la tabla
    const getBooks = () => {
      // se ejecuta al iniciar mi app
      fetch("http://localhost:9000/api")
        .then((res) => res.json())
        .then((res) => setBooks(res));
    };
    getBooks();
    setListUpdated(false);
  }, [listUpdated]); // (... ,[listUpdated]) indica que cuando se haya un cambio en ese estado se ejecute el query

  return (
    <Fragment>
      <Navbar brand="Library app" />
      <div className="container">
        <div className="row">
          <div className="col-7">
            <h2 style={{ textAlign: "center" }}>Book List</h2>
            <BookList
              book={book}
              setBook={setBook}
              books={books}
              setListUpdated={setListUpdated}
            />
          </div>
          <div className="col-5">
            <h2 style={{ textAlign: "center" }}>Book Form</h2>
            <Form book={book} setBook={setBook} setListUpdated={setListUpdated}/>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;

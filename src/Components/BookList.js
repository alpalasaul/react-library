import React from "react";

const BookList = ({ book, setBook, books, setListUpdated }) => {
  const handleBorrar = (id) => {
    // entra el id como parametro
    // este método va a ejecutar una query
    const requesInit = {
      method: "DELETE",
    };
    fetch("http://localhost:9000/api/" + id, requesInit)
      .then((res) => res.text)
      .then((res) => console.log(res));

    // modificar el estado
    setListUpdated(true);
  };

  let { titulo, autor, edicion } = book; // ingresa el libro en blanco dclaro en app.js

  const handleActualizar = (id) => {
    edicion = parseInt(edicion, 10);
    if (titulo === "" || autor === "" || edicion <= 0) {
      alert("Todos los campos son obligatorios");
      return;
    }
    const requesInit = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(book),
    };
    fetch("http://localhost:9000/api/" + id, requesInit)
      .then((res) => res.text())
      .then((res) => console.log(res));

    // modificar el estado
    setListUpdated(true);
    // limpiar
    setBook({
      titulo: "",
      autor: "",
      edicion: 0,
    });
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Author</th>
          <th>Edition</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book) => (
          <tr key={book.id}>
            <td>{book.id}</td>
            <td>{book.titulo}</td>
            <td>{book.autor}</td>
            <td>{book.edicion}</td>
            <td>
              <div className="mb-3">
                <button
                  onClick={() => handleBorrar(book.id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </div>
              <div className="mb-3">
                <button
                  onClick={() => handleActualizar(book.id)}
                  className="btn btn-dark"
                >
                  Updated
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BookList;

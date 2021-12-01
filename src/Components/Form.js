import React from 'react'

const Form = ({book, setBook}) => { // recibimos las props desde App.js

    const handleChange = e => {
        setBook({
            ...book, // este operado me permite hacer una copia (...)
            [e.target.name]: e.target.value // capturando y modificado el estado de un libro (depende el campo que modifiquemos)
        })
    }

    // debe ocntener el misno nombre de variables de lo contrario no lo identificará
    // titulo, autor y edicion son nombre declarados en App.js como objeto {}
    let{titulo, autor, edicion} = book // guardando los datos en variables para poderlas utilizar mas adelante

    const handleSubmit = () => {
        edicion = parseInt(edicion, 10) // convertir a entero base 10
        // validacion de los campos
        if (titulo === '' || autor === '' || edicion <= 0) { // convertir de string a entero
            alert('Todos los campos son obligatorios')
            return 
        }

        // consulta
        const requesInit = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(book) // convertir objeto a json
        }
        fetch('http://localhost:9000/api', requesInit)
        .then(res => res.text())
        .then(res => console.log(res)) // respuesta desde el servidor mostrada desde consola

        // reiniciar el state despues de haber agregado el nuevo libro
        setBook({
            titulo: '',
            autor: '',
            edicion: 0
        })
        // mostrar en lista renderiza solo al parecer]
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label> 
                <input value={titulo} name="titulo" onChange={handleChange} type="text" id="title" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="autor" className="form-label">Author</label> 
                <input value={autor} name="autor" onChange={handleChange} type="text" id="autor" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="edicion" className="form-label">Edition</label> 
                <input value={edicion} name="edicion" onChange={handleChange} type="number" id="edicion" className="form-control"/>
            </div>
            <button type="submit" className="btn btn-primary" >Submit</button>
        </form>
    );
}
export default Form;
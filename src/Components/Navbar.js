import React from 'react'

const Navbar = ({brand}) => { // mandamos como parámetro de js [tener en cuenta que estamos usando una función si fuese una clase sería accesible con this.props.****]
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container">
                <a href="#!" className="navbar-brand">{brand}</a>
            </div>
        </nav>
    );
}

export default Navbar;
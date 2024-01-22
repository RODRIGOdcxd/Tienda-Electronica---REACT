import React from "react";
import "../Css/header.css"
import logoHeader from "../img/bx-cheese.svg";
import imgCarrito from "../img/bxs-cart.svg";
function Header(){
    return(
        <>
            <header>
              <div className="divLogo">
                <img src={logoHeader} alt="LogoHeader" className="imgLogo"></img>
                <h3 className="nombrePagina">TIENDA ELECTRONICA</h3>
              </div>
              <nav className="navTextoMenu">
                <a href="#">PRODUCTOS</a>
              </nav>
              <div className="divCarrito">
                <img src={imgCarrito} alt="Imagen de carrito" className="imgCarrito"></img>
              </div>
              <div className="divMoneda">
                <span id="Moneda" className="Moneda">USD</span>
              </div>
            </header>
        </>
    );
}

export default Header;
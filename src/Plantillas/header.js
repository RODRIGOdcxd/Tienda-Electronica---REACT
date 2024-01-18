import React from "react";
import "../Css/header.css"

function Header(){
    return(
        <>
            <header>
              {/**/}
              <div className="logo-header"></div>
              <div className="menu-header"></div>
              <div className="carrito-header"></div>
              <div className="moneda-header"></div>
            </header>
        </>
    );
}

export default Header;
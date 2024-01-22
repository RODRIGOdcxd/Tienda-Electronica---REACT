import React from 'react';
import '../Css/principal.css'
function Principal(){
    return(
        <>
          <div className="divImgFondo"></div>
          <div className="divTitulo">
            <span id="titulo" className='spanTitulo'>MIRA LOS MEJORES <br/>PRODUCTOS</span>
          </div>
          <div className="divSeñalAbajo">
            <a className="aSeñalBottom" href="#">
              <svg class="downward-indicator-module--downIcon--1e586 animations-module--slideUp--66da7 animations-module--slideUpStart--f5cb8 señalbottom" width="3em" height="3em" fill="currentColor" viewBox="0 0 16 16">
                  <path fill="white" fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"></path>
              </svg>
            </a>
          </div>
        </>
    );
}

export default Principal;
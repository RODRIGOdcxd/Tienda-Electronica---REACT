//Importacion para usar REACT
import React from 'react';
//Libreria para renderizar el DOM
import ReactDOM from 'react-dom/client';
/*Importacion del app que es el componente 
que contiene todo el contenido que se muestra en la pagina*/
import Header from './Plantillas/header';
import "./Css/root.css";
//import App from './App';
import reportWebVitals from './reportWebVitals';
/*representa una forma diferente de inicializar y renderizar aplicaciones de React 
en comparación con el método tradicional usando ReactDOM.render()*/
//Despues manipulamos el DOM con document y seleccionamos el elemento con getElementById con id "root"
//Captura el id de root del index que se encuentra en el public
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //El React.StricMode sirve para poder detectar problemas posibles en el codigo
  <React.StrictMode>
    <Header />
  </React.StrictMode>
);

//Evalua metricas del programa y lo optimiza
reportWebVitals();

import { useState } from 'react';
import Header from './componentes/Header';
import Acordeon from './componentes/Accordion';
import data from './data';

//Componente principal que usamos para juntar los otros componentes del proyecto

function App() {
  
  return(
    //Aquí importamos el titulo y el espacio dónde irá el acordeón
    <div className="app">
      <Header />
      <Acordeon data={data} />
    </div>
  );

}

export default App;

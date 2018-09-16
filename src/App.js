import React, { Component } from 'react';
import BarraNavegacion from './componentes/BarraNavegacion';
import ImagenHome from './componentes/ImagenHome';
import Home from './componentes/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Peliculas from './componentes/views/Peliculas';
import Personajes from './componentes/views/Personajes';
import Planetas from './componentes/views/Planetas';
import Vehiculos from './componentes/views/Vehiculos';
import Cruceros from './componentes/views/Cruceros';





class App extends Component {
  render() {
    return (
      <div>
      <Router>
      <div className="app container">

      <BarraNavegacion />
      <ImagenHome />
      <Route exact path="/" component={Home} />
      <Route path='/peliculas' component={Peliculas} />
      <Route path='/personajes' component={Personajes} />
      <Route path='/planetas' component={Planetas} />
      <Route path='/vehiculos' component={Vehiculos} />
      <Route path='/cruceros' component={Cruceros} />
   
     


      </div>
      </Router>
      </div>
        );
      }
    }
    
    export default App;

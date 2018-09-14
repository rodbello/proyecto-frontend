import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BarraNavegacion extends Component {
    render() {
        return (

            <nav className="navbar navbar-expand-lg navbar-black bg-black">
              <div className="navbar-brand " href=""></div>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
    
              <div className="collapse navbar-collapse" id="navbarColor02">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                    <Link to='/' className="nav-link" >Home <span className="sr-only">(current)</span></Link >
                  </li>
                  <li className="nav-item">
                    <Link to='/peliculas' className="nav-link" >Películas</Link >
                  </li>
                  <li className="nav-item">
                    <Link to='/personajes' className="nav-link" >Personajes</Link >
                  </li>
                  <li className="nav-item">
                    <Link to='/planetas' className="nav-link" >Planetas</Link >
                  </li>
                  <li className="nav-item">
                    <Link to='/vehiculos' className="nav-link" >Vehículos</Link >
                  </li>
                  <li className="nav-item">
                    <Link to='/cruceros' className="nav-link" >Cruceros</Link >
                  </li>
    
                </ul>
              </div>
            </nav>
    
        
        );
    }
}
export default BarraNavegacion;
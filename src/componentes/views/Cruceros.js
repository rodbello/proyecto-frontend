import React, { Component } from 'react';
import axios from 'axios';
import Paginacion from './Paginacion';

class Cruceros extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cruceros: []
        }
    }

    paginaAnterior = () => {

    }
    paginaSiguiente = () => {

    }

    componentWillMount() {

        axios.get('https://swapi.co/api/starships/?page=1')
            .then((response) => {
                console.log(response)
                this.setState({ cruceros: response.data.results })
            }).catch((error) => {
                console.log(error)
            });
    }

    render() {
        var ships = this.state.cruceros.map(function (s) {
            return <div className="col-sm-4" >
                <div className="card mb-3">
                    <h2 className="card-header text-center">{s.name}</h2>

                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><b>Model:</b> {s.model}</li>
                        <li className="list-group-item"><b>Fabricante:</b> {s.manufacturer}</li>
                        <li className="list-group-item"><b>Clase de crucero:</b> {s.starship_class}</li>
                        <li className="list-group-item"><b>Tripulación:</b> {s.crew}</li>
                        <li className="list-group-item"><b>Pasajeros:</b> {s.passengers}</li>
                    </ul>
                </div>
            </div>
        })
        return (

            <div>
                <br />
                <br />
                <br />
                <div className="jumbotron" id="imagenCruceros">
                    <br />
                    <h2 className="display-3 font-weight-bold">Cruceros Espaciales</h2>
                    <h3 className="lead">Son recursos de transporte que tiene</h3>
                    <h3 className="lead">capacidad de hiperimpulso.</h3>
                    <br />
                </div>

                <div className="encabezados">
                <h3>Detalle de Cruceros Espaciales</h3>
                </div>
                <br />
                <div className="container">
                    <div className="row justify-content-center">
                        {ships}
                    </div>
                    <div className='row justify-content-center'>
                        <Paginacion 
                            paginaAnterior = {this.props.paginaAnterior}
                            paginaSiguinete = {this.props.paginaSiguiente}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
export default Cruceros;

import React, { Component } from 'react';
import axios from 'axios';
import Paginacion from './Paginacion';

class Cruceros extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cruceros: [],
            pagina:''
        }
    }

    paginaAnterior = () => {
        let pagina = this.state.pagina;
        if(pagina === 1) return null;
        pagina -= 1;
        this.setState({
            pagina
        });
        console.log(pagina)
    };
    paginaSiguiente = () => {
        let pagina = this.state.pagina;
        pagina += 1;
        this.setState({
            pagina
        });
        console.log(pagina)
    };

    componentWillMount() {
        var pagina = 1
        axios.get('https://swapi.co/api/starships/?page='+pagina)
            .then((response) => {
                console.log(response)
                this.setState({ cruceros: response.data.results,
                                pagina: pagina
                                
                })
            }).catch((error) => {
                console.log(error)
            });
    }

    render() {
        var ships = this.state.cruceros.map(function (s) {
            return <div className="col-sm-4" key={s.model} >
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
                            paginaAnterior = {this.paginaAnterior}
                            paginaSiguiente = {this.paginaSiguiente}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
export default Cruceros;

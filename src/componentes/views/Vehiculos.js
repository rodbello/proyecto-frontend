import React, { Component } from 'react';
import axios from 'axios';

class Vehiculos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            autos: []
        }
    }

    componentWillMount() {

        axios.get('https://swapi.co/api/vehicles/')
            .then((response) => {
                console.log(response)
                this.setState({ autos: response.data.results })
            }).catch((error) => {
                console.log(error)
            });
    }


    render() {
        var vehic = this.state.autos.map(function (v) {
            return <div className="col-sm-4">
                            

                <div className="card mb-3">
                    <h2 className="card-header text-center">{v.name}</h2>
                    
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><b>Modelo:</b> {v.model}</li>
                        <li className="list-group-item text-justify align-self-stretch"><b>Longitud:</b> {v.length}</li> 
                        <li className="list-group-item"><b>Tripulación:</b> {v.crew}</li>
                        <li className="list-group-item"><b>Pasajeros:</b> {v.passengers}</li>
                        <li className="list-group-item"><b>Clase de vehiculo:</b> {v.vehicle_class}</li>
                    </ul>
                </div>
            </div>
        })
        return (

            <div>
                <div clasName="container">
                    <div className="row">
                        {vehic}
                    </div>
                </div>
            </div>
        );
    }
}


export default Vehiculos;

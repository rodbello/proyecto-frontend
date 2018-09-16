import React, { Component } from 'react';
import axios from 'axios';






class Planetas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            planetas: []
            
        }
    }

    componentWillMount() {

        axios.get('https://swapi.co/api/planets/')
            .then((response) => {
                console.log(response)
                this.setState({ planetas: response.data.results })
            }).catch((error) => {
                console.log(error)
            });
    }

    
    render() {
        var plan = this.state.planetas.map(function (l) {
            return <div className="col-sm-4">
                            

                <div className="card mb-3">
                    <h2 className="card-header text-center">{l.name}</h2>
                    
                    <ul className="list-group list-group-flush">
                        
                        <li className="list-group-item text-justify align-self-stretch"><b>Periodo de Rotación:</b> {l.rotation_period}</li>
                        <li className="list-group-item"><b>Periodo Orbital:</b> {l.orbital_period}</li>
                        <li className="list-group-item"><b>Diametro:</b> {l.diameter}</li>
                        <li className="list-group-item"><b>Clima:</b> {l.climate}</li>
                        <li className="list-group-item"><b>Gravedad:</b> {l.gravity}</li>
                        <li className="list-group-item"><b>Terreno:</b> {l.terrain}</li>
                        <li className="list-group-item"><b>Superficie de Agua:</b> {l.surface_water}</li>
                        <li className="list-group-item"><b>Población:</b> {l.population}</li>
                        <li className="list-group-item"><b>Residentes:</b> {l.residents}</li>
                    </ul>

                </div>
                
            </div>
            
        })
        return (

            <div>
                <div clasName="container">
                    <div className="row">
                        {plan}
                    </div>
                </div>
               
            </div>
        );
        }
      }
    


export default Planetas;
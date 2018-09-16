import React, { Component } from 'react';
import axios from 'axios';

class Personajes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            personajes: []
        }
    }

    componentWillMount() {

        axios.get('https://swapi.co/api/people/')
            .then((response) => {
                console.log(response)
                this.setState({ personajes: response.data.results })
            }).catch((error) => {
                console.log(error)
            });
    }


    render() {
        var per = this.state.personajes.map(function (y) {
            return <div className="col-sm-4">
                            

                <div className="card mb-3">
                    <h2 className="card-header text-center">{y.name}</h2>
                    
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><b>Altura:</b> {y.height}</li>
                        <li className="list-group-item text-justify align-self-stretch"><b>Peso:</b> {y.mass}</li>
                        <li className="list-group-item"><b>Color de Ojos:</b> {y.hair_color}</li>
                        <li className="list-group-item"><b>Color de Piel:</b> {y.skin_color}</li>
                        <li className="list-group-item"><b>Color de Ojos:</b> {y.eye_color}</li>
                        <li className="list-group-item"><b>Cumpleaños:</b> {y.birth_year}</li>
                        <li className="list-group-item"><b>Genero:</b> {y.gender}</li>
                        <li className="list-group-item"><b>Planeta Natal:</b> {y.homeworld}</li>
                        <li className="list-group-item"><b>Peliculas:</b> {y.films}</li>
                    </ul>
                </div>
            </div>
        })
        return (

            <div>
                <div clasName="container">
                    <div className="row">
                        {per}
                    </div>
                </div>
            </div>
        );
    }
}



export default Personajes;
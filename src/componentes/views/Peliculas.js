import React, { Component } from 'react';
import axios from 'axios';

class Peliculas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            peliculas: []
        }
    }

    componentWillMount() {

        axios.get('https://swapi.co/api/films')
            .then((response) => {
                console.log(response)
                this.setState({ peliculas: response.data.results })
            }).catch((error) => {
                console.log(error)
            });
    }


    render() {
        var peli = this.state.peliculas.map(function (p) {
            return <div className="col-sm-4">
                            <h1>Peliculas</h1>

                <div className="card mb-3">
                    <h2 className="card-header text-center">{p.title}</h2>
                    
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><b>Episodio:</b> {p.episode_id}</li>
                        <li className="list-group-item text-justify align-self-stretch"><b>Sinopsis:</b> {p.opening_crawl}</li>
                        <li className="list-group-item"><b>Director:</b> {p.director}</li>
                        <li className="list-group-item"><b>Productor:</b> {p.producer}</li>
                        <li className="list-group-item"><b>Fecha:</b> {p.release_date}</li>
                    </ul>
                </div>
            </div>
        })
        return (

            <div>
                <div className="container">
                    <div className="row">
                        {peli}
                    </div>
                </div>
            </div>
        );
    }
}


export default Peliculas;
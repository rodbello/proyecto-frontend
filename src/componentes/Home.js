import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component {
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
        var peliculas = this.state.peliculas.map(function (pelicula) {
            return <div className="col-sm-4" key={pelicula.id}>
                <div className="card mb-3">
                    <h2 className="card-header text-center">{pelicula.title}</h2>

                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><b>Episodio:</b> {pelicula.episode_id}</li>
                        <li className="list-group-item text-justify align-self-stretch"><b>Sinopsis:</b> {pelicula.opening_crawl}</li>
                        <li className="list-group-item"><b>Director:</b> {pelicula.director}</li>
                        <li className="list-group-item"><b>Productor:</b> {pelicula.producer}</li>
                        <li className="list-group-item"><b>Fecha:</b> {pelicula.release_date}</li>
                    </ul>
                </div>
            </div>

        })
        return (
            <div>
                <br />
                <br />
                <br />
                <div className="jumbotron" id="imagenHome">
                    <br />
                    <h2 className="display-3 font-weight-bold">STAR WARS</h2>
                    <h3 className="lead">Proyecto Web empleando React</h3>
                    <h3>Data: SWAPI - The Star Wars API</h3>
                    <br />
                </div>

                <div className="encabezados">
                    <h3>Resumen de Películas</h3>
                </div>
                <br />
                <div className="row">

                    {peliculas}

                </div>
            </div>
        );
    }
}


export default Home;

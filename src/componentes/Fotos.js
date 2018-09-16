import React, { Component} from 'react';

class Fotos extends Component {
    render(){
        var fotos = this.props.fotos.map(function(foto){
            return <div className="col-md-3" key={foto.id}>
                <img src={foto.Url('./src/imsges/*.jpg')} alt={foto.id}/>
            </div>
        });
        return (
            <div className="container">
               <div className="row">
                    {fotos}
               </div> 
            </div>
        );
    }
}

export default Fotos;
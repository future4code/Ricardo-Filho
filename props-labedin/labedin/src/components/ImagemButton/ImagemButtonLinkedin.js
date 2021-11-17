import React from 'react';
import './ImagemButtonLinkedin.css'

function ImagemButtonLinkedin(props) {
    return (
        <div className="image-button-container">
            <img src={ props.imagem } alt="imagem-botao"/>
            <p><a href="https://www.linkedin.com/in/ricardo-rickhardwares/" target="_blank" rel="noreferrer">{props.texto}</a></p>
            
        </div>

    )
}

export default ImagemButtonLinkedin;
import React from 'react';
import './ImagemButton.css'

function ImagemButton(props) {
    return (
        <div className="image-button-container">
            <img src={ props.imagem } alt="imagem-botao"/>
            <p><a href="https://www.facebook.com/RickHardL" target="_blank" rel="noreferrer">{props.texto}</a></p>
            
        </div>

    )
}

export default ImagemButton;
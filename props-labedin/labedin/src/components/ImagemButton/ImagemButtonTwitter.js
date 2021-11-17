import React from 'react';
import './ImagemButtonTwitter.css'

function ImagemButtonTwitter(props) {
    return (
        <div className="image-button-container">
            <img src={ props.imagem } alt="imagem-botao"/>
            <p><a href="https://twitter.com/rickhards" target="_blank" rel="noreferrer">{props.texto}</a></p>
            
        </div>

    )
}

export default ImagemButtonTwitter;
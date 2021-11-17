import React from 'react';
import './CardPequeno.css'

function CardPequeno(props) {
    return (
        <div className="small-container">
            <div className="imagens">
                <img id="tamanho-arroba" src={props.imagem1} alt="imagem-arroba"/> 
            </div>
            <div className="texto-contatos">
                <h4><a className="link-mail" href="mailto:rickhard@bol.com.br">{props.email1}</a></h4>
            </div>
            <div className="imagens">
                <img id="tamanho-zap" src={props.imagem2} alt="imagem-WhatsApp"/>
            </div>
            <div className="texto-contatos">
                <h4>{props.email2}</h4>
            </div>
        </div>
    )
}

export default CardPequeno;
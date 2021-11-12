import React from 'react';
import './CardGrande.css'

function CardGrande(props) {
    return (
        <div className="bigcard-container">
            <img src={ props.imagem } alt="Minha Foto"/>
            <div>
                <h4>{ props.nome }</h4>
                <p>{ props.descricao }</p>
                <p>{ props.cargo }</p>
                <p>{ props.inicio }</p>
                <p>{ props.termino }</p>
            </div>
        </div>
    )
}

export default CardGrande;
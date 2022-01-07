import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './styles.css'

export default function PokeCard(props) {
  const [pokemon, setPokemon] = useState({})

  const pegaPokemon = pokeName => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
      .then(res => setPokemon(res.data))
  }

  useEffect(() => {
    pegaPokemon(props.pokemon)
  }, [pokemon])

  useEffect(() => {
    if (props.pokemon !== props.pokemon) {
      pegaPokemon()
    }
  }, [pokemon])

  return (
    <div className="App">
      <div className="card">
        <p className="oP">{pokemon.name}</p>
        <p className="oP">{pokemon.weight} Kg</p>
        {pokemon.types && <p className="oP">{pokemon.types[0].type.name}</p>}
        {pokemon.sprites && (
          <img
            className="imagem"
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
          />
        )}
      </div>
    
    </div>
  )
}

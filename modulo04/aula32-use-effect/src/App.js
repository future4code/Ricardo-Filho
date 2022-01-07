import { useEffect, useState } from 'react'
import './styles.css'
import axios from 'axios'
import PokeCard from './components/PokeCard/PokeCard'

export default function App() {
  const [pokeList, setPokelist] = useState([]);
  const [pokeName, setPokeName] = useState("");

const buscaApi =  async( ) => {

  await axios.get( "https://pokeapi.co/api/v2/pokemon/?limit=151" )
  .then(({ data }) => {
    setPokelist( data.results )
  });

};

useEffect(() => {
  buscaApi();
}, []);

const changePokeName = ( event ) => {
setPokeName( event.target.value );
};

  return (
    <div className="App">
      <div className='Topo'>Api - Pokemon - Labenu</div>
      
      <select onChange={changePokeName}>
        <option value={""}>Nenhum</option>

        {pokeList.map(pokemon => {
          return (
            <option key={pokemon.name} value={pokemon.name}>
              {pokemon.name.toUpperCase()}
            </option>
          )
        })}
      </select>
      
      {pokeName && <PokeCard pokemon={pokeName} />}
      <div className='footer'>RickHard'Wares</div>
    </div>
    
  )
}

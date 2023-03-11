import { Pokemon } from "./pokemon"
import { useDispatch } from 'react-redux';
import './index.css';

export const Pokemons = ({ pokemons = [] }) => {
    return (
        <div className="pokemon-content">
            {
                pokemons.length === 0
                ? <div style={{ texAlign: "center" }}><h1>No existe un pokemon con ese nombre</h1></div>
                : pokemons.map(pokemon => {
                    return <Pokemon key={pokemon.id} id={pokemon.id} name={pokemon.name} favorite={pokemon.favorite} abilities={pokemon.abilities} image={pokemon.sprites.front_default}></Pokemon>
                })
            }
        </div>
    )
}
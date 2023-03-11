import { useEffect } from 'react';
import { Pokemons } from './components/pokemons';
import { SearchPokemon } from './components/search';
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { fetchPokemonsWithDetails } from './slices/dataSlice';
import Logo from './static/logo.svg';
import './App.css';

function App() {
  const pokemons = useSelector(state => state.data.pokemonsFiltereds, shallowEqual)
  const loading = useSelector(state => state.ui.loading)
  const dispatch = useDispatch();
  
  useEffect(() => {
      dispatch(fetchPokemonsWithDetails());
  }, [])

  return (
    <div className="App">
      <div className="logo-content">
        <img className="logo-pokedex" src={Logo} alt="Logo Pokedex"/>
      </div>
      <SearchPokemon></SearchPokemon>
      {
        loading
        ? <div style={{ textAlign: 'center' }}><h1>Loading...</h1></div>
        : <Pokemons pokemons={pokemons}></Pokemons>
      }
    </div>
  );
}

export default App;
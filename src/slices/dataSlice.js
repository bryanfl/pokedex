import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { setLoading } from './uiSlice';
import { getPokemons, getPokemonsWithDetail } from '../api/pokeapi';

const initialState = {
    pokemons: [],
    pokemonsFiltereds: []
}

export const fetchPokemonsWithDetails = createAsyncThunk(
    'data/fetchPokemonsWithDetails',
    async (_, { dispatch }) => {
        dispatch(setLoading(true));
        const pokemons = await getPokemons();
        const pokemonsWithDetails = await Promise.all(pokemons.map(pokemon => getPokemonsWithDetail(pokemon)))
        dispatch(setPokemons(pokemonsWithDetails))
        dispatch(setLoading(false));
    }
)

const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setPokemons: (state, action) => {
            state.pokemons = action.payload;
            state.pokemonsFiltereds = action.payload;
        },
        setFavorite: (state, action) => {
            const pokemonIndex = state.pokemons.findIndex(pokemon => pokemon.id === action.payload.pokemonId)
            const pokemonIndexFitered = state.pokemonsFiltereds.findIndex(pokemon => pokemon.id === action.payload.pokemonId)

            if (pokemonIndex >= 0) {
                const isFavorite = state.pokemons[pokemonIndex].favorite;
                state.pokemons[pokemonIndex].favorite = !isFavorite;
                state.pokemonsFiltereds[pokemonIndexFitered].favorite = !isFavorite;
            }

        },
        setFilter: (state, action) => {
            const regex = new RegExp((action.payload).toLowerCase());
            const pokemonsFiltereds = state.pokemons.filter(pokemon => regex.test(pokemon.name.toLowerCase()));

            state.pokemonsFiltereds = pokemonsFiltereds 
        }
    }
})

export const { setPokemons, setFavorite, setFilter } = dataSlice.actions;

export default dataSlice.reducer;
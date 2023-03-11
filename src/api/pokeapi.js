export const getPokemons = async () => {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151').then(res => res.json());
        return response.results;
    } catch(err) {
        console.log(err);
        return []
    }
}

export const getPokemonsWithDetail = async(pokemon) => {
    try {
        const response = await fetch(pokemon.url).then(res => res.json());
        return response;
    } catch(err) {
        console.log(err);
        return []
    }
}
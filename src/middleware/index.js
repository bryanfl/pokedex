export const logger = (store) => (next) => (action) => {
    console.log(action);
    next(action);
};

export const addPokemonInitialName = (store) => (next) => (action) => {
    let newAction = action;

    if (action.type === 'data/setPokemons') {
        newAction = {
            ...action,
            payload: action.payload.map(p => ({
                ...p,
                name: 'Pokemon ' + p.name
            }))
        }

    }
    
    next(newAction);
}
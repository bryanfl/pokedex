import { IconStar } from './iconStar'
import { useDispatch } from 'react-redux'
import { setFavorite } from '../../slices/dataSlice';
import './pokemon.css'

export const Pokemon = ({ name, image, abilities, favorite, id }) => {
    const dispatch = useDispatch();

    const handleFavoritePokemon = () => {
        dispatch(setFavorite({ pokemonId: id }))
    }

    return (
        <div className="pokemon-card">
            <div className="pokemon-card-title">
                <p>{name}</p>
                <IconStar isFavorite={favorite} onClick={handleFavoritePokemon}></IconStar>
            </div>
            <div className="pokemon-card-img">
                <img src={image} alt={name}/>
            </div>
            <div className="pokemon-card-abilities">
                <p>
                    { abilities.map(a => a.ability.name).join(', ') }
                </p>
            </div>
        </div>
    )
}
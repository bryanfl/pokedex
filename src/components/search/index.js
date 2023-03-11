import { useDispatch } from 'react-redux';
import './index.css';
import { setFilter } from '../../slices/dataSlice';

export const SearchPokemon = () => {
    const dispatch = useDispatch();

    const handleFilterPokemon = (e) => {
        dispatch(setFilter(e.target.value))
    }

    return (
        <div className="search-content">
            <input type="text" onChange={(e) => handleFilterPokemon(e)} className="search-input" placeholder="Buscar pokemon"/>
            <i className="fas fa-search search-icon"></i>
        </div>
    )
}
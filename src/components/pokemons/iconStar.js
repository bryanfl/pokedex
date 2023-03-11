export const IconStar = ({ isFavorite, onClick }) => {
    const icon = isFavorite ? 'fas fa-star' : 'far fa-star';

    return (
        <i className={`${icon} pokemon-card-star`} onClick={onClick}></i>
    )
}
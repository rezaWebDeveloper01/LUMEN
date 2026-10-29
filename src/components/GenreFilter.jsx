import './GenreFilter.css';

function GenreFilter({ genres, selectedGenre, onGenreChange }) {
    return (
        <nav className="genre-filter" aria-label="Filter movies by genre">
            {genres.map((genre) => (
                <button
                    key={genre}
                    type="button"
                    className={`genre-filter__button ${
                        selectedGenre === genre ? 'is-active' : ''
                    }`}
                    aria-pressed={selectedGenre === genre}
                    onClick={() => onGenreChange(genre)}
                >
                    {genre}
                </button>
            ))}
        </nav>
    );
}

export default GenreFilter;

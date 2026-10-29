import { Play, Star, Bookmark } from 'lucide-react';
import './MovieCard.css';

function MovieCard({ movie, onMovieSelect, isSaved, onToggleSaved }) {
    return (
        <article className="movie-card" onClick={() => onMovieSelect(movie)}>
            <div className="movie-card__poster">
                <img
                    src={movie.image}
                    alt={`${movie.title} poster`}
                    loading="lazy"
                />

                <div className="movie-card__overlay">
                    <button
                        className="movie-card__play"
                        type="button"
                        aria-label={`View details for ${movie.title}`}
                        onClick={(event) => {
                            // Prevent the click from triggering the parent card.
                            event.stopPropagation();
                            onMovieSelect(movie);
                        }}
                    >
                        <Play size={22} fill="currentColor" />
                    </button>
                </div>

                <span className="movie-card__rating">
                    <Star size={14} fill="currentColor" />
                    {movie.rating}
                </span>

                <button
                    className={`movie-card__bookmark ${
                        isSaved ? 'is-saved' : ''
                    }`}
                    type="button"
                    aria-label={
                        isSaved
                            ? `Remove ${movie.title} from My List`
                            : `Add ${movie.title} to My List`
                    }
                    aria-pressed={isSaved}
                    onClick={(event) => {
                        // Keep bookmarking separate from opening movie details.
                        event.stopPropagation();
                        onToggleSaved(movie);
                    }}
                >
                    <Bookmark
                        size={18}
                        fill={isSaved ? 'currentColor' : 'none'}
                    />
                </button>
            </div>

            <div className="movie-card__info">
                <h3 className="movie-card__title">{movie.title}</h3>

                <div className="movie-card__meta">
                    <span>{movie.year}</span>
                    <span className="movie-card__meta-dot" />
                    <span>{movie.genre}</span>
                </div>
            </div>
        </article>
    );
}

export default MovieCard;

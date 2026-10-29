import { ChevronRight, Flame } from 'lucide-react';
import MovieCard from './MovieCard';
import './MovieSection.css';

function MovieSection({
    title,
    movies,
    onMovieSelect,
    savedMovies,
    onToggleSaved,
}) {
    return (
        <section className="movie-section">
            <div className="movie-section__header">
                <div className="movie-section__heading">
                    <Flame
                        className="movie-section__icon"
                        size={22}
                        aria-hidden="true"
                    />

                    <h2 className="movie-section__title">{title}</h2>
                </div>

                <button className="movie-section__view-all" type="button">
                    View All
                    <ChevronRight size={17} aria-hidden="true" />
                </button>
            </div>

            <div className="movie-section__grid">
                {/* Render a card for each movie in the current section. */}
                {movies.map((movie) => (
                    <MovieCard
                        key={movie.id}
                        movie={movie}
                        onMovieSelect={onMovieSelect}
                        // Check whether this movie is already in My List.
                        isSaved={savedMovies.some(
                            (savedMovie) => savedMovie.id === movie.id,
                        )}
                        onToggleSaved={onToggleSaved}
                    />
                ))}
            </div>
        </section>
    );
}

export default MovieSection;

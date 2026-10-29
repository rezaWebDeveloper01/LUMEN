import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Star, Calendar, Bookmark, Play } from 'lucide-react';

import movies from '../data/movies';
import './MovieDetails.css';

function MovieDetails({ savedMovies, onToggleSaved, onMovieSelect }) {
    const { id } = useParams();
    const navigate = useNavigate();

    // Find the movie that matches the ID in the URL.
    const movie = movies.find((item) => item.id === Number(id));

    // Check whether this movie is already in My List.
    const isSaved = movie
        ? savedMovies.some((savedMovie) => savedMovie.id === movie.id)
        : false;

    // Handle invalid movie IDs.
    if (!movie) {
        return (
            <section className="movie-details__not-found">
                <h1>Movie Not Found</h1>
                <p>Sorry, we couldn't find the movie you're looking for.</p>

                <button type="button" onClick={() => navigate('/')}>
                    <ArrowLeft size={18} />
                    Back to Home
                </button>
            </section>
        );
    }

    return (
        <article className="movie-details">
            <div
                className="movie-details__backdrop"
                style={{ backgroundImage: `url("${movie.image}")` }}
                aria-hidden="true"
            />

            <div className="movie-details__content">
                <button
                    className="movie-details__back"
                    type="button"
                    onClick={() => navigate(-1)}
                >
                    <ArrowLeft size={18} />
                    Back
                </button>

                <div className="movie-details__layout">
                    <img
                        className="movie-details__poster"
                        src={movie.image}
                        alt={`${movie.title} poster`}
                    />

                    <div className="movie-details__info">
                        <span className="movie-details__genre">
                            {movie.genre}
                        </span>

                        <h1>{movie.title}</h1>

                        <div className="movie-details__meta">
                            <span>
                                <Calendar size={16} />
                                {movie.year}
                            </span>

                            <span>
                                <Star size={16} />
                                {movie.rating} / 10
                            </span>
                        </div>

                        <p className="movie-details__description">
                            {movie.description}
                        </p>

                        <div className="movie-details__actions">
                            <button
                                className="movie-details__play"
                                type="button"
                                onClick={() => onMovieSelect(movie)}
                            >
                                <Play size={18} fill="currentColor" />
                                View Details
                            </button>

                            <button
                                className={`movie-details__save ${
                                    isSaved ? 'is-saved' : ''
                                }`}
                                type="button"
                                onClick={() => onToggleSaved(movie)}
                                aria-pressed={isSaved}
                            >
                                <Bookmark
                                    size={18}
                                    fill={isSaved ? 'currentColor' : 'none'}
                                />
                                {isSaved ? 'In My List' : 'Add to My List'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default MovieDetails;

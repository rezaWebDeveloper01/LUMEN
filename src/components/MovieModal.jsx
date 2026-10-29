import { useEffect } from 'react';
import { Play, X, Star, Calendar, Clapperboard } from 'lucide-react';
import './MovieModal.css';

function MovieModal({ movie, onClose }) {
    useEffect(() => {
        if (!movie) return;

        function handleKeyDown(event) {
            if (event.key === 'Escape') {
                onClose();
            }
        }

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [movie, onClose]);

    if (!movie) return null;

    return (
        <div
            className="movie-modal"
            onMouseDown={(event) => {
                if (event.target === event.currentTarget) {
                    onClose();
                }
            }}
        >
            <section
                className="movie-modal__content"
                role="dialog"
                aria-modal="true"
                aria-labelledby="movie-modal-title"
            >
                <button
                    className="movie-modal__close"
                    type="button"
                    onClick={onClose}
                    aria-label="Close movie details"
                >
                    <X size={21} />
                </button>

                <div className="movie-modal__poster">
                    <img src={movie.image} alt={`${movie.title} poster`} />
                </div>

                <div className="movie-modal__info">
                    <span className="movie-modal__eyebrow">
                        LUMEN MOVIE DETAILS
                    </span>

                    <h2 id="movie-modal-title">{movie.title}</h2>

                    <div className="movie-modal__meta">
                        <span>
                            <Star size={16} fill="currentColor" />
                            {movie.rating}
                        </span>

                        <span>
                            <Calendar size={16} />
                            {movie.year}
                        </span>

                        <span>
                            <Clapperboard size={16} />
                            {movie.genre}
                        </span>
                    </div>

                    <p className="movie-modal__description">
                        {movie.description}
                    </p>

                    <button
                        className="movie-modal__watch"
                        type="button"
                        onClick={() => {
                            alert(
                                'Video playback will be added in a future update.',
                            );
                        }}
                    >
                        <Play size={18} fill="currentColor" />
                        Watch Now
                    </button>
                </div>
            </section>
        </div>
    );
}

export default MovieModal;

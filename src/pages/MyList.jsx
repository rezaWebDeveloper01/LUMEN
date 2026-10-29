import MovieSection from '../components/MovieSection';

function MyList({ savedMovies, onMovieSelect, onToggleSaved }) {
    return (
        <section className="my-list-page">
            {savedMovies.length > 0 ? (
                <MovieSection
                    title="My List"
                    movies={savedMovies}
                    onMovieSelect={onMovieSelect}
                    savedMovies={savedMovies}
                    onToggleSaved={onToggleSaved}
                />
            ) : (
                <div className="app-empty-state" role="status">
                    <h2>Your list is empty</h2>
                    <p>Save your favorite movies and they will appear here.</p>
                </div>
            )}
        </section>
    );
}

export default MyList;

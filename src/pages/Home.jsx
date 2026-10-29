import Hero from '../components/Hero';
import MovieSection from '../components/MovieSection';

function Home({ filteredMovies, onMovieSelect, savedMovies, onToggleSaved }) {
    return (
        <>
            <Hero />

            {filteredMovies.length > 0 ? (
                <MovieSection
                    title="Trending Now"
                    movies={filteredMovies}
                    onMovieSelect={onMovieSelect}
                    savedMovies={savedMovies}
                    onToggleSaved={onToggleSaved}
                />
            ) : (
                <p className="app-empty-state" role="status">
                    No movies found. Try another search or genre.
                </p>
            )}
        </>
    );
}

export default Home;

import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import Sidebar from './components/Sidebar';
import Header from './components/Header';
import MovieModal from './components/MovieModal';

import Home from './pages/Home';
import MyList from './pages/MyList';
import MovieDetails from './pages/MovieDetails';

import movies from './data/movies';
import './App.css';

function AppContent() {
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedGenre, setSelectedGenre] = useState('All');
    const navigate = useNavigate();

    // Load saved movies from localStorage.
    const [savedMovies, setSavedMovies] = useState(() => {
        try {
            const storedMovies = localStorage.getItem('lumen-my-list');
            return storedMovies ? JSON.parse(storedMovies) : [];
        } catch {
            return [];
        }
    });

    // Keep saved movies synchronized with localStorage.
    useEffect(() => {
        localStorage.setItem('lumen-my-list', JSON.stringify(savedMovies));
    }, [savedMovies]);

    function handleMovieSelect(movie) {
        navigate(`/movie/${movie.id}`);
    }

    function handleModalClose() {
        setSelectedMovie(null);
    }

    function handleToggleSaved(movie) {
        setSavedMovies((previousMovies) => {
            const isSaved = previousMovies.some(
                (savedMovie) => savedMovie.id === movie.id,
            );

            if (isSaved) {
                return previousMovies.filter(
                    (savedMovie) => savedMovie.id !== movie.id,
                );
            }

            return [...previousMovies, movie];
        });
    }

    // Filter movies by search query and genre.
    const filteredMovies = movies.filter((movie) => {
        const matchesSearch = movie.title
            .toLowerCase()
            .includes(searchQuery.trim().toLowerCase());

        const matchesGenre =
            selectedGenre === 'All' || movie.genre === selectedGenre;

        return matchesSearch && matchesGenre;
    });

    return (
        <>
            <Sidebar
                selectedGenre={selectedGenre}
                onGenreChange={setSelectedGenre}
            />

            <main className="app-main">
                <Header
                    searchQuery={searchQuery}
                    onSearchChange={setSearchQuery}
                />

                <Routes>
                    <Route
                        path="/"
                        element={
                            <Home
                                filteredMovies={filteredMovies}
                                onMovieSelect={handleMovieSelect}
                                savedMovies={savedMovies}
                                onToggleSaved={handleToggleSaved}
                            />
                        }
                    />

                    <Route
                        path="/my-list"
                        element={
                            <MyList
                                savedMovies={savedMovies}
                                onMovieSelect={handleMovieSelect}
                                onToggleSaved={handleToggleSaved}
                            />
                        }
                    />

                    <Route
                        path="/movie/:id"
                        element={
                            <MovieDetails
                                savedMovies={savedMovies}
                                onToggleSaved={handleToggleSaved}
                                onMovieSelect={handleMovieSelect}
                            />
                        }
                    />
                </Routes>
            </main>

            <MovieModal movie={selectedMovie} onClose={handleModalClose} />
        </>
    );
}

function App() {
    return (
        <BrowserRouter>
            <AppContent />
        </BrowserRouter>
    );
}

export default App;

import './Sidebar.css';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

function Sidebar({ selectedGenre, onGenreChange }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Toggle button */}
            <button
                className={`sidebar-toggle ${isOpen ? 'is-open' : ''}`}
                onClick={() => setIsOpen((prev) => !prev)}
                aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
                aria-expanded={isOpen}
                aria-controls="main-sidebar"
            >
                <span></span>
                <span></span>
                <span></span>
            </button>
            {/* Overlay */}
            <div
                className={`sidebar-overlay ${isOpen ? 'sidebar-overlay--visible' : ''}`}
                onClick={() => setIsOpen(false)}
                aria-hidden="true"
            />
            {/* Sidebar */}
            <aside
                id="main-sidebar"
                className={`sidebar ${isOpen ? 'sidebar--open' : ''}`}
            >
                {' '}
                <div className="sidebar__header">
                    {' '}
                    <a href="/" className="sidebar__logo">
                        LUMEN<span>✦</span>{' '}
                    </a>{' '}
                </div>
                <nav className="sidebar__nav">
                    <NavLink
                        to="/"
                        end
                        className={({ isActive }) =>
                            `sidebar__link ${isActive ? 'sidebar__link--active' : ''}`
                        }
                    >
                        <span>⌂</span>
                        <span>Home</span>
                    </NavLink>

                    <NavLink
                        to="/my-list"
                        className={({ isActive }) =>
                            `sidebar__link ${isActive ? 'sidebar__link--active' : ''}`
                        }
                    >
                        <span>♡</span>
                        <span>My List</span>
                    </NavLink>

                    <a href="/settings" className="sidebar__link">
                        <span>⚙</span>
                        <span>Settings</span>
                    </a>
                </nav>
                <div className="sidebar__genres">
                    <p className="sidebar__section-title">GENRES</p>

                    {[
                        'All',
                        'Action',
                        'Drama',
                        'Sci-Fi',
                        'Horror',
                        'Romance',
                    ].map((genre) => (
                        <button
                            key={genre}
                            type="button"
                            className={`sidebar__genre ${
                                selectedGenre === genre
                                    ? 'sidebar__genre--active'
                                    : ''
                            }`}
                            onClick={() => onGenreChange(genre)}
                            aria-pressed={selectedGenre === genre}
                        >
                            {genre === 'All' ? 'All Movies' : genre}
                        </button>
                    ))}
                </div>
                <div className="sidebar__subscription">
                    <span>✦ Premium Plan</span>
                    <p>12 days left</p>

                    <div className="sidebar__progress">
                        <span></span>
                    </div>
                </div>
            </aside>
        </>
    );
}

export default Sidebar;

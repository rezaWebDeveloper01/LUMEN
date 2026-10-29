import { Search, Bell, UserRound } from 'lucide-react';
import './Header.css';

function Header({ searchQuery, onSearchChange }) {
    return (
        <header className="header">
            {' '}
            <div className="header__search">
                {' '}
                <Search size={19} aria-hidden="true" />
                <input
                    type="search"
                    placeholder="Search movies, series..."
                    aria-label="Search movies and series"
                    value={searchQuery}
                    onChange={(event) => onSearchChange(event.target.value)}
                />
            </div>
            <div className="header__actions">
                <button
                    className="header__notification"
                    type="button"
                    aria-label="Notifications"
                >
                    <Bell size={21} />
                    <span className="header__notification-dot"></span>
                </button>

                <button
                    className="header__profile"
                    type="button"
                    aria-label="Open profile"
                >
                    <UserRound size={21} />
                </button>
            </div>
        </header>
    );
}

export default Header;

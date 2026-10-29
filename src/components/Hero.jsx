import { Play, Info, Star } from 'lucide-react';
import './Hero.css';

function Hero() {
    return (
        <section className="hero">
            {' '}
            <div className="hero__backdrop" aria-hidden="true">
                {' '}
                <img src="/images/hero-poster.webp" alt="" />{' '}
            </div>
            <div className="hero__content">
                <span className="hero__eyebrow">
                    <span className="hero__eyebrow-line"></span>
                    LUMEN ORIGINAL
                </span>

                <h1 className="hero__title">
                    Beyond
                    <br />
                    The Unknown
                </h1>

                <div className="hero__meta">
                    <span className="hero__rating">
                        <Star size={16} fill="currentColor" />
                        8.9
                    </span>

                    <span>2026</span>
                    <span className="hero__meta-divider"></span>
                    <span>Sci-Fi</span>
                    <span className="hero__quality">4K UHD</span>
                </div>

                <p className="hero__description">
                    At the edge of the universe, one discovery will change
                    everything humanity knows about its existence.
                </p>

                <div className="hero__actions">
                    <button className="hero__button hero__button--primary">
                        <Play size={18} fill="currentColor" />
                        Watch Now
                    </button>

                    <button className="hero__button hero__button--secondary">
                        <Info size={18} />
                        More Info
                    </button>
                </div>
            </div>
            <div className="hero__pagination" aria-hidden="true">
                <span className="hero__pagination-item hero__pagination-item--active"></span>
                <span className="hero__pagination-item"></span>
                <span className="hero__pagination-item"></span>
            </div>
        </section>
    );
}

export default Hero;

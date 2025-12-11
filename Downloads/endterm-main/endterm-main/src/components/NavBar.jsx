// src/components/NavBar.jsx (UPDATED with translations and language switcher)
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

const NavBar = () => {
    const location = useLocation();
    const { user, logout } = useAuth();
    const { t } = useLanguage();

    const navStyle = {
        backgroundColor: 'var(--color-nav-bg)',
        padding: '15px 40px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '2px solid #333333',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
        position: 'sticky',
        top: 0,
        zIndex: 100,
    };

    const logoStyle = {
        fontSize: '1.8rem',
        fontWeight: 'bold',
        color: 'var(--color-portal-green)', 
        textDecoration: 'none',
        letterSpacing: '2px',
        textShadow: '0 0 5px rgba(104, 237, 41, 0.7)',
    };

    const linkContainerStyle = {
        display: 'flex',
        gap: '25px',
        alignItems: 'center',
    };

    const linkStyle = (path) => ({
        color: location.pathname === path ? 'var(--color-portal-green)' : 'var(--color-text-light)',
        fontWeight: location.pathname === path ? '700' : '400',
        textTransform: 'uppercase',
        transition: 'color 0.3s ease',
        borderBottom: location.pathname === path ? '2px solid var(--color-portal-green)' : 'none',
        paddingBottom: '3px',
    });

    const logoutButtonStyle = {
        backgroundColor: '#a30000',
        color: 'white',
        border: 'none',
        padding: '8px 15px',
        borderRadius: '6px',
        cursor: 'pointer',
        textTransform: 'uppercase',
        fontSize: '0.85rem',
        fontWeight: '700',
        transition: 'all 0.3s ease',
    };

    return (
        <nav style={navStyle}>
            <Link to="/" style={logoStyle}>
                R&M Explorer
            </Link>
            <div style={linkContainerStyle}>
                <Link to="/" style={linkStyle('/')}>
                    {t('nav.home')}
                </Link>
                <Link to="/items" style={linkStyle('/items')}>
                    {t('nav.characters')}
                </Link>
                <Link to="/favorites" style={linkStyle('/favorites')}>
                    {t('nav.favorites')} ❤️
                </Link>
                <Link to="/about" style={linkStyle('/about')}>
                    {t('nav.about')}
                </Link>
                
                {user ? (
                    <>
                        <Link to="/profile" style={linkStyle('/profile')}>
                            {t('nav.profile')}
                        </Link>
                        <button 
                            onClick={logout} 
                            style={logoutButtonStyle}
                            onMouseEnter={(e) => e.target.style.backgroundColor = '#d10000'}
                            onMouseLeave={(e) => e.target.style.backgroundColor = '#a30000'}
                        >
                            {t('nav.logout')}
                        </button>
                    </>
                ) : (
                    <>
                        <Link to="/login" style={linkStyle('/login')}>
                            {t('nav.login')}
                        </Link>
                        <Link to="/signup" style={linkStyle('/signup')}>
                            {t('nav.signup')}
                        </Link>
                    </>
                )}
                
                {/* Language Switcher */}
                <LanguageSwitcher />
            </div>
        </nav>
    );
};

export default NavBar;
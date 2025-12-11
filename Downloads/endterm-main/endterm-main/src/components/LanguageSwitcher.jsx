// src/components/LanguageSwitcher.jsx
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const LanguageSwitcher = () => {
  const { language, changeLanguage } = useLanguage();

  const buttonStyle = (lang) => ({
    padding: '6px 12px',
    margin: '0 3px',
    backgroundColor: language === lang ? 'var(--color-portal-green)' : 'transparent',
    color: language === lang ? '#1d1d1d' : 'var(--color-text-light)',
    border: `2px solid ${language === lang ? 'var(--color-portal-green)' : '#444'}`,
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: language === lang ? 'bold' : 'normal',
    fontSize: '0.85rem',
    textTransform: 'uppercase',
    transition: 'all 0.3s ease',
  });

  return (
    <div style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
      <button onClick={() => changeLanguage('en')} style={buttonStyle('en')}>
        EN
      </button>
      <button onClick={() => changeLanguage('ru')} style={buttonStyle('ru')}>
        RU
      </button>
      <button onClick={() => changeLanguage('kz')} style={buttonStyle('kz')}>
        KZ
      </button>
    </div>
  );
};

export default LanguageSwitcher;
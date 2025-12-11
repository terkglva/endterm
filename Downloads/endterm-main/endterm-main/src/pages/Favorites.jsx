// src/pages/Favorites.jsx
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAuth } from "../context/AuthContext";
import { loadFavorites, clearMergeMessage } from "../features/favoritesSlice";
import CharacterCard from "../components/CharacterCard";
import Spinner from "../components/Spinner";
import { getById } from "../services/itemsService";

export default function Favorites() {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const { items: favorites, loading, mergeMessage } = useSelector((state) => state.favorites);

  const [characters, setCharacters] = useState([]);
  const [loadingCharacters, setLoadingCharacters] = useState(false);

  // Load favorites on mount
  useEffect(() => {
    dispatch(loadFavorites(user?.uid));
  }, [dispatch, user]);

  // Clear merge message after 5 seconds
  useEffect(() => {
    if (mergeMessage) {
      const timer = setTimeout(() => {
        dispatch(clearMergeMessage());
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [mergeMessage, dispatch]);

  // Load character details
  useEffect(() => {
    const loadFavoriteCharacters = async () => {
      if (favorites.length === 0) {
        setCharacters([]);
        return;
      }

      setLoadingCharacters(true);
      try {
        const promises = favorites.map((id) => getById(id));
        const results = await Promise.all(promises);
        setCharacters(results);
      } catch (error) {
        console.error("Error loading favorite characters:", error);
      } finally {
        setLoadingCharacters(false);
      }
    };

    if (!loading) {
      loadFavoriteCharacters();
    }
  }, [favorites, loading]);

  if (loading || loadingCharacters) {
    return <Spinner />;
  }

  return (
    <div className="character-list-page">
      <div className="list-header">
        <h2>Your Favorite Characters</h2>

        {mergeMessage && (
          <div
            style={{
              backgroundColor: "rgba(104, 237, 41, 0.15)",
              border: "1px solid var(--color-portal-green)",
              padding: "15px",
              borderRadius: "8px",
              marginTop: "15px",
              color: "var(--color-portal-green)",
            }}
          >
            ✓ {mergeMessage}
          </div>
        )}

        {favorites.length === 0 ? (
          <p style={{ color: "var(--color-text-dim)", marginTop: "30px", fontSize: "1.1rem" }}>
            No favorites yet. Start exploring and add some characters to your favorites!
          </p>
        ) : (
          <p style={{ color: "var(--color-text-dim)", marginTop: "15px" }}>
            {favorites.length} favorite{favorites.length !== 1 ? "s" : ""} saved
          </p>
        )}
      </div>

      <div className="character-grid">
        {characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
}
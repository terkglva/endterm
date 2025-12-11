// src/features/favoritesSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../firebase";

// ---- Thunks ----

// Load favorites from Firestore
export const loadFavorites = createAsyncThunk(
  "favorites/loadFavorites",
  async (userId, { rejectWithValue }) => {
    try {
      if (!userId) {
        // Load from localStorage for guests
        const local = JSON.parse(localStorage.getItem("favorites") || "[]");
        return { items: local, source: "local" };
      }

      // Load from Firestore for authenticated users
      const docRef = doc(db, "favorites", userId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const serverItems = docSnap.data().items || [];

        // Check for local favorites to merge
        const localItems = JSON.parse(localStorage.getItem("favorites") || "[]");

        if (localItems.length > 0) {
          // Merge and remove duplicates
          const merged = [...new Set([...serverItems, ...localItems])];

          // Save merged to Firestore
          await setDoc(docRef, { items: merged });

          // Clear localStorage
          localStorage.removeItem("favorites");

          return { items: merged, source: "merged" };
        }

        return { items: serverItems, source: "server" };
      } else {
        // No server data, check local
        const localItems = JSON.parse(localStorage.getItem("favorites") || "[]");
        if (localItems.length > 0) {
          await setDoc(docRef, { items: localItems });
          localStorage.removeItem("favorites");
          return { items: localItems, source: "local" };
        }
        return { items: [], source: "server" };
      }
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

// Add favorite
export const addFavorite = createAsyncThunk(
  "favorites/addFavorite",
  async ({ userId, itemId }, { getState, rejectWithValue }) => {
    try {
      const state = getState();
      const newFavorites = [...state.favorites.items, itemId];

      if (userId) {
        // Save to Firestore
        const docRef = doc(db, "favorites", userId);
        await setDoc(docRef, { items: newFavorites });
      } else {
        // Save to localStorage
        localStorage.setItem("favorites", JSON.stringify(newFavorites));
      }

      return itemId;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

// Remove favorite
export const removeFavorite = createAsyncThunk(
  "favorites/removeFavorite",
  async ({ userId, itemId }, { getState, rejectWithValue }) => {
    try {
      const state = getState();
      const newFavorites = state.favorites.items.filter((id) => id !== itemId);

      if (userId) {
        // Save to Firestore
        const docRef = doc(db, "favorites", userId);
        await setDoc(docRef, { items: newFavorites });
      } else {
        // Save to localStorage
        localStorage.setItem("favorites", JSON.stringify(newFavorites));
      }

      return itemId;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

// ---- REDUCER
const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    items: [], // Array of favorite item IDs
    loading: false,
    error: null,
    mergeMessage: null,
  },

  reducers: {
    clearMergeMessage(state) {
      state.mergeMessage = null;
    },
  },

  extraReducers: (builder) => {
    builder
      // Load Favorites
      .addCase(loadFavorites.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadFavorites.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload.items;

        if (action.payload.source === "merged") {
          state.mergeMessage = "Your local favorites were merged with your account.";
        }
      })
      .addCase(loadFavorites.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Add Favorite
      .addCase(addFavorite.pending, (state) => {
        state.error = null;
      })
      .addCase(addFavorite.fulfilled, (state, action) => {
        if (!state.items.includes(action.payload)) {
          state.items.push(action.payload);
        }
      })
      .addCase(addFavorite.rejected, (state, action) => {
        state.error = action.payload;
      })

      // Remove Favorite
      .addCase(removeFavorite.pending, (state) => {
        state.error = null;
      })
      .addCase(removeFavorite.fulfilled, (state, action) => {
        state.items = state.items.filter((id) => id !== action.payload);
      })
      .addCase(removeFavorite.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const { clearMergeMessage } = favoritesSlice.actions;

export default favoritesSlice.reducer;
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useRecipeStore = create(
  persist(
    (set, get) => ({
      recipes: [],
      searchTerm: "",
      favorites: {}, // { [idMeal]: recipe }
      loading: false,
      error: null,

      setSearchTerm: (term) => set({ searchTerm: term }),

      fetchRecipes: async (term = get().searchTerm) => {
        set({ loading: true, error: null });
        try {
          const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(
            term || ""
          )}`;
          const res = await fetch(url);
          const data = await res.json();
          set({ recipes: data.meals || [], loading: false });
        } catch (e) {
          set({ error: "Failed to fetch recipes", loading: false });
        }
      },

      toggleFavorite: (recipe) =>
        set((state) => {
          const id = recipe.idMeal;
          const next = { ...state.favorites };
          if (next[id]) delete next[id];
          else next[id] = recipe;
          return { favorites: next };
        }),

      isFavorite: (id) => !!get().favorites[id],
    }),
    {
      name: "recipe-store",
      partialize: (state) => ({
        favorites: state.favorites,
        searchTerm: state.searchTerm,
      }),
    }
  )
);

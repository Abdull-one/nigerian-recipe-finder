import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import RecipeList from "./pages/RecipeList";
import RecipeDetails from "./pages/RecipeDetails";
import Favorites from "./pages/Favorites";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AddRecipe from "./pages/AddRecipe";

import { searchRecipes } from "./services/api";

// fallback sample recipes (used if API slow or blocked)
const sampleRecipes = [
  {
    idMeal: "111111",
    strMeal: "Jollof Rice (Sample)",
    strCategory: "Main",
    strArea: "Nigeria",
    strInstructions: "Cook rice with tomato stew, onions, peppers and spices.",
    strMealThumb: "https://images.unsplash.com/photo-1604908177522-1f4f7a9d5a2b?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=1c98a9a6b4a2f3b2d8f8d2a1d5c2e7f6",
  },
  {
    idMeal: "222222",
    strMeal: "Egusi Soup (Sample)",
    strCategory: "Soup",
    strArea: "Nigeria",
    strInstructions: "Blend melon seeds, cook with leafy greens, stock and protein.",
    strMealThumb: "https://images.unsplash.com/photo-1604908177111-2e0b8a7c1d9b?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=e2f9a4d2ef9d1e3a5d6a7b8c9d0f1e2a",
  },
];

export default function App() {
  const [recipes, setRecipes] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);

  // load initial recipes (from API or sample)
  useEffect(() => {
    let mounted = true;
    async function load() {
      try {
        const r = await searchRecipes("");
        if (mounted) {
          setRecipes(r.length ? r : sampleRecipes);
        }
      } catch {
        if (mounted) setRecipes(sampleRecipes);
      } finally {
        if (mounted) setLoading(false);
      }
    }
    load();
    return () => (mounted = false);
  }, []);

  // favorites persistence
  useEffect(() => {
    try {
      const raw = localStorage.getItem("favorites");
      if (raw) setFavorites(JSON.parse(raw));
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("favorites", JSON.stringify(favorites));
    } catch {
      // ignore
    }
  }, [favorites]);

  const addFavorite = (recipe) => {
    if (!favorites.some((r) => r.idMeal === recipe.idMeal)) {
      setFavorites((prev) => [...prev, recipe]);
    }
  };

  const removeFavorite = (idMeal) => {
    setFavorites((prev) => prev.filter((r) => r.idMeal !== idMeal));
  };

  const updateRecipes = (newList) => setRecipes(newList);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/recipes"
            element={
              <RecipeList
                recipes={recipes}
                loading={loading}
                addFavorite={addFavorite}
                removeFavorite={removeFavorite}
                favorites={favorites}
                updateRecipes={updateRecipes}
              />
            }
          />
          <Route
            path="/recipe/:id"
            element={
              <RecipeDetails
                favorites={favorites}
                addFavorite={addFavorite}
                removeFavorite={removeFavorite}
              />
            }
          />
          <Route
            path="/favorites"
            element={
              <Favorites
                favorites={favorites}
                removeFavorite={removeFavorite}
                addFavorite={addFavorite}
              />
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/add" element={<AddRecipe updateRecipes={updateRecipes} recipes={recipes} />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

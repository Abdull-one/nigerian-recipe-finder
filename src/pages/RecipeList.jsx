import { useEffect } from "react";
import SearchBar from "../components/SearchBar";
import RecipeCard from "../components/RecipeCard";
import { useRecipeStore } from "../store/recipeStore";

export default function RecipeList() {
  const { recipes, loading, searchTerm, fetchRecipes } = useRecipeStore();

  // initial load + live search with a tiny debounce
  useEffect(() => {
    const t = setTimeout(() => fetchRecipes(), 400);
    return () => clearTimeout(t);
  }, [searchTerm, fetchRecipes]);

  return (
    <div className="p-6">
      <SearchBar />

      {loading && <p className="text-center">Loading...</p>}

      {!loading && recipes.length === 0 && (
        <p className="text-center text-gray-500">No results found</p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.idMeal} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}

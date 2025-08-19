import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import RecipeCard from "../components/RecipeCard";

export default function RecipeList() {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchRecipes = async (searchTerm = "") => {
    setLoading(true);
    try {
      const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`;
      const res = await fetch(url);
      const data = await res.json();
      setRecipes(data.meals || []); // empty array if no result
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
    setLoading(false);
  };

  // fetch recipes on mount (default load)
  useEffect(() => {
    fetchRecipes();
  }, []);

  // fetch recipes when query changes
  useEffect(() => {
    if (query !== "") {
      fetchRecipes(query);
    }
  }, [query]);

  return (
    <div className="p-6">
      <SearchBar onSearch={setQuery} />

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

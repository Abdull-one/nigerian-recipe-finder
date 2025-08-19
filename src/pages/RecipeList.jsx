import { useState, useEffect } from "react";
import { searchRecipes } from "../services/api";
import RecipeCard from "../components/RecipeCard";

export default function RecipeList() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchData() {
      const results = await searchRecipes("rice"); // default query
      if (results.length === 0) {
        setError("No recipes found. Try another search!");
      }
      setRecipes(results);
      setLoading(false);
    }
    fetchData();
  }, []);

  if (loading) return <p className="text-center mt-10">Loading recipes...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.idMeal} recipe={recipe} />
      ))}
    </div>
  );
}

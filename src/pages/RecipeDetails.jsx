import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchRecipeById } from "../services/api";

export default function RecipeDetails({ favorites = [], addFavorite, removeFavorite }) {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    async function load() {
      setLoading(true);
      const r = await fetchRecipeById(id);
      if (mounted) {
        setRecipe(r);
        setLoading(false);
      }
    }
    load();
    return () => (mounted = false);
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!recipe) return <p>Recipe not found.</p>;

  const isFav = favorites.some((f) => f.idMeal === recipe.idMeal);

  // collect ingredients + measures
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ing = recipe[`strIngredient${i}`];
    const measure = recipe[`strMeasure${i}`];
    if (ing && ing.trim()) {
      ingredients.push(`${ing}${measure ? ` — ${measure.trim()}` : ""}`);
    }
  }

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-3">{recipe.strMeal}</h1>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} className="w-full rounded mb-4" />

      {isFav ? (
        <button onClick={() => removeFavorite(recipe.idMeal)} className="bg-red-500 text-white px-4 py-2 rounded mb-4">
          Remove from favorites
        </button>
      ) : (
        <button onClick={() => addFavorite(recipe)} className="bg-green-600 text-white px-4 py-2 rounded mb-4">
          Add to favorites
        </button>
      )}

      <h2 className="text-xl font-semibold mt-4">Ingredients</h2>
      <ul className="list-disc ml-6 mb-4">
        {ingredients.map((it, idx) => (
          <li key={idx}>{it}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold">Instructions</h2>
      <p className="whitespace-pre-line">{recipe.strInstructions}</p>

      {recipe.strYoutube && (
        <div className="mt-4">
          <a href={recipe.strYoutube} target="_blank" rel="noreferrer" className="text-blue-600 underline">Watch on YouTube</a>
        </div>
      )}
    </div>
  );
}

import { Link } from "react-router-dom";
import { useRecipeStore } from "../store/recipeStore";

export default function RecipeCard({ recipe }) {
  const toggleFavorite = useRecipeStore((s) => s.toggleFavorite);
  const isFavorite = useRecipeStore((s) => s.isFavorite);
  const fav = isFavorite(recipe.idMeal);

  return (
    <div className="border rounded-lg overflow-hidden shadow-sm">
      <div className="relative">
        <img
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          className="w-full h-48 object-cover"
        />
        <button
          onClick={() => toggleFavorite(recipe)}
          className="absolute top-2 right-2 bg-white/80 rounded-full px-3 py-1 text-sm"
          aria-label="toggle favorite"
          title={fav ? "Remove from favorites" : "Add to favorites"}
        >
          {fav ? "♥" : "♡"}
        </button>
      </div>
      <div className="p-4">
        <h3 className="font-semibold mb-1">{recipe.strMeal}</h3>
        <p className="text-sm text-gray-600">
          {recipe.strCategory} • {recipe.strArea}
        </p>
        <Link
          to={`/recipes/${recipe.idMeal}`}
          className="inline-block mt-3 text-blue-600 hover:underline"
        >
          View details →
        </Link>
      </div>
    </div>
  );
}

import { Link } from "react-router-dom";

export default function RecipeCard({ recipe, favorites = [], addFavorite, removeFavorite }) {
  const isFav = favorites.some((f) => f.idMeal === recipe.idMeal);

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <img
        src={recipe.strMealThumb || "https://via.placeholder.com/400x300?text=No+Image"}
        alt={recipe.strMeal}
        className="w-full h-44 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{recipe.strMeal}</h3>
        <p className="text-sm text-gray-600">{recipe.strCategory} · {recipe.strArea}</p>

        <div className="mt-3 flex items-center justify-between">
          <Link to={`/recipe/${recipe.idMeal}`} className="text-green-600 hover:underline">
            View Details
          </Link>

          {isFav ? (
            <button
              onClick={() => removeFavorite(recipe.idMeal)}
              className="px-3 py-1 bg-red-500 text-white rounded"
            >
              Remove
            </button>
          ) : (
            <button
              onClick={() => addFavorite && addFavorite(recipe)}
              className="px-3 py-1 bg-green-600 text-white rounded"
            >
              Add
            </button>
          )}
        </div>
      </div>
    </div>
  );
}


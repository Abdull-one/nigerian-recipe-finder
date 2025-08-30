export default function RecipeCard({ recipe, favorites = [], addFavorite, removeFavorite }) {
  const isFavorite = favorites.some((f) => f.idMeal === recipe.idMeal);

  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col">
      <img
        src={recipe.strMealThumb || "https://via.placeholder.com/600x400?text=No+Image"}
        alt={recipe.strMeal}
        className="w-full h-44 object-cover rounded-md mb-4"
      />

      <h3 className="font-bold text-lg mb-2">{recipe.strMeal}</h3>
      <p className="text-gray-600 text-sm mb-4">{recipe.strCategory} • {recipe.strArea}</p>

      {isFavorite ? (
        <button onClick={() => removeFavorite && removeFavorite(recipe.idMeal)} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
          Remove Favorite
        </button>
      ) : (
        <button onClick={() => addFavorite && addFavorite(recipe)} className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">
          Add Favorite
        </button>
      )}
    </div>
  );
}

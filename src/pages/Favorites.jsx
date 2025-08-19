import RecipeCard from "../components/RecipeCard";
import { useRecipeStore } from "../store/recipeStore";

export default function Favorites() {
  const favorites = useRecipeStore((s) => s.favorites);
  const favList = Object.values(favorites);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Your Favorites</h1>

      {favList.length === 0 ? (
        <p className="text-gray-600">No favorites yet. Add some from Recipes.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {favList.map((recipe) => (
            <RecipeCard key={recipe.idMeal} recipe={recipe} />
          ))}
        </div>
      )}
    </div>
  );
}

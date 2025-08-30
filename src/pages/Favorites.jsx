import RecipeCard from "../components/RecipeCard";

export default function Favorites({ favorites, removeFavorite }) {
  if (favorites.length === 0) {
    return <p className="text-center mt-10 text-gray-500">No favorite recipes yet.</p>;
  }

  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {favorites.map((recipe) => (
        <RecipeCard
          key={recipe.idMeal}
          recipe={recipe}
          favorites={favorites}
          removeFavorite={removeFavorite}
        />
      ))}
    </div>
  );
}

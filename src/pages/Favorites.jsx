import RecipeCard from "../components/RecipeCard";

export default function Favorites({ favorites = [], removeFavorite, addFavorite }) {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">My Favorites</h1>
      {favorites.length === 0 ? (
        <p>No favorites yet. Add some from the Recipes page.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {favorites.map((r) => (
            <RecipeCard key={r.idMeal} recipe={r} favorites={favorites} removeFavorite={removeFavorite} addFavorite={addFavorite} />
          ))}
        </div>
      )}
    </div>
  );
}

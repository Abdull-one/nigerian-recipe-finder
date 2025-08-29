import RecipeCard from "../components/RecipeCard";
import SearchBar from "../components/SearchBar";

export default function RecipeList({ recipes = [], loading, favorites = [], addFavorite, removeFavorite, updateRecipes }) {
  return (
    <div>
      <div className="mb-4">
        <SearchBar updateRecipes={updateRecipes} />
      </div>

      {loading ? (
        <p className="text-center">Loading recipes...</p>
      ) : recipes.length === 0 ? (
        <p className="text-center">No recipes found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {recipes.map((r) => (
            <RecipeCard
              key={r.idMeal}
              recipe={r}
              favorites={favorites}
              addFavorite={addFavorite}
              removeFavorite={removeFavorite}
            />
          ))}
        </div>
      )}
    </div>
  );
}

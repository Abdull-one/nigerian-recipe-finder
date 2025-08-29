import RecipeCard from "../components/RecipeCard";

export default function RecipeList({ recipes }) {
  if (!recipes || recipes.length === 0) {
    return <p className="text-center text-gray-600">No recipes found</p>;
  }

  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.idMeal} recipe={recipe} />
      ))}
    </div>
  );
}

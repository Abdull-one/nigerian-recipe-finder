// src/components/RecipeCard.jsx

export default function RecipeCard({ recipe }) {
  return (
    <div className="bg-white rounded-2xl shadow hover:shadow-lg transition p-4 flex flex-col">
      <img
        src={recipe.strMealThumb || "https://via.placeholder.com/300"}
        alt={recipe.strMeal}
        className="rounded-xl mb-4 w-full h-48 object-cover"
      />
      <h3 className="text-lg font-semibold mb-2">{recipe.strMeal}</h3>
      <p className="text-sm text-gray-600">
        {recipe.strArea} • {recipe.strCategory}
      </p>
    </div>
  );
}

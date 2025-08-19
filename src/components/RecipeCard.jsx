import { Link } from "react-router-dom";

export default function RecipeCard({ recipe }) {
  return (
    <Link to={`/recipes/${recipe.idMeal}`} className="block">
      <div className="bg-white shadow-md rounded-2xl p-4 hover:shadow-xl transition">
        <img
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          className="w-full h-40 object-cover rounded-xl"
        />
        <h2 className="text-lg font-bold mt-2">{recipe.strMeal}</h2>
        <p className="text-sm text-gray-500">
          {recipe.strCategory} • {recipe.strArea}
        </p>
      </div>
    </Link>
  );
}

import { useEffect, useState } from "react";

export default function RecipeList() {
  const [recipes, setRecipes] = useState([]);
  const [expandedRecipe, setExpandedRecipe] = useState(null);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
      .then((res) => res.json())
      .then((data) => setRecipes(data.meals || []));
  }, []);

  const toggleExpand = (id) => {
    setExpandedRecipe(expandedRecipe === id ? null : id);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Delicious Recipes</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((meal) => {
          // Collect ingredients from API
          const ingredients = [];
          for (let i = 1; i <= 20; i++) {
            const ingredient = meal[`strIngredient${i}`];
            const measure = meal[`strMeasure${i}`];
            if (ingredient) {
              ingredients.push(`${ingredient} - ${measure}`);
            }
          }

          const isExpanded = expandedRecipe === meal.idMeal;

          return (
            <div key={meal.idMeal} className="bg-white rounded-2xl shadow p-4">
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="w-full h-40 object-cover rounded-lg"
              />
              <h3 className="text-lg font-semibold mt-2">{meal.strMeal}</h3>
              <p className="text-gray-600">
                {meal.strCategory} • {meal.strArea}
              </p>

              {/* Ingredients Preview */}
              <ul className="list-disc ml-4 mt-2 text-sm text-gray-700">
                {ingredients.slice(0, 3).map((ing, i) => (
                  <li key={i}>{ing}</li>
                ))}
              </ul>

              {/* See More Section */}
              {isExpanded && (
                <div className="mt-3 text-sm text-gray-700">
                  <h4 className="font-semibold mb-1">All Ingredients:</h4>
                  <ul className="list-disc ml-4">
                    {ingredients.map((ing, i) => (
                      <li key={i}>{ing}</li>
                    ))}
                  </ul>

                  <h4 className="font-semibold mt-2">Instructions:</h4>
                  <p className="mt-1">{meal.strInstructions}</p>

                  {meal.strYoutube && (
                    <div className="mt-2">
                      <a
                        href={meal.strYoutube}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline"
                      >
                        🎥 Watch Tutorial
                      </a>
                    </div>
                  )}
                </div>
              )}

              {/* Button */}
              <button
                onClick={() => toggleExpand(meal.idMeal)}
                className="mt-3 px-3 py-1 text-sm bg-green-600 text-white rounded-lg"
              >
                {isExpanded ? "See Less" : "See More"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

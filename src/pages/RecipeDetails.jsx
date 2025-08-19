// src/pages/RecipeDetails.jsx
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function RecipeDetails() {
  const { id } = useParams(); // get recipe ID from URL
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRecipe() {
      try {
        const res = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        const data = await res.json();
        setRecipe(data.meals[0]);
      } catch (error) {
        console.error("Error fetching recipe details:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchRecipe();
  }, [id]);

  if (loading) return <p className="text-center p-4">Loading recipe...</p>;
  if (!recipe) return <p className="text-center p-4">Recipe not found.</p>;

  // Extract ingredients + measures
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = recipe[`strIngredient${i}`];
    const measure = recipe[`strMeasure${i}`];
    if (ingredient) {
      ingredients.push(`${ingredient} - ${measure}`);
    }
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">{recipe.strMeal}</h1>
      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        className="rounded-lg shadow mb-6"
      />

      <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
      <ul className="list-disc list-inside mb-4">
        {ingredients.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mb-2">Instructions</h2>
      <p className="whitespace-pre-line mb-6">{recipe.strInstructions}</p>

      {recipe.strYoutube && (
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Video</h2>
          <iframe
            width="100%"
            height="315"
            src={recipe.strYoutube.replace("watch?v=", "embed/")}
            title="Recipe video"
            allowFullScreen
          ></iframe>
        </div>
      )}

      {recipe.strSource && (
        <p>
          Source:{" "}
          <a
            href={recipe.strSource}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            {recipe.strSource}
          </a>
        </p>
      )}
    </div>
  );
}

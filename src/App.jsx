import React, { useState, useEffect } from "react";
import { searchRecipes } from "./services/api";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedId, setExpandedId] = useState(null);

  useEffect(() => {
    handleSearch("chicken"); // default load
  }, []);

  const handleSearch = async (query) => {
    const results = await searchRecipes(query);
    setRecipes(results);
  };

  const addToFavorites = (recipe) => {
    if (!favorites.find((fav) => fav.idMeal === recipe.idMeal)) {
      setFavorites([...favorites, recipe]);
    }
  };

  const toggleDetails = (idMeal) => {
    setExpandedId(expandedId === idMeal ? null : idMeal);
  };

  return (
    <div className="p-6">
      {/* Menu */}
      <nav className="flex gap-4 mb-6 justify-center text-blue-600 font-semibold">
        <a href="#">Home</a>
        <a href="#">Recipes</a>
        <a href="#">Favorites</a>
        <a href="#">Add Recipe</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>

      <h1 className="text-3xl font-bold mb-4 text-center">
        Nigerian Recipe Finder
      </h1>

      {/* Search Bar */}
      <div className="flex gap-2 mb-6 justify-center">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search recipes..."
          className="border rounded px-3 py-2 w-64"
        />
        <button
          onClick={() => handleSearch(searchTerm)}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Search
        </button>
      </div>

      {/* Recipes */}
      <h2 className="text-2xl font-semibold mb-4">Delicious Recipes</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {recipes.map((recipe) => (
          <div
            key={recipe.idMeal}
            className="border rounded-lg shadow p-4 hover:shadow-lg transition"
          >
            <img
              src={recipe.strMealThumb}
              alt={recipe.strMeal}
              className="rounded mb-3"
            />
            <h2 className="text-xl font-semibold mb-2">{recipe.strMeal}</h2>
            <p className="text-gray-600">
              {recipe.strCategory} • {recipe.strArea}
            </p>
            <button
              onClick={() => addToFavorites(recipe)}
              className="mt-2 bg-green-500 text-white px-3 py-1 rounded"
            >
              Add to Favorites
            </button>
            <button
              onClick={() => toggleDetails(recipe.idMeal)}
              className="ml-2 mt-2 bg-gray-500 text-white px-3 py-1 rounded"
            >
              {expandedId === recipe.idMeal ? "Hide Details" : "See More"}
            </button>

            {/* Expanded Details */}
            {expandedId === recipe.idMeal && (
              <div className="mt-3 text-sm text-gray-700">
                <h3 className="font-semibold mb-1">Ingredients:</h3>
                <ul className="list-disc pl-5">
                  {Array.from({ length: 20 }).map((_, i) => {
                    const ingredient = recipe[`strIngredient${i + 1}`];
                    const measure = recipe[`strMeasure${i + 1}`];
                    return ingredient ? (
                      <li key={i}>
                        {ingredient} - {measure}
                      </li>
                    ) : null;
                  })}
                </ul>
                <h3 className="font-semibold mt-3 mb-1">Instructions:</h3>
                <p>{recipe.strInstructions}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Favorites */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Favorites</h2>
      {favorites.length === 0 ? (
        <p className="text-gray-500">No favorites yet</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {favorites.map((fav) => (
            <div
              key={fav.idMeal}
              className="border rounded-lg shadow p-4 bg-yellow-50"
            >
              <img
                src={fav.strMealThumb}
                alt={fav.strMeal}
                className="rounded mb-3"
              />
              <h2 className="text-xl font-semibold mb-2">{fav.strMeal}</h2>
              <p className="text-gray-600">
                {fav.strCategory} • {fav.strArea}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;

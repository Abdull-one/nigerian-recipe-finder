const API_URL = "https://www.themealdb.com/api/json/v1/1";

// fetch list of recipes
export const fetchRecipes = async (query) => {
  const res = await fetch(`${API_URL}/search.php?s=${query}`);
  const data = await res.json();
  return data.meals || [];
};

// fetch single recipe by id
export const fetchRecipeById = async (id) => {
  const res = await fetch(`${API_URL}/lookup.php?i=${id}`);
  const data = await res.json();
  return data.meals ? data.meals[0] : null;
};

// search meals (alias to fetchRecipes)
export const searchMeals = async (query) => {
  return fetchRecipes(query);
};

// ✅ alias for compatibility (so App.jsx doesn’t break)
export const searchRecipes = async (query) => {
  return fetchRecipes(query);
};

// mock service list (since MealDB doesn’t provide "services")
export const getServices = async () => {
  return [
    {
      id: 1,
      name: "Recipe Search",
      description: "Find Nigerian and international meals using keywords.",
    },
    {
      id: 2,
      name: "Meal Details",
      description: "View detailed instructions, ingredients, and images.",
    },
    {
      id: 3,
      name: "Favorites",
      description: "Save your favorite recipes for quick access.",
    },
  ];
};

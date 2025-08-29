const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

export async function searchRecipes(query = "") {
  try {
    const res = await fetch(`${BASE_URL}/search.php?s=${encodeURIComponent(query)}`);
    const data = await res.json();
    return data.meals || [];
  } catch (err) {
    console.error("searchRecipes error:", err);
    return [];
  }
}

export async function fetchRecipeById(id) {
  try {
    const res = await fetch(`${BASE_URL}/lookup.php?i=${encodeURIComponent(id)}`);
    const data = await res.json();
    return data.meals ? data.meals[0] : null;
  } catch (err) {
    console.error("fetchRecipeById error:", err);
    return null;
  }
}

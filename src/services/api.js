const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

export async function searchRecipes(query) {
  try {
    const res = await fetch(`${BASE_URL}/search.php?s=${query}`);
    const data = await res.json();
    return data.meals || [];
  } catch (err) {
    console.error(err);
    return [];
  }
}

export async function getRecipeById(id) {
  try {
    const res = await fetch(`${BASE_URL}/lookup.php?i=${id}`);
    const data = await res.json();
    return data.meals?.[0] || null;
  } catch (err) {
    console.error(err);
    return null;
  }
}


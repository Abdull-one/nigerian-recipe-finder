import { useState } from "react";

export default function AddRecipe({ recipes = [], updateRecipes }) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [area, setArea] = useState("");
  const [thumb, setThumb] = useState("");
  const [instructions, setInstructions] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    const newRecipe = {
      idMeal: String(Date.now()),
      strMeal: title,
      strCategory: category || "Unknown",
      strArea: area || "Unknown",
      strMealThumb: thumb || "https://via.placeholder.com/400x300?text=Recipe",
      strInstructions: instructions || "No instructions provided.",
    };
    updateRecipes([newRecipe, ...recipes]);
    setTitle(""); setCategory(""); setArea(""); setThumb(""); setInstructions("");
    alert("Recipe added locally. (It won't be sent to TheMealDB)");
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Add Recipe</h1>
      <form onSubmit={handleSubmit} className="space-y-3 max-w-lg">
        <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Recipe title" className="border p-2 w-full" />
        <input value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Category (e.g., Main, Soup)" className="border p-2 w-full" />
        <input value={area} onChange={(e) => setArea(e.target.value)} placeholder="Cuisine / Area (e.g., Nigeria)" className="border p-2 w-full" />
        <input value={thumb} onChange={(e) => setThumb(e.target.value)} placeholder="Image URL (optional)" className="border p-2 w-full" />
        <textarea value={instructions} onChange={(e) => setInstructions(e.target.value)} placeholder="Instructions" className="border p-2 w-full" rows="6" />
        <button className="bg-green-600 text-white px-4 py-2 rounded">Add Recipe</button>
      </form>
    </div>
  );
}

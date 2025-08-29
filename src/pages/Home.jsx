import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="text-center py-8">
      <h1 className="text-4xl font-bold mb-4">Welcome to Nigerian Recipe Finder 🇳🇬</h1>
      <p className="mb-6">Discover local classics, learn ingredients & share your own recipes.</p>

      <div className="flex justify-center gap-4">
        <Link to="/recipes" className="bg-green-600 text-white px-5 py-3 rounded">Browse Recipes</Link>
        <Link to="/add" className="bg-gray-200 px-5 py-3 rounded">Add Recipe</Link>
      </div>
    </div>
  );
}

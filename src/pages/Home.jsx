import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8 text-center">
      <section className="bg-yellow-100 py-12 rounded-lg mb-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to Nigerian Recipe Finder 🇳🇬</h1>
        <p className="text-lg text-gray-700">Discover local classics, learn ingredients & share your own recipes.</p>
      </section>

      <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
        <Link to="/recipes" className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700">Browse Recipes</Link>
        <Link to="/add" className="bg-gray-200 px-6 py-3 rounded hover:bg-gray-300">Add Recipe</Link>
      </div>
    </div>
  );
}

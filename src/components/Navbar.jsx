import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-green-700 text-white px-6 py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Nigerian Recipe Finder</h1>
        <div className="space-x-6"> {/* This adds spacing between links */}
          <Link to="/" className="hover:text-yellow-300">Home</Link>
          <Link to="/recipes" className="hover:text-yellow-300">Recipes</Link>
          <Link to="/favorites" className="hover:text-yellow-300">Favorites</Link>
          <Link to="/add-recipe" className="hover:text-yellow-300">Add Recipe</Link>
          <Link to="/about" className="hover:text-yellow-300">About</Link>
          <Link to="/contact" className="hover:text-yellow-300">Contact</Link>
        </div>
      </div>
    </nav>
  );
}

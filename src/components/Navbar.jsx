 import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-green-700 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold">
            Nigerian Recipe Finder 🇳🇬
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-yellow-300">Home</Link>
            <Link to="/recipes" className="hover:text-yellow-300">Recipes</Link>
            <Link to="/favorites" className="hover:text-yellow-300">Favorites</Link>
            <Link to="/add-recipe" className="hover:text-yellow-300">Add Recipe</Link>
            <Link to="/about" className="hover:text-yellow-300">About</Link>
            <Link to="/contact" className="hover:text-yellow-300">Contact</Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-green-600 px-4 py-2 space-y-2">
          <Link to="/" className="block hover:text-yellow-300">Home</Link>
          <Link to="/recipes" className="block hover:text-yellow-300">Recipes</Link>
          <Link to="/favorites" className="block hover:text-yellow-300">Favorites</Link>
          <Link to="/add-recipe" className="block hover:text-yellow-300">Add Recipe</Link>
          <Link to="/about" className="block hover:text-yellow-300">About</Link>
          <Link to="/contact" className="block hover:text-yellow-300">Contact</Link>
        </div>
      )}
    </nav>
  );
}

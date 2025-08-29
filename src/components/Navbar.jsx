import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-green-700 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold">
          Nigerian Recipe Finder
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link to="/">Home</Link>
          <Link to="/recipes">Recipes</Link>
          <Link to="/favorites">Favorites</Link>
          <Link to="/add-recipe">Add Recipe</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-green-600 flex flex-col items-start px-4 py-2 space-y-2">
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/recipes" onClick={() => setMenuOpen(false)}>Recipes</Link>
          <Link to="/favorites" onClick={() => setMenuOpen(false)}>Favorites</Link>
          <Link to="/add-recipe" onClick={() => setMenuOpen(false)}>Add Recipe</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}

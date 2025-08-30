import { Link } from "react-router-dom";
import { useState } from "react";
import SearchBar from "./SearchBar";

export default function Header({ onSearch }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-green-600 text-white">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold">Nigerian Recipe Finder</h1>

        {/* Desktop menu */}
        <nav className="hidden md:flex gap-8 items-center">
          <Link to="/">Home</Link>
          <Link to="/recipes">Recipes</Link>
          <Link to="/favorites">Favorites</Link>
          <Link to="/add">Add Recipe</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-2xl font-bold"
          onClick={() => setOpen((s) => !s)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile menu (only visible when open) */}
      {open && (
        <nav className="md:hidden bg-green-500 px-4 py-3 flex flex-col gap-3">
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/recipes" onClick={() => setOpen(false)}>Recipes</Link>
          <Link to="/favorites" onClick={() => setOpen(false)}>Favorites</Link>
          <Link to="/add" onClick={() => setOpen(false)}>Add Recipe</Link>
          <Link to="/about" onClick={() => setOpen(false)}>About</Link>
          <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
        </nav>
      )}

      {/* Search bar - single instance, below nav */}
      <SearchBar onSearch={onSearch} />
    </header>
  );
}

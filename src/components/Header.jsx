import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <header className="bg-green-700 text-white p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-bold">Nigerian Recipe Finder</h1>

        {/* Nav links in a row with spacing */}
        <nav className="mt-4 md:mt-0">
          <ul className="flex flex-wrap gap-6 text-lg">
            <li>
              <Link to="/" className="hover:text-yellow-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/recipes" className="hover:text-yellow-300">
                Recipes
              </Link>
            </li>
            <li>
              <Link to="/favorites" className="hover:text-yellow-300">
                Favorites
              </Link>
            </li>
            <li>
              <Link to="/add" className="hover:text-yellow-300">
                Add Recipe
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-yellow-300">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-yellow-300">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* SearchBar */}
        <div className="mt-4 md:mt-0">
          <SearchBar />
        </div>
      </div>
    </header>
  );
};

export default Header;

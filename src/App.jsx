import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import RecipeList from "./pages/RecipeList";
import RecipeDetail from "./pages/RecipeDetails";
import Favorites from "./pages/Favorites";

export default function App() {
  return (
    <Router>
      <nav style={{ padding: "1rem", background: "#f2f2f2" }}>
        <Link to="/" style={{ marginRight: "1rem" }}>Home</Link>
        <Link to="/recipes" style={{ marginRight: "1rem" }}>Recipes</Link>
        <Link to="/favorites">Favorites</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<RecipeList />} />
        <Route path="/recipes/:id" element={<RecipeDetail />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </Router>
  );
}

import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (onSearch) onSearch(query);
  };

  return (
    <div className="flex items-center gap-2 bg-white rounded-lg shadow px-3 py-2">
      <input
        type="text"
        placeholder="Search recipes (e.g., jollof, egusi)..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="flex-1 border-none focus:outline-none text-gray-700"
      />
      <button
        onClick={handleSearch}
        className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
      >
        Search
      </button>
      <button
        onClick={() => setQuery("")}
        className="bg-gray-300 text-gray-800 px-2 py-1 rounded hover:bg-gray-400"
      >
        Clear
      </button>
    </div>
  );
}

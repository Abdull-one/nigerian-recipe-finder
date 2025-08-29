import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  return (
    <div className="flex flex-col sm:flex-row items-center gap-2 my-6 w-full max-w-xl mx-auto px-4">
      <input
        type="text"
        placeholder="Search recipes (e.g., jollof, egusi)..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="flex-grow p-2 border rounded-lg focus:ring-2 focus:ring-green-500"
      />
      <div className="flex gap-2">
        <button
          onClick={() => onSearch(query)}
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
        >
          Search
        </button>
        <button
          onClick={() => {
            setQuery("");
            onSearch("");
          }}
          className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400"
        >
          Clear
        </button>
      </div>
    </div>
  );
}

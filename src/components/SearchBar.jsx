import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const submit = (e) => {
    if (e) e.preventDefault();
    if (typeof onSearch === "function") onSearch(query.trim());
  };

  const clear = () => {
    setQuery("");
    if (typeof onSearch === "function") onSearch("");
  };

  return (
    <form onSubmit={submit} className="container mx-auto px-4 my-4">
      <div className="flex flex-col sm:flex-row items-center gap-3 max-w-xl mx-auto">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full md:w-72 px-3 py-2 border rounded-lg text-black"
          placeholder="Search recipes (e.g., jollof, egusi)..."
        />
        <div className="flex gap-2">
          <button type="submit" className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800">
            Search
          </button>
          <button type="button" onClick={clear} className="bg-gray-300 px-4 py-2 rounded-lg hover:bg-gray-400">
            Clear
          </button>
        </div>
      </div>
    </form>
  );
}

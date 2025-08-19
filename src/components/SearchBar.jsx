import { useRecipeStore } from "../store/recipeStore";

export default function SearchBar() {
  const searchTerm = useRecipeStore((s) => s.searchTerm);
  const setSearchTerm = useRecipeStore((s) => s.setSearchTerm);

  return (
    <div className="max-w-xl mx-auto">
      <input
        type="text"
        placeholder="Search recipes..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full rounded-md border px-4 py-2 outline-none"
      />
    </div>
  );
}

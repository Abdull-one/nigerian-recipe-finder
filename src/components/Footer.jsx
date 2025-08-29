export default function Footer() {
  return (
    <footer className="bg-green-700 text-white text-center py-6 mt-10">
      <p className="text-sm">
        © 2025 Nigerian Recipe Finder. All rights reserved.
      </p>
      <div className="mt-2 space-x-4">
        <a href="/about" className="hover:underline">About</a>
        <a href="/contact" className="hover:underline">Contact</a>
        <a href="/recipes" className="hover:underline">Recipes</a>
      </div>
    </footer>
  );
}

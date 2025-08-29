export default function Footer() {
  return (
    <footer className="bg-green-700 text-white py-6 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p>© 2025 Nigerian Recipe Finder</p>
        <nav className="flex gap-6">
          <a href="/about" className="hover:text-yellow-300">About</a>
          <a href="/contact" className="hover:text-yellow-300">Contact</a>
          <a href="/recipes" className="hover:text-yellow-300">Recipes</a>
        </nav>
      </div>
    </footer>
  );
}

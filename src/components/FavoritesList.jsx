export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t mt-8">
      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-sm text-gray-700">
          © {new Date().getFullYear()} Nigerian Recipe Finder — Abdullahi Ali Adam
        </div>
        <div className="text-sm text-gray-700">
          Contact: +234-XXXXXXXXXX
        </div>
      </div>
    </footer>
  );
}

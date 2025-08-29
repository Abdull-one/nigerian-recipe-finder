import Header from "./Header";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Navbar />

      <main className="flex-grow">
        <Outlet /> {/* this renders the current page */}
      </main>

      <Footer />
    </div>
  );
}

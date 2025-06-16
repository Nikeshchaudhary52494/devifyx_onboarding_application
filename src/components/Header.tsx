import { FiHome } from "react-icons/fi";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header
      id="header"
      className="bg-card border rounded-xl p-6 animate-fade-in"
    >
      <div className="flex justify-between items-center">
        <h1 className="text-xl md:text-3xl font-bold text-primary flex items-center">
          <span className="bg-blue-500 text-primary-foreground p-2 rounded-lg mr-3">
            <FiHome />
          </span>
          devifyX
        </h1>
        <Navbar />
      </div>
    </header>
  );
}

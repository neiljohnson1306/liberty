import { Link } from "react-router-dom"
import useTheme from "../hooks/useTheme"

export default function Navbar() {
  const [theme, setTheme] = useTheme()

  return (
    <nav className="sticky top-0 border-b bg-white dark:bg-darkBg z-50 transition-colors">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold">LIBERTY CONSULTANCY</h1>

        <div className="flex items-center space-x-6">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact" className="text-accent font-semibold">
            Contact
          </Link>
          <Link to="/case-studies">Case Studies</Link>


          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="border rounded-lg px-3 py-1 text-sm hover:bg-muted dark:hover:bg-secondary transition"
          >
            {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>
      </div>
    </nav>
  )
}

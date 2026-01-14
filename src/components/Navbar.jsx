import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="sticky top-0 bg-white border-b z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold">LIBERTY CONSULTANCY</h1>
        <div className="space-x-6">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact" className="text-accent font-semibold">Contact</Link>
        </div>
      </div>
    </nav>
  )
}

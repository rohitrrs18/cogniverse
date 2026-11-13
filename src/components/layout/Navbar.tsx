import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' }, // <-- Added About
  { to: '/team', label: 'The Team' },
  { to: '/projects', label: 'Projects' },
];

export default function Navbar() {
  const location = useLocation();

  return (
    <header className="fixed top-0 inset-x-0 z-50 py-5 bg-[#050505]/80 backdrop-blur-xl border-b border-white/5">
      <nav className="mx-auto max-w-6xl px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="h-8 w-8 rounded bg-gradient-to-br from-white to-[#8A8A8A] flex items-center justify-center text-black font-bold font-display shadow-[0_0_15px_rgba(255,255,255,0.3)] group-hover:shadow-[0_0_25px_rgba(255,255,255,0.5)] transition-all">
            C
          </div>
          <span className="font-display font-bold tracking-[0.2em] text-white">COGNIVERSE</span>
        </Link>

        <div className="flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                location.pathname === l.to ? 'text-white' : 'text-[#8A8A8A] hover:text-white'
              }`}
            >
              {l.label}
              {location.pathname === l.to && (
                <motion.div
                  layoutId="nav-active"
                  className="absolute inset-x-0 -bottom-[21px] h-[2px] bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]"
                />
              )}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
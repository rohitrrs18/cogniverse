import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/team', label: 'The Team' },
  { to: '/projects', label: 'Projects' },
];

export default function Navbar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 py-3 sm:py-5 bg-[#050505]/80 backdrop-blur-xl border-b border-white/5">
      <nav className="mx-auto max-w-6xl px-4 sm:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 sm:gap-3 group" onClick={() => setOpen(false)}>
          <div className="h-7 w-7 sm:h-8 sm:w-8 rounded bg-gradient-to-br from-white to-[#8A8A8A] flex items-center justify-center text-black font-bold font-display shadow-[0_0_15px_rgba(255,255,255,0.3)] group-hover:shadow-[0_0_25px_rgba(255,255,255,0.5)] transition-all">
            C
          </div>
          <span className="font-display font-bold tracking-[0.15em] sm:tracking-[0.2em] text-white text-sm sm:text-base">
            COGNIVERSE
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`relative px-3 lg:px-4 py-2 text-sm font-medium transition-colors ${
                location.pathname === l.to ? 'text-white' : 'text-[#8A8A8A] hover:text-white'
              }`}
            >
              {l.label}
              {location.pathname === l.to && (
                <motion.div
                  layoutId="nav-active"
                  className="absolute inset-x-0 -bottom-[17px] sm:-bottom-[21px] h-[2px] bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]"
                />
              )}
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className="md:hidden grid place-items-center h-9 w-9 rounded-full border border-white/10 bg-white/5 text-white/80 hover:text-white hover:bg-white/10 transition-colors"
        >
          {open ? <X size={16} /> : <Menu size={16} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full inset-x-0 border-b border-white/10 bg-[#050505]/95 backdrop-blur-xl px-4 py-4 flex flex-col gap-1"
          >
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${
                  location.pathname === l.to
                    ? 'text-white bg-white/5'
                    : 'text-[#8A8A8A] hover:text-white hover:bg-white/5'
                }`}
              >
                {l.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
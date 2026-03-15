import { NavLink } from 'react-router';
import { Menu, X, Rabbit } from 'lucide-react';
import { useState } from 'react';

const navLinks = [
  { path: '/', label: 'Inicio' },
  { path: '/razas', label: 'Razas' },
  { path: '/alimentacion', label: 'Alimentación' },
  { path: '/cuidados', label: 'Cuidados' },
  { path: '/salud', label: 'Salud' },
  { path: '/faq', label: 'FAQ' }
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-primary shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <NavLink to="/" className="flex items-center gap-2 text-white group">
            <div className="p-2 bg-white/20 rounded-lg group-hover:bg-white/30 transition-colors">
              <Rabbit className="w-6 h-6" />
            </div>
            <span className="text-xl">Mundo Conejo</span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg transition-all ${
                    isActive
                      ? 'bg-white text-purple-600'
                      : 'text-white hover:bg-white/20'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-white hover:bg-white/20"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white/10 backdrop-blur-lg border-t border-white/20">
          <div className="px-4 py-2 space-y-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-lg transition-all ${
                    isActive
                      ? 'bg-white text-purple-600'
                      : 'text-white hover:bg-white/20'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}



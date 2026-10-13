import { NavLink } from 'react-router';
import { Menu, X, ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Logo } from './Logo';

const navLinks = [
  { path: '/', label: 'Inicio' },
  { path: '/razas', label: 'Razas' },
  { path: '/alimentacion', label: 'Alimentación' },
  { path: '/cuidados', label: 'Cuidados' },
  { path: '/salud', label: 'Salud' },
  { path: '/faq', label: 'FAQ' }
];

const stripeColors = ['bg-terracotta', 'bg-mustard', 'bg-teal', 'bg-sage', 'bg-berry', 'bg-rose'];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      <div className="flex h-1.5">
        {stripeColors.map((color) => (
          <span key={color} className={`flex-1 ${color}`} />
        ))}
      </div>

      <div
        className={`border-b-2 border-ink bg-cream transition-shadow duration-300 ${
          scrolled ? 'shadow-[0_10px_30px_-18px_rgba(59,42,31,0.6)]' : ''
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between md:h-20">
            <NavLink to="/" className="group">
              <Logo wordClassName="text-ink" />
            </NavLink>

            <nav className="hidden items-center gap-1 md:flex">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `rounded-full px-4 py-2 text-sm font-bold transition-all ${
                      isActive
                        ? 'border-2 border-ink bg-primary text-primary-foreground shadow-hard'
                        : 'text-ink hover:bg-muted'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <NavLink
                to="/cuidados"
                className="ml-2 inline-flex items-center gap-1.5 rounded-full border-2 border-ink bg-mustard px-4 py-2 text-sm font-bold text-accent-foreground shadow-hard transition-all hover:-translate-y-0.5 hover:shadow-hard-lg"
              >
                Empezar
                <ArrowRight className="h-4 w-4" />
              </NavLink>
            </nav>

            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Abrir menú"
              className="grid h-11 w-11 place-items-center rounded-xl border-2 border-ink bg-card text-ink shadow-hard md:hidden"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        <div
          className={`overflow-hidden border-ink bg-cream transition-[max-height,opacity] duration-500 md:hidden ${
            isOpen ? 'max-h-96 border-t-2 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="space-y-2 px-4 py-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block rounded-xl border-2 px-4 py-3 text-sm font-bold transition-colors ${
                    isActive
                      ? 'border-ink bg-primary text-primary-foreground'
                      : 'border-transparent text-ink hover:bg-muted'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}

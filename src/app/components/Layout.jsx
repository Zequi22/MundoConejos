import { Outlet, useLocation } from 'react-router';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

const footerWaveByRoute = {
  '/': 'text-teal',
  '/salud': 'text-destructive',
  '/alimentacion': 'text-sky',
  '/cuidados': 'text-butter',
  '/faq': 'text-terracotta',
  '/razas': 'text-cream',
};

export function Layout() {
  const location = useLocation();
  const topWaveColor = footerWaveByRoute[location.pathname] || 'text-cream';

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer topWaveColor={topWaveColor} />
    </div>
  );
}




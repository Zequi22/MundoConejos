import { Link } from 'react-router';
import { Heart, ArrowUpRight } from 'lucide-react';
import { LogoMark } from './Logo';
import { Blob, Sparkle, WaveDivider } from './Decor';

const exploreLinks = [
  { path: '/razas', label: 'Razas' },
  { path: '/alimentacion', label: 'Alimentación' },
  { path: '/cuidados', label: 'Cuidados' },
  { path: '/salud', label: 'Salud' },
  { path: '/faq', label: 'Preguntas frecuentes' }
];

const resources = [
  'Veterinarios especializados en exóticos',
  'Comunidades de cuidadores de conejos',
  'Refugios y adopción local',
  'Lenguaje corporal del conejo'
];

const reminders = [
  'Los conejos son un compromiso de 8-12 años',
  'Requieren atención veterinaria especializada',
  'No son mascotas de bajo mantenimiento',
  'Considera adoptar en lugar de comprar'
];

const stripeColors = ['bg-terracotta', 'bg-mustard', 'bg-teal', 'bg-sage', 'bg-berry', 'bg-rose'];

export function Footer({ topWaveColor = 'text-cream' }) {
  return (
    <footer className="relative overflow-hidden bg-ink text-cream">
      <WaveDivider className={`absolute left-0 top-0 h-12 w-full rotate-180 ${topWaveColor}`} />

      <Blob className="absolute -right-24 top-10 h-72 w-72 text-terracotta/15" />
      <Blob className="absolute -bottom-24 -left-20 h-72 w-72 rotate-45 text-teal/15" />
      <Sparkle className="absolute right-[20%] top-24 h-8 w-8 text-mustard" />

      <div className="relative mx-auto max-w-7xl px-4 pb-8 pt-24 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:pr-6">
            <div className="flex items-center gap-3">
              <LogoMark className="h-11 w-11" />
              <span className="font-display text-xl font-bold">
                Mundo<span className="text-terracotta">Conejos</span>
              </span>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-cream/65">
              Guía informativa sobre el cuidado de conejos. La información es educativa; consulta
              siempre con un veterinario especializado en animales exóticos.
            </p>
            <div className="mt-6 flex h-1.5 w-40 overflow-hidden rounded-full">
              {stripeColors.map((color) => (
                <span key={color} className={`flex-1 ${color}`} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-5 font-display text-lg text-mustard">Explorar</h3>
            <ul className="space-y-3 text-sm">
              {exploreLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="group inline-flex items-center gap-1.5 text-cream/70 transition-colors hover:text-cream"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3.5 w-3.5 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 font-display text-lg text-mustard">Recursos</h3>
            <ul className="space-y-3 text-sm text-cream/70">
              {resources.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-teal" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 font-display text-lg text-mustard">Recuerda</h3>
            <ul className="space-y-3 text-sm text-cream/70">
              {reminders.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-terracotta" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center gap-3 border-t-2 border-cream/15 pt-8 text-center text-sm text-cream/55">
          <p className="inline-flex items-center gap-2">
            Hecho con <Heart className="h-4 w-4 text-terracotta" /> para los amantes de los conejos
          </p>
          <p>© {new Date().getFullYear()} MundoConejos · Información educativa</p>
        </div>
      </div>
    </footer>
  );
}

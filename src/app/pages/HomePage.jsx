import { Link } from 'react-router';
import { ArrowRight, Heart, Shield, BookOpen, Stethoscope, Apple, Rabbit, Sparkles } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Hero } from '../components/Hero';
import { Blob, Sparkle, Daisy, WaveDivider, Rainbow } from '../components/Decor';
import { HERO_IMAGES, IMAGES } from '../constants/images';

const features = [
  {
    icon: BookOpen,
    title: 'Razas',
    description: 'Descubre las diferentes razas de conejos y sus características únicas.',
    link: '/razas',
    image: IMAGES.breeds,
    chip: 'bg-teal'
  },
  {
    icon: Apple,
    title: 'Alimentación',
    description: 'Qué comer y qué evitar para mantener a tu conejo sano y vital.',
    link: '/alimentacion',
    image: IMAGES.eating,
    chip: 'bg-sage'
  },
  {
    icon: Heart,
    title: 'Cuidados',
    description: 'Hábitat, higiene, socialización y ejercicio en el día a día.',
    link: '/cuidados',
    image: IMAGES.habitat,
    chip: 'bg-berry'
  },
  {
    icon: Stethoscope,
    title: 'Salud',
    description: 'Aprende a identificar signos de salud y problemas comunes.',
    link: '/salud',
    image: IMAGES.rabbit,
    chip: 'bg-primary'
  }
];

const stats = [
  { value: '8-12', label: 'Años de vida', color: 'bg-terracotta text-cream', rotate: '-rotate-2' },
  { value: '300+', label: 'Razas en el mundo', color: 'bg-teal text-cream', rotate: 'rotate-1' },
  { value: '24/7', label: 'Heno disponible', color: 'bg-mustard text-accent-foreground', rotate: '-rotate-1' },
  { value: '3-4h', label: 'Ejercicio diario', color: 'bg-sage text-cream', rotate: 'rotate-2' }
];

const pillars = [
  'Información basada en las necesidades reales de los conejos domésticos.',
  'Consejos prácticos para principiantes y cuidadores con experiencia.',
  'Enfoque preventivo: cuida hoy para evitar problemas mañana.'
];

const tickerWords = [
  'Heno fresco',
  'Zanahorias',
  'Mucho cariño',
  'Cepillado',
  'Ejercicio diario',
  'Salud preventiva',
  'Adopta, no compres',
  'Conejos felices'
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Hero
        image={HERO_IMAGES.home}
        tint="bg-butter"
        eyebrow="Guía completa de cuidado"
        title="Todo sobre"
        highlight="los conejos"
        highlightColor="text-primary"
        description="La guía definitiva para cuidar, alimentar y mantener feliz a tu conejo, desde el primer día hasta cada etapa de su vida."
        badge="8-12 años"
        badgeColor="bg-mustard text-accent-foreground"
      >
        <Link
          to="/razas"
          className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-ink bg-primary px-8 py-4 font-bold text-primary-foreground shadow-hard transition-all hover:-translate-y-0.5 hover:shadow-hard-lg"
        >
          Explorar razas
          <ArrowRight className="h-5 w-5" />
        </Link>
        <Link
          to="/cuidados"
          className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-ink bg-card px-8 py-4 font-bold text-ink shadow-hard transition-all hover:-translate-y-0.5 hover:shadow-hard-lg"
        >
          Guía de cuidados
        </Link>
      </Hero>

      <div className="overflow-hidden border-y-2 border-ink bg-primary py-3 text-primary-foreground">
        <div className="flex w-max animate-marquee">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex items-center">
              {tickerWords.map((word) => (
                <span key={`${copy}-${word}`} className="flex items-center">
                  <span className="px-6 font-display text-lg font-semibold whitespace-nowrap">
                    {word}
                  </span>
                  <Daisy className="h-5 w-5 text-mustard" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <section className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className={`rounded-3xl border-2 border-ink p-6 text-center shadow-hard ${stat.color} ${stat.rotate} transition-transform hover:rotate-0`}
            >
              <div className="font-display text-3xl font-bold md:text-4xl">{stat.value}</div>
              <div className="mt-1 text-xs font-bold opacity-90 md:text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden py-16 md:py-24">
        <Blob className="absolute -right-24 top-10 h-72 w-72 text-mint" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <Rainbow className="mx-auto mb-3 h-12 w-16" />
            <span className="font-script text-2xl text-teal">Explora la guía</span>
            <h2 className="mt-2 text-3xl md:text-4xl">
              Todo lo que necesitas para ser el mejor cuidador
            </h2>
            <p className="mt-4 text-foreground/70">
              Cuatro áreas esenciales para comprender y cuidar a tu conejo con confianza.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <Link
                  key={feature.title}
                  to={feature.link}
                  className="card-boho group flex flex-col overflow-hidden shadow-hard hover:-translate-y-1.5 hover:shadow-hard-lg"
                >
                  <div className="relative h-52 overflow-hidden border-b-2 border-ink">
                    <ImageWithFallback
                      src={feature.image}
                      alt={feature.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span
                      className={`absolute -bottom-6 right-6 grid h-14 w-14 place-items-center rounded-2xl border-2 border-ink text-cream shadow-hard transition-transform duration-300 group-hover:-rotate-6 ${feature.chip}`}
                    >
                      <Icon className="h-7 w-7" />
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-8">
                    <h3 className="text-2xl">{feature.title}</h3>
                    <p className="mt-3 flex-1 text-foreground/70">{feature.description}</p>
                    <span className="mt-6 inline-flex items-center gap-2 font-bold text-primary">
                      Explorar
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1.5" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-cloud pt-16 pb-24 md:pt-24 md:pb-32">
        <WaveDivider className="absolute left-0 top-0 h-12 w-full rotate-180 text-cream" />
        <Daisy className="absolute left-[6%] top-24 hidden h-16 w-16 text-sky lg:block" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="relative">
            <Blob className="absolute -inset-6 h-auto w-auto text-mustard/60" />
            <div className="relative overflow-hidden rounded-t-full border-4 border-ink shadow-hard-lg">
              <ImageWithFallback
                src={IMAGES.habitat}
                alt="Conejo en su hábitat"
                className="h-[440px] w-full object-cover"
              />
            </div>
            <span className="absolute -left-4 bottom-10 rotate-[-6deg] rounded-2xl border-2 border-ink bg-terracotta px-5 py-3 font-script text-2xl text-cream shadow-hard">
              ¡Con cariño!
            </span>
          </div>

          <div>
            <span className="font-script text-2xl text-primary">Nuestra filosofía</span>
            <h2 className="mt-2 text-3xl md:text-4xl">
              Cada conejo merece una vida larga y feliz
            </h2>
            <p className="mt-5 text-foreground/70">
              Un conejo bien cuidado puede acompañarte más de una década. Esta guía reúne lo esencial
              para que tomes decisiones informadas en cada momento.
            </p>
            <ul className="mt-8 space-y-4">
              {pillars.map((item, index) => (
                <li key={item} className="flex items-start gap-4">
                  <span
                    className={`mt-0.5 grid h-8 w-8 flex-shrink-0 place-items-center rounded-xl border-2 border-ink text-cream ${
                      ['bg-terracotta', 'bg-teal', 'bg-sage'][index % 3]
                    }`}
                  >
                    <Sparkles className="h-4 w-4" />
                  </span>
                  <span className="font-medium text-foreground/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <WaveDivider className="absolute bottom-0 left-0 h-12 w-full text-cream" />
      </section>

      <section className="relative mt-12 overflow-hidden bg-teal px-4 pt-28 pb-20 text-cream sm:px-6 md:mt-16 lg:px-8">
        <WaveDivider className="absolute left-0 top-0 h-10 w-full rotate-180 text-cream" />
        <Blob className="absolute -right-20 -top-10 h-72 w-72 text-cream/15" />
        <Sparkle className="absolute left-[12%] top-14 h-10 w-10 text-mustard" />
        <div className="relative mx-auto max-w-3xl text-center">
          <span className="mx-auto grid h-16 w-16 place-items-center rounded-2xl border-2 border-cream/30 bg-terracotta text-cream shadow-[5px_5px_0_0_#fff8ee]">
            <Shield className="h-8 w-8" />
          </span>
          <h2 className="mt-6 text-3xl md:text-4xl">¿Tienes preguntas?</h2>
          <p className="mt-4 text-cream/75">
            Consulta nuestra sección de preguntas frecuentes y resuelve tus dudas antes de dar el
            siguiente paso.
          </p>
          <Link
            to="/faq"
            className="mt-8 inline-flex items-center gap-2 rounded-full border-2 border-ink bg-mustard px-8 py-4 font-bold text-accent-foreground shadow-[5px_5px_0_0_#e76f51] transition-all hover:-translate-y-0.5"
          >
            Ver preguntas frecuentes
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

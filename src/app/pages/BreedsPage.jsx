import { Link } from 'react-router';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Hero } from '../components/Hero';
import { Blob, Sparkle, WaveDivider } from '../components/Decor';
import { HERO_IMAGES, IMAGES } from '../constants/images';
import { Weight, Clock, Heart, Ruler, Check, ArrowRight, Rabbit } from 'lucide-react';

const breeds = [
  {
    name: 'Conejo Holandés Enano',
    size: 'Pequeño',
    weight: '1-1.5 kg',
    temperament: 'Activo y amigable',
    lifespan: '10-12 años',
    description:
      'Una de las razas más populares como mascota. Son pequeños, adorables y muy sociables, perfectos para vivir en apartamentos.',
    characteristics: ['Muy sociable', 'Fácil de entrenar', 'Energético', 'Requiere atención diaria'],
    color: 'bg-berry'
  },
  {
    name: 'Conejo Cabeza de León',
    size: 'Mediano',
    weight: '1.5-2 kg',
    temperament: 'Tranquilo y dócil',
    lifespan: '8-10 años',
    description:
      'Caracterizado por su melena de pelo alrededor de la cabeza, similar a la de un león. Son cariñosos y gentiles.',
    characteristics: ['Melena distintiva', 'Calmado', 'Bueno con niños', 'Cepillado regular'],
    color: 'bg-coral'
  },
  {
    name: 'Conejo Gigante de Flandes',
    size: 'Grande',
    weight: '6-10 kg',
    temperament: 'Gentil y calmado',
    lifespan: '5-8 años',
    description:
      'Una de las razas más grandes. A pesar de su tamaño, son conocidos por ser muy tranquilos y dóciles.',
    characteristics: ['Tamaño impresionante', 'Muy gentil', 'Mucho espacio', 'Come más que otras'],
    color: 'bg-teal'
  },
  {
    name: 'Conejo Rex',
    size: 'Mediano',
    weight: '3-4.5 kg',
    temperament: 'Inteligente y juguetón',
    lifespan: '8-11 años',
    description:
      'Reconocido por su pelaje aterciopelado único y su personalidad cariñosa. Es muy inteligente.',
    characteristics: ['Pelaje suave único', 'Muy inteligente', 'Juguetón', 'Aprende trucos'],
    color: 'bg-sage'
  },
  {
    name: 'Conejo Belier o Lop',
    size: 'Mediano',
    weight: '2-3 kg',
    temperament: 'Dulce y sociable',
    lifespan: '7-10 años',
    description:
      'Caracterizado por sus orejas caídas. Muy popular por su aspecto tierno y su personalidad afectuosa.',
    characteristics: ['Orejas caídas', 'Muy cariñoso', 'Excelente mascota', 'Limpiar orejas'],
    color: 'bg-rose'
  },
  {
    name: 'Conejo Angora',
    size: 'Mediano',
    weight: '2-5 kg',
    temperament: 'Tranquilo y afectuoso',
    lifespan: '7-12 años',
    description:
      'Famoso por su largo y suave pelaje, que requiere cepillado regular. Hermoso, pero necesita cuidado constante.',
    characteristics: ['Pelaje muy largo', 'Cepillado diario', 'Muy tranquilo', 'Alto mantenimiento'],
    color: 'bg-primary'
  }
];

export default function BreedsPage() {
  return (
    <div className="min-h-screen">
      <Hero
        image={HERO_IMAGES.breeds}
        tint="bg-cloud"
        eyebrow="Más de 300 razas"
        title="Razas de"
        highlight="conejos"
        highlightColor="text-teal"
        description="Descubre las características únicas de cada raza y encuentra el compañero perfecto para tu hogar."
        badge="¡Adopta!"
        badgeColor="bg-teal text-cream"
      />

      <section className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-4xl">
          <Blob className="absolute -inset-6 h-auto w-auto text-teal/20" />
          <div className="relative overflow-hidden rounded-[2.5rem] border-4 border-ink shadow-hard-lg">
            <ImageWithFallback
              src={IMAGES.breeds}
              alt="Diferentes razas de conejos"
              className="h-[340px] w-full object-cover md:h-[440px]"
            />
          </div>
          <Sparkle className="absolute -right-4 -top-4 h-12 w-12 text-terracotta animate-float" />
        </div>
      </section>

      <section className="relative overflow-hidden bg-mustard py-14">
        <WaveDivider className="absolute left-0 top-0 h-10 w-full rotate-180 text-cream" />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl text-accent-foreground md:text-3xl">Más de 300 razas en el mundo</h2>
          <p className="mt-4 font-medium text-ink/80">
            Existen más de 300 razas reconocidas en todo el mundo, cada una con características
            únicas. Aquí te presentamos algunas de las más populares como mascotas.
          </p>
        </div>
        <WaveDivider className="absolute bottom-0 left-0 h-10 w-full text-cream" />
      </section>

      <section className="relative overflow-hidden py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Blob className="absolute -left-24 top-20 h-72 w-72 text-mint" />
        <div className="relative grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {breeds.map((breed) => (
            <article
              key={breed.name}
              className="card-boho group flex flex-col overflow-hidden shadow-hard hover:-translate-y-1.5 hover:shadow-hard-lg"
            >
              <div className={`flex items-center justify-between border-b-2 border-ink px-6 py-4 text-cream ${breed.color}`}>
                <Rabbit className="h-8 w-8" />
                <span className="rounded-full border-2 border-ink bg-cream px-3 py-1 text-xs font-bold text-ink">
                  {breed.size}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-7">
                <h3 className="text-xl leading-tight">{breed.name}</h3>

                <div className="mt-5 flex flex-wrap gap-2">
                  {[
                    { icon: Ruler, value: breed.size },
                    { icon: Weight, value: breed.weight },
                    { icon: Clock, value: breed.lifespan }
                  ].map(({ icon: Icon, value }) => (
                    <span
                      key={value}
                      className="inline-flex items-center gap-1.5 rounded-full border-2 border-ink/10 bg-muted px-3 py-1 text-xs font-bold text-ink/80"
                    >
                      <Icon className="h-3.5 w-3.5" />
                      {value}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex items-start gap-3 rounded-2xl border-2 border-ink/10 bg-blush p-4">
                  <Heart className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-primary">
                      Temperamento
                    </p>
                    <p className="font-bold text-ink">{breed.temperament}</p>
                  </div>
                </div>

                <p className="mt-5 text-sm leading-relaxed text-foreground/70">{breed.description}</p>

                <ul className="mt-6 flex-1 space-y-2 border-t-2 border-dashed border-ink/15 pt-5">
                  {breed.characteristics.map((char) => (
                    <li key={char} className="flex items-center gap-2 text-sm font-medium text-foreground/80">
                      <span className="grid h-5 w-5 flex-shrink-0 place-items-center rounded-full border-2 border-ink bg-lime text-ink">
                        <Check className="h-3 w-3" />
                      </span>
                      {char}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/alimentacion"
            className="inline-flex items-center gap-2 rounded-full border-2 border-ink bg-primary px-8 py-4 font-bold text-primary-foreground shadow-hard transition-all hover:-translate-y-0.5 hover:shadow-hard-lg"
          >
            Descubre cómo alimentarlos
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
        </div>
      </section>
    </div>
  );
}

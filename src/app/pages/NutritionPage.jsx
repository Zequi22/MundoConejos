import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Hero } from '../components/Hero';
import { Blob, Sparkle, WaveDivider, Daisy } from '../components/Decor';
import { Reveal } from '../components/Reveal';
import { HERO_IMAGES, IMAGES } from '../constants/images';
import { Check, Wheat, Leaf, Sprout, Carrot, Salad, CircleX, Droplet, Apple } from 'lucide-react';

const dietComponents = [
  {
    icon: Wheat,
    title: 'Heno',
    percentage: '80%',
    width: '80%',
    color: 'bg-lime text-ink',
    bar: 'bg-lime',
    description: 'Base de la alimentación',
    details:
      'El heno de timothy o de hierba debe estar disponible ilimitadamente. Es esencial para la digestión y el desgaste dental natural.',
    tips: ['Disponible 24/7', 'Fresco y de calidad', 'Principal fuente de fibra', 'Ayuda al desgaste dental']
  },
  {
    icon: Leaf,
    title: 'Vegetales frescos',
    percentage: '10-15%',
    width: '14%',
    color: 'bg-teal text-cream',
    bar: 'bg-teal',
    description: 'Nutrientes esenciales',
    details:
      'Una variedad de verduras frescas cada día aporta las vitaminas y minerales esenciales para tu conejo.',
    tips: ['1 taza por kg de peso/día', 'Variedad de hoja verde', 'Introducir nuevas gradualmente', 'Lavar bien antes']
  },
  {
    icon: Apple,
    title: 'Pellets',
    percentage: '5-10%',
    width: '8%',
    color: 'bg-coral text-ink',
    bar: 'bg-coral',
    description: 'Complemento nutricional',
    details:
      'Pellets de alta calidad específicos para conejos, en cantidades limitadas según el peso del animal.',
    tips: ['1/4 taza por 2.5 kg', 'Específicos para conejos', 'Alto contenido de fibra', 'Limitar la cantidad']
  }
];

const goodFoods = [
  { name: 'Heno de timothy', category: 'Esencial', icon: Wheat },
  { name: 'Col rizada', category: 'Verdura', icon: Leaf },
  { name: 'Espinaca', category: 'Verdura', icon: Leaf },
  { name: 'Lechuga romana', category: 'Verdura', icon: Leaf },
  { name: 'Perejil', category: 'Hierba', icon: Sprout },
  { name: 'Cilantro', category: 'Hierba', icon: Sprout },
  { name: 'Albahaca', category: 'Hierba', icon: Sprout },
  { name: 'Zanahoria (moderación)', category: 'Verdura', icon: Carrot },
  { name: 'Brócoli (pequeñas cantidades)', category: 'Verdura', icon: Salad },
  { name: 'Pimiento', category: 'Verdura', icon: Salad },
  { name: 'Pepino', category: 'Verdura', icon: Salad },
  { name: 'Calabacín', category: 'Verdura', icon: Salad }
];

const badFoods = [
  { name: 'Chocolate', danger: 'Tóxico' },
  { name: 'Dulces y azúcares', danger: 'Peligroso' },
  { name: 'Lechuga iceberg', danger: 'Bajo valor nutricional' },
  { name: 'Aguacate', danger: 'Tóxico' },
  { name: 'Cebolla y ajo', danger: 'Tóxico' },
  { name: 'Patata', danger: 'Peligroso' },
  { name: 'Semillas y nueces', danger: 'Peligroso' },
  { name: 'Pan', danger: 'Dañino' },
  { name: 'Productos lácteos', danger: 'No digerible' }
];

export default function NutritionPage() {
  return (
    <div className="min-h-screen">
      <Hero
        image={HERO_IMAGES.nutrition}
        tint="bg-mint"
        eyebrow="Dieta equilibrada"
        title="Alimentación"
        highlight="saludable"
        highlightColor="text-sage"
        description="Una dieta equilibrada es fundamental para la salud y la longevidad de tu conejo."
        badge="¡Heno siempre!"
        badgeColor="bg-sage text-cream"
      />

      <section className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <Reveal variant="zoom" className="relative mx-auto max-w-4xl">
          <Blob className="absolute -inset-6 h-auto w-auto text-sage/20" />
          <div className="relative overflow-hidden rounded-[2.5rem] border-4 border-ink shadow-hard-lg">
            <ImageWithFallback
              src={IMAGES.eating}
              alt="Conejo comiendo vegetales"
              className="h-[340px] w-full object-cover md:h-[440px]"
            />
          </div>
          <Daisy className="absolute -left-4 -bottom-4 h-14 w-14 text-rose" />
        </Reveal>
      </section>

      <section className="relative mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
        <Reveal className="mx-auto mb-12 max-w-2xl text-center">
          <span className="font-script text-2xl text-primary">Proporciones diarias</span>
          <h2 className="mt-2 text-3xl md:text-4xl">Componentes de una dieta balanceada</h2>
        </Reveal>

        <div className="grid gap-8 md:grid-cols-3">
          {dietComponents.map((component, index) => {
            const Icon = component.icon;
            return (
              <Reveal key={component.title} variant="up" delay={index * 0.12} className="h-full">
              <article
                className="card-boho h-full overflow-hidden shadow-hard hover:-translate-y-1.5 hover:shadow-hard-lg"
              >
                <div className={`flex items-center justify-between border-b-2 border-ink px-6 py-5 ${component.color}`}>
                  <span className="grid h-12 w-12 place-items-center rounded-2xl border-2 border-ink bg-cream text-ink">
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className="font-display text-3xl font-bold">{component.percentage}</span>
                </div>

                <div className="p-7">
                  <div className="h-3 w-full overflow-hidden rounded-full border-2 border-ink bg-cream">
                    <div className={`h-full ${component.bar}`} style={{ width: component.width }} />
                  </div>

                  <h3 className="mt-5 text-2xl">{component.title}</h3>
                  <p className="text-sm font-bold text-primary">{component.description}</p>

                  <p className="mt-4 text-sm leading-relaxed text-foreground/75">{component.details}</p>

                  <ul className="mt-5 space-y-2">
                    {component.tips.map((tip) => (
                      <li key={tip} className="flex items-start gap-2 text-sm font-medium">
                        <span className="grid h-5 w-5 flex-shrink-0 place-items-center rounded-full border-2 border-ink bg-lime text-ink">
                          <Check className="h-3 w-3" />
                        </span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <Reveal variant="left" className="rounded-[2rem] border-4 border-ink bg-mint p-8 shadow-hard">
            <div className="mb-6 flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-2xl border-2 border-ink bg-lime text-ink">
                <Check className="h-6 w-6" />
              </span>
              <h3 className="text-2xl text-sage">Alimentos permitidos</h3>
            </div>

            <div className="grid gap-3">
              {goodFoods.map((food) => {
                const Icon = food.icon;
                return (
                  <div
                    key={food.name}
                    className="flex items-center gap-4 rounded-2xl border-2 border-ink/10 bg-card p-3.5 transition-transform hover:-translate-y-0.5"
                  >
                    <span className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-xl border-2 border-ink bg-lime text-ink">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div className="flex-1">
                      <p className="font-bold">{food.name}</p>
                      <p className="text-sm text-sage">{food.category}</p>
                    </div>
                    <Check className="h-5 w-5 text-sage" />
                  </div>
                );
              })}
            </div>
          </Reveal>

          <Reveal variant="right" className="rounded-[2rem] border-4 border-ink bg-blush p-8 shadow-hard">
            <div className="mb-6 flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-2xl border-2 border-ink bg-destructive text-cream">
                <CircleX className="h-6 w-6" />
              </span>
              <h3 className="text-2xl text-destructive">Alimentos prohibidos</h3>
            </div>

            <div className="grid gap-3">
              {badFoods.map((food) => (
                <div
                  key={food.name}
                  className="flex items-center gap-4 rounded-2xl border-2 border-ink/10 bg-card p-3.5 transition-transform hover:-translate-y-0.5"
                >
                  <span className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-xl border-2 border-ink bg-destructive text-cream">
                    <CircleX className="h-5 w-5" />
                  </span>
                  <div className="flex-1">
                    <p className="font-bold">{food.name}</p>
                    <p className="text-sm font-bold text-destructive">{food.danger}</p>
                  </div>
                  <CircleX className="h-5 w-5 text-destructive" />
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-sky px-4 pt-16 pb-20 sm:px-6 lg:px-8">
        <WaveDivider className="absolute left-0 top-0 h-10 w-full rotate-180 text-cream" />
        <Blob className="absolute -right-16 -top-10 h-64 w-64 text-cloud/50" />
        <Reveal variant="up" className="relative mx-auto grid max-w-6xl items-center gap-8 md:grid-cols-[auto_1fr]">
          <span className="grid h-20 w-20 place-items-center rounded-3xl border-2 border-ink bg-cream text-sky shadow-hard">
            <Droplet className="h-10 w-10" />
          </span>
          <div>
            <h2 className="text-3xl text-ink md:text-4xl">Agua fresca y limpia</h2>
            <p className="mt-3 max-w-2xl font-medium text-ink/75">
              Los conejos deben tener acceso constante a agua fresca y limpia. Es vital para su salud
              y bienestar.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                'Cambia el agua a diario',
                'Limpia el recipiente con frecuencia',
                'Usa botella o cuenco pesado',
                'Vigila el consumo diario'
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 rounded-xl border-2 border-ink bg-cream p-3 text-sm font-bold text-ink"
                >
                  <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-sky" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>
    </div>
  );
}

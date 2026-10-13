import { useState } from 'react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Hero } from '../components/Hero';
import { Blob, Daisy, Sparkle, WaveDivider } from '../components/Decor';
import { HERO_IMAGES, IMAGES } from '../constants/images';
import {
  Home,
  Scissors,
  Thermometer,
  Users,
  Activity,
  Sparkles,
  Rabbit,
  Stethoscope,
  Check
} from 'lucide-react';

const careCategories = [
  {
    id: 'habitat',
    icon: Home,
    title: 'Hábitat',
    color: 'bg-primary text-primary-foreground',
    sections: [
      {
        subtitle: 'Tamaño del espacio',
        items: [
          'Mínimo 120 × 60 × 60 cm para un conejo mediano',
          'La regla: 4 veces el tamaño del conejo estirado',
          'Espacio adicional para ejercicio fuera de la jaula',
          'Considera un recinto más amplio o tiempo libre en habitación'
        ]
      },
      {
        subtitle: 'Ubicación',
        items: [
          'Área fresca y bien ventilada',
          'Sin corrientes de aire directas',
          'Protegido de temperaturas extremas (ideal 15-21 °C)',
          'Lejos de ruidos fuertes y fuentes de estrés',
          'Una zona tranquila de la casa'
        ]
      },
      {
        subtitle: 'Equipamiento esencial',
        items: [
          'Caja de arena (los conejos pueden entrenarse)',
          'Comedero pesado que no se vuelque',
          'Bebedero o botella de agua',
          'Escondite o refugio para sentirse seguros',
          'Juguetes seguros para masticar'
        ]
      }
    ]
  },
  {
    id: 'hygiene',
    icon: Scissors,
    title: 'Higiene y cepillado',
    color: 'bg-teal text-cream',
    sections: [
      {
        subtitle: 'Cepillado regular',
        items: [
          'Semanal para razas de pelo corto',
          'Diario para razas de pelo largo (Angora, etc.)',
          'Más frecuente durante la época de muda',
          'Ayuda a prevenir bolas de pelo',
          'Fortalece el vínculo con tu conejo'
        ]
      },
      {
        subtitle: 'Cuidado de uñas',
        items: [
          'Cortar cada 4-6 semanas',
          'Usar cortaúñas especiales para mascotas',
          'Cuidado con la vena (parte rosada)',
          'Si no te sientes seguro, acude al veterinario',
          'Revisa regularmente el largo'
        ]
      },
      {
        subtitle: 'Limpieza del espacio',
        items: [
          'Limpieza parcial 2-3 veces por semana',
          'Cambio completo de sustrato semanalmente',
          'Desinfectar accesorios con regularidad',
          'Limpiar la caja de arena a diario',
          'Mantener la zona libre de humedad'
        ]
      }
    ]
  },
  {
    id: 'exercise',
    icon: Activity,
    title: 'Ejercicio y juego',
    color: 'bg-lime text-ink',
    sections: [
      {
        subtitle: 'Tiempo fuera de la jaula',
        items: [
          'Mínimo 3-4 horas diarias',
          'Idealmente en sesiones supervisadas',
          'Espacio seguro para explorar',
          'Protege los cables eléctricos',
          'Retira plantas tóxicas del área'
        ]
      },
      {
        subtitle: 'Enriquecimiento ambiental',
        items: [
          'Túneles para explorar',
          'Cajas de cartón para masticar',
          'Plataformas a diferentes alturas',
          'Juguetes que pueda mover y lanzar',
          'Cambia los juguetes para mantener el interés'
        ]
      },
      {
        subtitle: 'Beneficios del ejercicio',
        items: [
          'Previene la obesidad',
          'Estimula la mente',
          'Reduce comportamientos destructivos',
          'Fortalece músculos y huesos',
          'Mejora la salud digestiva'
        ]
      }
    ]
  },
  {
    id: 'social',
    icon: Users,
    title: 'Socialización',
    color: 'bg-berry text-cream',
    sections: [
      {
        subtitle: 'Interacción humana',
        items: [
          'Dedica tiempo diario de calidad',
          'Habla suavemente a tu conejo',
          'Respeta su espacio personal',
          'Deja que se acerque a ti voluntariamente',
          'Nunca fuerces la interacción'
        ]
      },
      {
        subtitle: 'Convivencia con otros conejos',
        items: [
          'Los conejos son animales sociales',
          'Mejor en parejas esterilizadas',
          'Macho y hembra funciona mejor',
          'Introducción gradual y supervisada',
          'Nunca los juntes sin presentación previa'
        ]
      },
      {
        subtitle: 'Manejo apropiado',
        items: [
          'Nunca levantes por las orejas',
          'Soporta bien la parte trasera',
          'Mantenlo cerca de tu cuerpo',
          'Si lucha, bájalo suavemente',
          'Algunos conejos prefieren no ser cargados'
        ]
      }
    ]
  }
];

const quickTips = [
  { icon: Rabbit, title: 'Tiempo de adaptación', text: 'Dale tiempo a tu conejo para adaptarse a su nuevo hogar. Puede tardar semanas en sentirse cómodo.', color: 'bg-primary text-primary-foreground' },
  { icon: Stethoscope, title: 'Veterinario especializado', text: 'Busca un veterinario con experiencia en animales exóticos; no todos atienden conejos.', color: 'bg-teal text-cream' },
  { icon: Thermometer, title: 'Control de temperatura', text: 'Los conejos son sensibles al calor. Mantén el ambiente fresco, especialmente en verano.', color: 'bg-coral text-ink' },
  { icon: Scissors, title: 'Esterilización recomendada', text: 'La esterilización previene problemas de salud y mejora el comportamiento.', color: 'bg-berry text-cream' }
];

export default function CarePage() {
  const [active, setActive] = useState('habitat');
  const current = careCategories.find((c) => c.id === active) ?? careCategories[0];

  return (
    <div className="min-h-screen">
      <Hero
        image={HERO_IMAGES.care}
        tint="bg-blush"
        eyebrow="Bienestar diario"
        title="Cuidados"
        highlight="esenciales"
        highlightColor="text-primary"
        description="Proporcionar los cuidados adecuados asegura una vida larga y feliz para tu conejo."
        badge="¡Con cariño!"
        badgeColor="bg-primary text-primary-foreground"
      />

      <section className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-4xl">
          <Blob className="absolute -inset-6 h-auto w-auto text-primary/15" />
          <div className="relative overflow-hidden rounded-[2.5rem] border-4 border-ink shadow-hard-lg">
            <ImageWithFallback
              src={IMAGES.care}
              alt="Cuidados de conejo"
              className="h-[340px] w-full object-cover md:h-[440px]"
            />
          </div>
          <Sparkle className="absolute -left-4 -top-4 h-12 w-12 text-mustard animate-float" />
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {careCategories.map((category) => {
            const Icon = category.icon;
            const isActive = category.id === active;
            return (
              <button
                key={category.id}
                onClick={() => setActive(category.id)}
                className={`flex items-center gap-3 rounded-2xl border-2 border-ink p-4 text-left transition-all ${
                  isActive
                    ? `${category.color} -translate-y-1 shadow-hard-lg`
                    : 'bg-card text-ink shadow-hard hover:-translate-y-0.5'
                }`}
              >
                <span
                  className={`grid h-11 w-11 flex-shrink-0 place-items-center rounded-xl border-2 border-ink ${
                    isActive ? 'bg-cream text-ink' : category.color
                  }`}
                >
                  <Icon className="h-5 w-5" />
                </span>
                <span className="font-bold leading-tight">{category.title}</span>
              </button>
            );
          })}
        </div>

        <div className="mt-8 rounded-[2rem] border-4 border-ink bg-card p-8 shadow-hard md:p-10">
          <div className="mb-8 flex items-center gap-4 border-b-2 border-dashed border-ink/20 pb-6">
            <span className={`grid h-14 w-14 place-items-center rounded-2xl border-2 border-ink ${current.color}`}>
              <current.icon className="h-7 w-7" />
            </span>
            <h2 className="text-3xl">{current.title}</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {current.sections.map((section) => (
              <div key={section.subtitle} className="rounded-2xl border-2 border-ink/10 bg-sand p-6">
                <h3 className="mb-4 flex items-center gap-2 text-lg font-bold">
                  <Sparkles className="h-5 w-5 text-primary" />
                  {section.subtitle}
                </h3>
                <ul className="space-y-3">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm font-medium text-foreground/80">
                      <span className="mt-0.5 grid h-5 w-5 flex-shrink-0 place-items-center rounded-full border-2 border-ink bg-lime text-ink">
                        <Check className="h-3 w-3" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-butter py-16">
        <WaveDivider className="absolute left-0 top-0 h-10 w-full rotate-180 text-cream" />
        <Daisy className="absolute right-[8%] top-16 hidden h-16 w-16 text-coral lg:block" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <span className="font-script text-2xl text-terracotta">No lo olvides</span>
            <h2 className="mt-2 text-3xl md:text-4xl">Consejos importantes</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {quickTips.map((tip) => {
              const Icon = tip.icon;
              return (
                <div
                  key={tip.title}
                  className="card-boho flex items-start gap-4 p-6 shadow-hard hover:-translate-y-1 hover:shadow-hard-lg"
                >
                  <span className={`grid h-12 w-12 flex-shrink-0 place-items-center rounded-2xl border-2 border-ink ${tip.color}`}>
                    <Icon className="h-6 w-6" />
                  </span>
                  <div>
                    <p className="font-bold">{tip.title}</p>
                    <p className="mt-1 text-sm text-foreground/70">{tip.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

import { useState } from 'react';
import { Link } from 'react-router';
import { Hero } from '../components/Hero';
import { Blob, Sparkle, Daisy, WaveDivider } from '../components/Decor';
import { Reveal } from '../components/Reveal';
import { HERO_IMAGES } from '../constants/images';
import { Rabbit, Salad, Stethoscope, MessageCircle, HelpCircle, ChevronDown, ArrowRight } from 'lucide-react';

const faqCategories = [
  {
    category: 'Básicos y cuidado general',
    icon: Rabbit,
    color: 'bg-primary text-primary-foreground',
    questions: [
      {
        question: '¿Cuánto vive un conejo?',
        answer:
          'La esperanza de vida de un conejo doméstico bien cuidado es de 8 a 12 años, aunque algunas razas pueden vivir hasta 14. Influyen la raza, la dieta, el ejercicio, la genética y la atención veterinaria preventiva. Los conejos de interior tienden a vivir más que los de exterior debido a menos riesgos.'
      },
      {
        question: '¿Los conejos pueden vivir solos o necesitan compañía?',
        answer:
          'Los conejos son animales sociales. Pueden vivir solos si reciben mucha atención humana diaria (mínimo 3-4 horas), pero muchos prosperan mejor con un compañero conejo, preferiblemente del sexo opuesto y ambos esterilizados. La introducción debe ser gradual, supervisada y en terreno neutral.'
      },
      {
        question: '¿Con qué frecuencia debo limpiar la jaula?',
        answer:
          'La limpieza parcial debe hacerse 2-3 veces por semana: retirar heces, heno sucio y cambiar la caja de arena. La limpieza profunda completa debe realizarse semanalmente, desinfectando todos los accesorios con productos seguros para mascotas y reemplazando el sustrato. Un ambiente limpio previene enfermedades.'
      }
    ]
  },
  {
    category: 'Alimentación',
    icon: Salad,
    color: 'bg-sage text-cream',
    questions: [
      {
        question: '¿Qué cantidad de comida debo dar a mi conejo?',
        answer:
          'Heno disponible 24/7. Verduras frescas: 1 taza por kg de peso corporal al día, dividida en 2 comidas. Pellets: 1/4 de taza por cada 2.5 kg para adultos (menos si tiene sobrepeso). Frutas como premio ocasional, máximo 1-2 cucharadas al día por su alto contenido de azúcar.'
      },
      {
        question: '¿Puedo darle zanahorias todos los días?',
        answer:
          'Aunque asociamos a los conejos con las zanahorias, estas tienen mucho azúcar y deben darse con moderación. Una pequeña rodaja 2-3 veces por semana es suficiente como premio. Las hojas de zanahoria son más saludables y pueden ofrecerse más a menudo. Prioriza verduras de hoja verde oscuro para el consumo diario.'
      },
      {
        question: '¿Qué hago si mi conejo deja de comer?',
        answer:
          'Un conejo que no come durante más de 12 horas es una emergencia veterinaria. La estasis gastrointestinal puede ser mortal en 24-48 horas. Mientras contactas al veterinario, mantén al conejo cálido, ofrece sus vegetales favoritos y heno fresco, asegura acceso a agua y, si el veterinario lo indica, administra papilla con jeringa. No esperes a ver si mejora por su cuenta.'
      }
    ]
  },
  {
    category: 'Salud y veterinaria',
    icon: Stethoscope,
    color: 'bg-teal text-cream',
    questions: [
      {
        question: '¿Necesitan vacunas los conejos?',
        answer:
          'Dependiendo de tu ubicación, pueden necesitar vacunas contra la mixomatosis y la enfermedad hemorrágica viral (RHD/RHDV). En Europa y algunas partes de América son esenciales. Consulta con un veterinario especializado en exóticos de tu zona para conocer las vacunas necesarias, el calendario y si hay brotes activos.'
      },
      {
        question: '¿Debo esterilizar o castrar a mi conejo?',
        answer:
          'Sí, es muy recomendable. Beneficios: previene el cáncer reproductivo (muy común en hembras), reduce la agresividad y el marcaje territorial, facilita el entrenamiento de la caja de arena y permite la convivencia con otros conejos. La cirugía es segura con un veterinario experimentado. Edad recomendada: 4-6 meses.'
      },
      {
        question: '¿Qué temperatura es segura para los conejos?',
        answer:
          'Los conejos son muy sensibles al calor. Ideal: 15-21 °C. Tolerable: 10-24 °C. Peligroso: más de 26 °C (riesgo de insolación, una emergencia mortal). Toleran mejor el frío moderado que el calor. En verano ofrece sombra, ventilación, agua fresca y superficies frías; nunca los dejes en un auto. En invierno protégelos de corrientes y humedad.'
      }
    ]
  },
  {
    category: 'Comportamiento',
    icon: MessageCircle,
    color: 'bg-berry text-cream',
    questions: [
      {
        question: '¿Por qué mi conejo muerde?',
        answer:
          'Los conejos muerden por varias razones: se sienten amenazados, territorialidad (especialmente si no están esterilizados), dolor, frustración por estar encerrados mucho tiempo o búsqueda de atención. Observa el contexto y su lenguaje corporal. Nunca lo castigues físicamente: identifica la causa, socializa, esteriliza, ofrece más ejercicio y descarta problemas de salud.'
      },
      {
        question: '¿Los conejos pueden aprender trucos?',
        answer:
          'Por supuesto. Los conejos son muy inteligentes: pueden aprender a usar la caja de arena, acudir a tu llamada, dar la pata, saltar obstáculos, jugar a buscar o pararse en dos patas. Usa refuerzo positivo, paciencia y sesiones cortas (5-10 min) con recompensas pequeñas. Cada conejo aprende a su ritmo; evita la frustración.'
      },
      {
        question: '¿Qué significa cuando golpea el suelo con las patas traseras?',
        answer:
          'El golpe fuerte con las patas traseras es un comportamiento natural de comunicación. Puede significar que detectó un peligro, que alerta a otros, miedo o estrés, frustración o una advertencia para que lo dejen solo. Si lo hace con frecuencia, identifica la fuente de estrés: ruidos fuertes, otros animales, cambios en el ambiente o falta de espacio.'
      }
    ]
  },
  {
    category: 'Otros',
    icon: HelpCircle,
    color: 'bg-coral text-ink',
    questions: [
      {
        question: '¿Puedo bañar a mi conejo?',
        answer:
          'Generalmente no es necesario ni recomendable. Los conejos se acicalan solos con esmero, y el baño les causa estrés extremo y puede provocar hipotermia o shock. Como excepción, lava zonas concretas si hay diarrea severa, orina quemando las patas o suciedad extrema: usa agua tibia, solo la zona afectada y champú seguro para conejos, y seca por completo. Mejor prevenir que limpiar.'
      },
      {
        question: '¿Es mejor tener un conejo en interior o exterior?',
        answer:
          'El interior suele ser mejor y más seguro: mayor esperanza de vida, protección frente a depredadores, clima extremo y parásitos, más interacción social, ambiente controlado y detección temprana de problemas. En exterior necesita un refugio robusto a prueba de depredadores, con aislamiento térmico y supervisión constante. Si está fuera, llévalo dentro en climas extremos.'
      },
      {
        question: '¿Cómo sé si mi conejo es macho o hembra?',
        answer:
          'En conejos adultos (más de 6 meses), los machos tienen testículos visibles a los lados del área genital. Para determinarlo a cualquier edad, examínalo con cuidado boca arriba y presiona suavemente cerca del área genital: los machos presentan una abertura circular alejada del ano; las hembras, una ranura en forma de "V" más cercana al ano. Si tienes dudas, un veterinario lo confirmará fácilmente.'
      }
    ]
  }
];

export default function FAQPage() {
  const [open, setOpen] = useState('0-0');

  const toggle = (key) => setOpen((prev) => (prev === key ? null : key));

  return (
    <div className="min-h-screen">
      <Hero
        image={HERO_IMAGES.faq}
        tint="bg-butter"
        eyebrow="Resolvemos tus dudas"
        title="Preguntas"
        highlight="frecuentes"
        highlightColor="text-primary"
        description="Encuentra respuestas a las dudas más comunes sobre el cuidado de conejos."
        badge="¡Pregunta!"
        badgeColor="bg-mustard text-accent-foreground"
      />

      <section className="relative mx-auto max-w-4xl overflow-hidden px-4 py-16 sm:px-6 lg:px-8">
        <Blob className="absolute -left-24 top-24 h-64 w-64 text-mint" />
        <div className="relative space-y-14">
          {faqCategories.map((cat, catIndex) => {
            const Icon = cat.icon;
            return (
              <Reveal key={cat.category} variant="up">
                <div className="mb-6 flex items-center gap-4">
                  <span className={`grid h-14 w-14 flex-shrink-0 place-items-center rounded-2xl border-2 border-ink shadow-hard ${cat.color}`}>
                    <Icon className="h-7 w-7" />
                  </span>
                  <h2 className="text-2xl">{cat.category}</h2>
                </div>

                <div className="overflow-hidden rounded-[2rem] border-4 border-ink bg-card shadow-hard">
                  {cat.questions.map((q, qIndex) => {
                    const key = `${catIndex}-${qIndex}`;
                    const isOpen = open === key;
                    return (
                      <div key={key} className="border-b-2 border-dashed border-ink/15 last:border-b-0">
                        <button
                          onClick={() => toggle(key)}
                          aria-expanded={isOpen}
                          className={`flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors ${
                            isOpen ? 'bg-sand' : 'hover:bg-sand/60'
                          }`}
                        >
                          <span className={`font-bold ${isOpen ? 'text-primary' : 'text-ink'}`}>
                            {q.question}
                          </span>
                          <span
                            className={`grid h-8 w-8 flex-shrink-0 place-items-center rounded-full border-2 border-ink transition-all ${
                              isOpen ? 'rotate-180 bg-primary text-primary-foreground' : 'bg-mustard text-ink'
                            }`}
                          >
                            <ChevronDown className="h-4 w-4" />
                          </span>
                        </button>
                        <div
                          className={`grid transition-all duration-300 ease-out ${
                            isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                          }`}
                        >
                          <div className="overflow-hidden">
                            <p className="px-6 pb-5 leading-relaxed text-foreground/75">{q.answer}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden bg-terracotta px-4 py-16 text-cream sm:px-6 lg:px-8">
        <WaveDivider className="absolute left-0 top-0 h-10 w-full rotate-180 text-cream" />
        <Daisy className="absolute right-[10%] top-12 hidden h-16 w-16 text-mustard lg:block" />
        <Sparkle className="absolute left-[8%] bottom-10 h-10 w-10 text-cream" />
        <Reveal variant="zoom" className="relative mx-auto max-w-3xl text-center">
          <span className="mx-auto grid h-16 w-16 place-items-center rounded-2xl border-2 border-ink bg-cream text-terracotta shadow-hard">
            <MessageCircle className="h-8 w-8" />
          </span>
          <h2 className="mt-6 text-3xl md:text-4xl">¿No encuentras tu respuesta?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-cream/90">
            Cada conejo es único. Si tienes dudas específicas sobre la salud o el comportamiento de
            tu conejo, consulta siempre con un veterinario especializado en animales exóticos.
          </p>
          <Link
            to="/salud"
            className="mt-8 inline-flex items-center gap-2 rounded-full border-2 border-ink bg-mustard px-8 py-4 font-bold text-accent-foreground shadow-[5px_5px_0_0_#3b2a1f] transition-all hover:-translate-y-0.5"
          >
            Ver guía de salud
            <ArrowRight className="h-5 w-5" />
          </Link>
        </Reveal>
      </section>
    </div>
  );
}

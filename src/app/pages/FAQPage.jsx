import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { MessageCircle, HelpCircle } from "lucide-react";

const faqCategories = [
  {
    category: "Básicos y Cuidado General",
    icon: "🐰",
    questions: [
      {
        question: "¿Cuánto vive un conejo?",
        answer: "La esperanza de vida de un conejo doméstico bien cuidado es de 8 a 12 años, aunque algunas razas pueden vivir hasta 14 años. Los factores que influyen incluyen la raza, dieta, ejercicio, genética y atención veterinaria preventiva. Los conejos de interior tienden a vivir más que los de exterior debido a menos riesgos."
      },
      {
        question: "¿Los conejos pueden vivir solos o necesitan compañía?",
        answer: "Los conejos son animales sociales que disfrutan de la compañía. Pueden vivir solos si reciben mucha atención humana diaria (mínimo 3-4 horas), pero muchos prosperan mejor con un compañero conejo, preferiblemente del sexo opuesto y ambos esterilizados. La introducción debe hacerse gradualmente bajo supervisión, en terreno neutral."
      },
      {
        question: "¿Con qué frecuencia debo limpiar la jaula?",
        answer: "La limpieza parcial debe hacerse 2-3 veces por semana heces, heno sucio y cambiar la caja de arena. La limpieza profunda completa debe realizarse semanalmente, incluyendo desinfección de todos los accesorios con productos seguros para mascotas y reemplazo total del sustrato. Un ambiente limpio previene enfermedades."
      }
    ]
  },
  {
    category: "Alimentación",
    icon: "🥬",
    questions: [
      {
        question: "¿Qué cantidad de comida debo dar a mi conejo?",
        answer: "HENO, disponible 24/7. VERDURAS FRESCAS: 1 taza por kg de peso corporal al día, dividido en 2 comidas. PELLETS: 1/4 taza por cada 2.5kg de peso para adultos (menos para conejos con sobrepeso). FRUTAS como premio ocasional, máximo 1-2 cucharadas al día debido al alto contenido de azúcar."
      },
      {
        question: "¿Puedo darle zanahorias a mi conejo todos los días?",
        answer: "Aunque asociamos a los conejos con zanahorias, estas tienen alto contenido de azúcar y deben darse con moderación. Una pequeña rodaja 2-3 veces por semana es suficiente como premio. Las hojas de zanahoria son más saludables y pueden darse más frecuentemente. Prioriza verduras de hoja verde oscuro para el consumo diario."
      },
      {
        question: "¿Qué hago si mi conejo deja de comer?",
        answer: "Un conejo que no come por más de 12 horas es una EMERGENCIA VETERINARIA. La estasis gastrointestinal puede ser mortal en 24-48 horas. Mientras contactas al veterinario mantén al conejo cálido, ofrece sus vegetales favoritos y heno fresco, asegura acceso a agua, intenta dar papilla con jeringa si el vet lo indica. NO esperes 'a ver si mejora' por su cuenta."
      }
    ]
  },
  {
    category: "Salud y Veterinaria",
    icon: "🏥",
    questions: [
      {
        question: "¿Necesitan vacunas los conejos?",
        answer: "Dependiendo de tu ubicación geográfica, pueden necesitar vacunas contra la mixomatosis y la enfermedad hemorrágica viral (RHD/RHDV). En Europa y algunas partes de América, estas vacunas son esenciales. Consulta con un veterinario especializado en exóticos de tu zona para determinar qué vacunas son necesarias, el calendario recomendado y si hay brotes activos en tu área."
      },
      {
        question: "¿Debo esterilizar/castrar a mi conejo?",
        answer: "SÍ, es altamente recomendable. BENEFICIOS: cáncer reproductivo (muy común en hembras), reduce agresividad y marcaje territorial, facilita el entrenamiento de caja de arena, permite convivencia con otros conejos, elimina comportamientos sexuales no deseados. La cirugía es segura cuando la realiza un veterinario experimentado en exóticos. Edad recomendada: 4-6 meses."
      },
      {
        question: "¿Qué temperatura es segura para los conejos?",
        answer: "Los conejos son MUY sensibles al calor. IDEAL: 15-21°C. TOLERABLE: 10-24°C. PELIGROSO: >26°C (riesgo de insolación, que es una emergencia mortal). Pueden tolerar frío moderado mejor que calor. En verano sombra, ventilación, agua fresca, superficies frescas (baldosas), nunca los dejes en autos. En invierno protégelos de corrientes de aire y humedad."
      }
    ]
  },
  {
    category: "Comportamiento",
    icon: "💭",
    questions: [
      {
        question: "¿Por qué mi conejo muerde?",
        answer: "Los conejos muerden por varias razones (se sienten amenazados), TERRITORIALIDAD (especialmente si no están esterilizados), DOLOR (problema de salud), FRUSTRACIÓN (encerrado mucho tiempo), o SOLICITUD DE ATENCIÓN. Observa el contexto y lenguaje corporal. NUNCA castigues físicamente. Identifica la causa socialización gradual, esteriliza, proporciona más ejercicio, revisa por dolor."
      },
      {
        question: "¿Los conejos pueden aprender trucos?",
        answer: "¡Absolutamente! Los conejos son muy inteligentes. Pueden aprender caja de arena, venir cuando se les llama, dar la pata, saltar obstáculos, jugar a buscar, girar, pararse en dos patas, y más. USA positivo, paciencia, sesiones cortas (5-10 min), recompensas (trozos pequeños de vegetales favoritos o pellets). Evita frustración; cada conejo aprende a su ritmo."
      },
      {
        question: "¿Qué significa cuando mi conejo golpea con las patas traseras?",
        answer: "El golpe fuerte con las patas traseras es un comportamiento natural de comunicación. SIGNIFICADOS (detectó peligro/ruido extraño, alertando a otros), MIEDO o ESTRÉS (se siente amenazado), FRUSTRACIÓN (molesto por algo), o ADVERTENCIA (pide que lo dejen solo). Si lo hace frecuentemente, identifica la fuente de estrés fuertes, otros animales, cambios en el ambiente, falta de espacio."
      }
    ]
  },
  {
    category: "Otros",
    icon: "❓",
    questions: [
      {
        question: "¿Puedo bañar a mi conejo?",
        answer: "Generalmente NO es necesario ni recomendable. Los conejos se acicalan solos meticulosamente y el baño causa estrés extremo, puede causar hipotermia o shock. EXCEPCIÓN lava áreas específicas si hay diarrea severa, orina quemada en patas, o suciedad extrema. USA tibia, solo la zona afectada, champú seguro para conejos, SECA completamente con toalla y secador en frío. Mejor prevenir que limpiar."
      },
      {
        question: "¿Es mejor tener un conejo en interior o exterior?",
        answer: "INTERIOR es generalmente mejor y más seguro. VENTAJAS esperanza de vida, protección de depredadores/clima extremo/parásitos, más interacción social, ambiente controlado, detección temprana de problemas. EXTERIOR refugio robusto a prueba de depredadores, protección contra lluvia/viento/sol, aislamiento térmico, supervisión constante, más riesgos de salud. Si está afuera, tráelo adentro en clima extremo."
      },
      {
        question: "¿Cómo sé si mi conejo es macho o hembra?",
        answer: "En conejos adultos (+6 meses), los machos tienen testículos visibles a los lados del área genital. Para determinación exacta en cualquier edad, examina cuidadosamente al conejo boca arriba, presiona suavemente cerca del área genital. MACHOS genital circular alejada del ano. HEMBRAS en forma de 'V' o ranura, más cercana al ano. Si tienes dudas, un veterinario puede confirmarlo fácilmente."
      }
    ]
  }
];

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <HelpCircle className="w-16 h-16 mx-auto mb-6 opacity-80" />
            <h1 className="text-5xl md:text-6xl mb-6 font-bold">
              Preguntas Frecuentes
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto">
              Encuentra respuestas a las dudas más comunes sobre el cuidado de conejos
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {faqCategories.map((cat, index) => (
            <div key={index} className="space-y-6">
              <div className="flex items-center gap-3 border-b-2 border-primary/20 pb-4">
                <span className="text-3xl">{cat.icon}</span>
                <h2 className="text-2xl font-semibold text-primary">
                  {cat.category}
                </h2>
              </div>

              <Accordion type="single" collapsible className="w-full">
                {cat.questions.map((q, qIndex) => (
                  <AccordionItem key={qIndex} value={`item-${index}-${qIndex}`}>
                    <AccordionTrigger className="text-lg font-medium hover:text-primary transition-colors">
                      {q.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700 leading-relaxed text-base pt-2 pb-4">
                      {q.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-primary/10 rounded-2xl p-8 border-2 border-primary">
          <div className="text-center">
            <h3 className="text-2xl mb-4 text-purple-900 font-bold">¿No encuentras tu respuesta?</h3>
            <p className="text-gray-700 mb-6 text-lg">
              Recuerda que cada conejo es único. Si tienes dudas específicas sobre la salud o comportamiento 
              de tu conejo, siempre consulta con un veterinario especializado en animales exóticos.
            </p>
            <div className="inline-flex items-center gap-2 bg-purple-600 text-white px-8 py-4 rounded-full font-bold shadow-lg">
              <MessageCircle className="w-6 h-6" />
              <span>Consulta a tu Veterinario</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

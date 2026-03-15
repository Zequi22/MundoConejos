import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Home, Scissors, Heart, Thermometer, Users, Activity, Sparkles } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';

const careCategories = [
  {
    id: 'habitat',
    icon: Home,
    title: "Hábitat",
    color: "bg-primary",
    sections: [
      {
        subtitle: "Tamaño del Espacio",
        items: [
          "Mínimo 120cm x 60cm x 60cm para un conejo mediano",
          "La regla: 4 veces el tamaño del conejo cuando está completamente estirado",
          "Espacio adicional para ejercicio fuera de la jaula",
          "Considera un recinto más grande o tiempo libre en habitación"
        ]
      },
      {
        subtitle: "Ubicación",
        items: [
          "Área fresca y bien ventilada",
          "Sin corrientes de aire directas",
          "Protegido de temperaturas extremas (ideal 15-21°C)",
          "Lejos de ruidos fuertes y estrés",
          "Zona tranquila de la casa"
        ]
      },
      {
        subtitle: "Equipamiento Esencial",
        items: [
          "Caja de arena (los conejos pueden entrenarse)",
          "Comedero pesado que no se vuelque",
          "Bebedero o botella de agua",
          "Escondite o refugio para sentirse seguros",
          "Juguetes seguros para masticar"
        ]
      }
    ]
  },
  {
    id: 'hygiene',
    icon: Scissors,
    title: "Higiene y Cepillado",
    color: "bg-secondary",
    sections: [
      {
        subtitle: "Cepillado Regular",
        items: [
          "Semanal para razas de pelo corto",
          "Diario para razas de pelo largo (Angora, etc.)",
          "Más frecuente durante época de muda",
          "Ayuda a prevenir bolas de pelo",
          "Fortalece el vínculo con tu conejo"
        ]
      },
      {
        subtitle: "Cuidado de Uñas",
        items: [
          "Cortar cada 4-6 semanas",
          "Usar cortaúñas especiales para mascotas",
          "Tener cuidado con la vena (parte rosada)",
          "Si no te sientes seguro, llévalo al veterinario",
          "Revisa regularmente el largo"
        ]
      },
      {
        subtitle: "Limpieza del Espacio",
        items: [
          "Limpieza parcial 2-3 veces por semana",
          "Cambio completo de sustrato semanalmente",
          "Desinfectar accesorios regularmente",
          "Limpiar caja de arena diariamente",
          "Mantener zona libre de humedad"
        ]
      }
    ]
  },
  {
    id: 'exercise',
    icon: Activity,
    title: "Ejercicio y Juego",
    color: "bg-accent",
    sections: [
      {
        subtitle: "Tiempo Fuera de la Jaula",
        items: [
          "Mínimo 3-4 horas diarias",
          "Idealmente en sesiones supervisadas",
          "Espacio seguro para explorar",
          "Protege cables eléctricos",
          "Retira plantas tóxicas del área"
        ]
      },
      {
        subtitle: "Enriquecimiento Ambiental",
        items: [
          "Túneles para explorar",
          "Cajas de cartón para masticar",
          "Plataformas a diferentes alturas",
          "Juguetes que puedan mover y lanzar",
          "Cambia los juguetes regularmente para mantener interés"
        ]
      },
      {
        subtitle: "Beneficios del Ejercicio",
        items: [
          "Previene obesidad",
          "Estimula la mente",
          "Reduce comportamientos destructivos",
          "Fortalece músculos y huesos",
          "Mejora la salud digestiva"
        ]
      }
    ]
  },
  {
    id: 'social',
    icon: Users,
    title: "Socialización",
    color: "bg-primary",
    sections: [
      {
        subtitle: "Interacción Humana",
        items: [
          "Dedica tiempo diario de calidad",
          "Habla suavemente a tu conejo",
          "Respeta su espacio personal",
          "Deja que se acerque a ti voluntariamente",
          "Nunca fuerces la interacción"
        ]
      },
      {
        subtitle: "Convivencia con Otros Conejos",
        items: [
          "Los conejos son animales sociales",
          "Mejor en parejas esterilizadas",
          "Macho y hembra funciona mejor",
          "Introducción gradual y supervisada",
          "Nunca los juntes sin presentación previa"
        ]
      },
      {
        subtitle: "Manejo Apropiado",
        items: [
          "Nunca levantes por las orejas",
          "Soporta bien la parte trasera",
          "Mantenlo cerca de tu cuerpo",
          "Si lucha, bájalo suavemente",
          "Algunos conejos prefieren no ser cargados"
        ]
      }
    ]
  }
];

export default function CarePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-accent text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl mb-6">
              Cuidados Esenciales
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto">
              Proporcionar los cuidados adecuados asegura una vida larga y feliz para tu conejo
            </p>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl overflow-hidden shadow-2xl">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1767016627558-3f41c7432e2e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYWJiaXQlMjBodXRjaCUyMGhhYml0YXR8ZW58MXx8fHwxNzczNTgwNTY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Hábitat de conejo"
            className="w-full h-[400px] object-cover"
          />
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Tabs defaultValue="habitat" className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 h-auto gap-2 bg-transparent mb-8">
            {careCategories.map((category) => {
              const Icon = category.icon;
              return (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="flex flex-col items-center gap-2 p-4 data-[state=active]:bg-white data-[state=active]:shadow-lg rounded-xl"
                >
                  <div className={`p-3 rounded-lg ${category.color}`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm font-medium">{category.title}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {careCategories.map((category) => {
            const Icon = category.icon;
            return (
              <TabsContent key={category.id} value={category.id} className="mt-0">
                <Card className="border-0 shadow-xl">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-2">
                      <div className={`p-4 rounded-xl ${category.color}`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-3xl">{category.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-8">
                    {category.sections.map((section, idx) => (
                      <div key={idx} className="bg-white p-6 rounded-xl border">
                        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                          <Sparkles className="w-5 h-5 text-purple-600" />
                          {section.subtitle}
                        </h3>
                        <ul className="space-y-3">
                          {section.items.map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <div className="mt-1 w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                              <span className="text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>
            );
          })}
        </Tabs>
      </section>

      {/* Quick Tips */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-secondary rounded-2xl p-8 text-white shadow-2xl">
          <div className="flex items-start gap-4">
            <div className="p-4 bg-white/20 rounded-xl backdrop-blur-sm">
              <Heart className="w-8 h-8" />
            </div>
            <div className="flex-1">
              <h3 className="text-3xl mb-4">Consejos Importantes</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                  <p className="font-semibold mb-2">🐰 Tiempo de Adaptación</p>
                  <p className="text-sm text-orange-50">Dale tiempo a tu conejo para adaptarse a su nuevo hogar. Puede tardar semanas en sentirse cómodo.</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                  <p className="font-semibold mb-2">🏥 Veterinario Especializado</p>
                  <p className="text-sm text-orange-50">Busca un veterinario con experiencia en animales exóticos, no todos atienden conejos.</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                  <p className="font-semibold mb-2">🌡️ Control de Temperatura</p>
                  <p className="text-sm text-orange-50">Los conejos son sensibles al calor. Mantén el ambiente fresco, especialmente en verano.</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                  <p className="font-semibold mb-2">✂️ Esterilización Recomendada</p>
                  <p className="text-sm text-orange-50">La esterilización previene problemas de salud y mejora el comportamiento.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}




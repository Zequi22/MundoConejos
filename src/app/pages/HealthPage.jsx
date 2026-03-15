import { AlertCircle, Activity, Shield, CheckCircle2, XCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '../components/ui/alert';
import { Badge } from '../components/ui/badge';

const commonIssues = [
  {
    title: "Problemas Dentales",
    symptoms: ["Pérdida de apetito", "Babeo excesivo", "Dificultad para masticar", "Pérdida de peso"],
    prevention: "Proporcionar heno ilimitado y juguetes para masticar ayuda al desgaste natural de los dientes.",
    treatment: "Visita veterinaria para limado dental",
    urgency: "high"
  },
  {
    title: "Estasis Gastrointestinal",
    symptoms: ["Falta de apetito", "Ausencia de heces", "Letargo", "Abdomen hinchado o doloroso"],
    prevention: "Dieta alta en fibra (heno), ejercicio regular y agua fresca constante.",
    treatment: "EMERGENCIA - Atención veterinaria inmediata",
    urgency: "high"
  },
  {
    title: "Ácaros de la Oreja",
    symptoms: ["Sacudir la cabeza", "Rascarse las orejas", "Costras en las orejas", "Cera marrón oscura"],
    prevention: "Mantener limpia la zona de vida y revisiones veterinarias regulares.",
    treatment: "Medicación prescrita por veterinario",
    urgency: "medium"
  },
  {
    title: "Obesidad",
    symptoms: ["Incapacidad de acicalarse", "Letargo", "Dificultad para moverse", "Pliegues de grasa"],
    prevention: "Dieta controlada, evitar exceso de pellets y golosinas, ejercicio diario.",
    treatment: "Ajuste de dieta y aumento de ejercicio",
    urgency: "medium"
  },
  {
    title: "Bolas de Pelo",
    symptoms: ["Disminución del apetito", "Heces más pequeñas", "Letargo"],
    prevention: "Cepillado regular, dieta alta en fibra, mucho heno y agua.",
    treatment: "Aumento de fibra y hidratación, consulta veterinaria",
    urgency: "medium"
  },
  {
    title: "Infecciones Respiratorias",
    symptoms: ["Estornudos", "Secreción nasal", "Respiración dificultosa", "Ojos llorosos"],
    prevention: "Evitar corrientes de aire, mantener limpio el ambiente, buena ventilación.",
    treatment: "Antibióticos prescritos por veterinario",
    urgency: "high"
  }
];

const healthChecklist = {
  daily: [
    "Comportamiento y nivel de actividad normal",
    "Consumo de comida y agua adecuado",
    "Producción de heces regular (50-300 por día)",
    "Estado del pelaje limpio y brillante",
    "Ojos claros sin secreciones",
    "Respiración normal sin ruidos"
  ],
  weekly: [
    "Peso corporal estable",
    "Estado de las uñas",
    "Revisión de dientes frontales",
    "Condición de las patas y almohadillas",
    "Revisa orejas (limpias, sin olor)",
    "Área genital limpia"
  ],
  monthly: [
    "Peso detallado y registro",
    "Revisión completa del pelaje",
    "Verificar que no haya bultos o anomalías",
    "Estado general de salud",
    "Comportamiento y cambios de hábitos"
  ]
};

const emergencySigns = [
  "Sin comer por más de 12 horas",
  "Sin defecar por más de 12 horas",
  "Diarrea severa o sangre en heces",
  "Dificultad para respirar",
  "Convulsiones o espasmos",
  "Cabeza inclinada o pérdida de equilibrio",
  "Sangrado",
  "Letargo extremo o no responde",
  "Temperatura corporal anormal",
  "Rechinar de dientes fuerte (indica dolor)"
];

export default function HealthPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl mb-6">
              Salud y Bienestar
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto">
              Reconocer los signos de salud y enfermedad es fundamental para el cuidado de tu conejo
            </p>
          </div>
        </div>
      </section>

      {/* Alert Section */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Alert className="border-2 border-accent bg-accent/5 shadow-lg">
          <Activity className="h-6 w-6 text-blue-600" />
          <AlertTitle className="text-blue-900 text-xl">Importante sobre los Conejos</AlertTitle>
          <AlertDescription className="text-blue-800 text-base">
            Los conejos son presas por naturaleza y tienden a ocultar signos de enfermedad hasta que es grave. 
            Observa diariamente su comportamiento, apetito y heces. Cualquier cambio significativo requiere 
            atención veterinaria inmediata.
          </AlertDescription>
        </Alert>
      </section>

      {/* Common Issues */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl text-center mb-12">Problemas de Salud Comunes</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {commonIssues.map((issue, index) => (
            <Card key={index} className={`
              border-2 hover:shadow-2xl transition-all
              ${issue.urgency === 'high' 
                ? 'border-destructive bg-destructive/10' 
                : 'border-secondary bg-secondary/10'}
            `}>
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <CardTitle className="text-xl flex-1">{issue.title}</CardTitle>
                  {issue.urgency === 'high' && (
                    <Badge variant="destructive" className="ml-2">Urgente</Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="font-semibold mb-2 text-sm text-gray-700">Síntomas:</p>
                  <ul className="space-y-1">
                    {issue.symptoms.map((symptom, i) => (
                      <li key={i} className="text-sm flex items-start gap-2">
                        <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                        <span>{symptom}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="font-semibold mb-1 text-sm text-gray-700">Prevención:</p>
                  <p className="text-sm text-gray-600">{issue.prevention}</p>
                </div>
                <div>
                  <p className="font-semibold mb-1 text-sm text-gray-700">Tratamiento:</p>
                  <p className="text-sm font-medium text-gray-800">{issue.treatment}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Health Checklist */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl text-center mb-12">Lista de Verificación de Salud</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="border-0 shadow-xl bg-primary/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-800">
                <CheckCircle2 className="w-6 h-6" />
                Revisión Diaria
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {healthChecklist.daily.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <div className="w-2 h-2 rounded-full bg-green-600 flex-shrink-0 mt-1.5"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl bg-secondary/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-800">
                <Activity className="w-6 h-6" />
                Revisión Semanal
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {healthChecklist.weekly.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <div className="w-2 h-2 rounded-full bg-blue-600 flex-shrink-0 mt-1.5"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl bg-accent/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-purple-800">
                <Shield className="w-6 h-6" />
                Revisión Mensual
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {healthChecklist.monthly.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <div className="w-2 h-2 rounded-full bg-purple-600 flex-shrink-0 mt-1.5"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Emergency Signs */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-destructive rounded-2xl p-8 text-white shadow-2xl">
          <div className="flex items-start gap-4">
            <div className="p-4 bg-white/20 rounded-xl backdrop-blur-sm">
              <AlertCircle className="w-10 h-10" />
            </div>
            <div className="flex-1">
              <h3 className="text-3xl mb-2">🚨 Señales de EMERGENCIA</h3>
              <p className="text-red-100 mb-6 text-lg">
                Si observas cualquiera de estos signos, contacta a un veterinario INMEDIATAMENTE:
              </p>
              <div className="grid md:grid-cols-2 gap-3">
                {emergencySigns.map((sign, i) => (
                  <div key={i} className="bg-white/10 backdrop-blur-sm p-3 rounded-lg flex items-start gap-2">
                    <XCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{sign}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 bg-white/20 backdrop-blur-sm p-4 rounded-xl">
                <p className="font-semibold text-lg">⏰ Tiempo es Vida</p>
                <p className="text-red-50 mt-2">
                  No esperes "a ver si mejora". Los conejos pueden deteriorarse muy rápidamente. 
                  Ten siempre a mano el número de un veterinario de emergencias especializado en exóticos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}



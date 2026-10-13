import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Hero } from '../components/Hero';
import { Blob, Sparkle, WaveDivider } from '../components/Decor';
import { Reveal } from '../components/Reveal';
import { HERO_IMAGES, IMAGES } from '../constants/images';
import {
  AlertCircle,
  AlertTriangle,
  Activity,
  Shield,
  CheckCircle2,
  Clock,
  Stethoscope
} from 'lucide-react';

const commonIssues = [
  {
    title: 'Problemas dentales',
    symptoms: ['Pérdida de apetito', 'Babeo excesivo', 'Dificultad para masticar', 'Pérdida de peso'],
    prevention: 'Proporcionar heno ilimitado y juguetes para masticar ayuda al desgaste natural de los dientes.',
    treatment: 'Visita veterinaria para limado dental',
    urgency: 'high'
  },
  {
    title: 'Estasis gastrointestinal',
    symptoms: ['Falta de apetito', 'Ausencia de heces', 'Letargo', 'Abdomen hinchado o doloroso'],
    prevention: 'Dieta alta en fibra (heno), ejercicio regular y agua fresca constante.',
    treatment: 'EMERGENCIA · Atención veterinaria inmediata',
    urgency: 'high'
  },
  {
    title: 'Ácaros de la oreja',
    symptoms: ['Sacudir la cabeza', 'Rascarse las orejas', 'Costras en las orejas', 'Cera marrón oscura'],
    prevention: 'Mantener limpia la zona de vida y revisiones veterinarias regulares.',
    treatment: 'Medicación prescrita por veterinario',
    urgency: 'medium'
  },
  {
    title: 'Obesidad',
    symptoms: ['Incapacidad de acicalarse', 'Letargo', 'Dificultad para moverse', 'Pliegues de grasa'],
    prevention: 'Dieta controlada, evitar exceso de pellets y golosinas, ejercicio diario.',
    treatment: 'Ajuste de dieta y aumento de ejercicio',
    urgency: 'medium'
  },
  {
    title: 'Bolas de pelo',
    symptoms: ['Disminución del apetito', 'Heces más pequeñas', 'Letargo'],
    prevention: 'Cepillado regular, dieta alta en fibra, mucho heno y agua.',
    treatment: 'Aumento de fibra e hidratación, consulta veterinaria',
    urgency: 'medium'
  },
  {
    title: 'Infecciones respiratorias',
    symptoms: ['Estornudos', 'Secreción nasal', 'Respiración dificultosa', 'Ojos llorosos'],
    prevention: 'Evitar corrientes de aire, mantener limpio el ambiente y buena ventilación.',
    treatment: 'Antibióticos prescritos por veterinario',
    urgency: 'high'
  }
];

const healthChecklist = {
  daily: ['Comportamiento y actividad normal', 'Consumo de comida y agua adecuado', 'Producción de heces regular (50-300/día)', 'Pelaje limpio y brillante', 'Ojos claros sin secreciones', 'Respiración normal sin ruidos'],
  weekly: ['Peso corporal estable', 'Estado de las uñas', 'Revisión de dientes frontales', 'Condición de patas y almohadillas', 'Orejas limpias, sin olor', 'Área genital limpia'],
  monthly: ['Peso detallado y registro', 'Revisión completa del pelaje', 'Verificar bultos o anomalías', 'Estado general de salud', 'Cambios de hábitos']
};

const emergencySigns = [
  'Sin comer por más de 12 horas',
  'Sin defecar por más de 12 horas',
  'Diarrea severa o sangre en heces',
  'Dificultad para respirar',
  'Convulsiones o espasmos',
  'Cabeza inclinada o pérdida de equilibrio',
  'Sangrado',
  'Letargo extremo o no responde',
  'Temperatura corporal anormal',
  'Rechinar de dientes fuerte (indica dolor)'
];

const checklistCards = [
  { key: 'daily', title: 'Revisión diaria', icon: CheckCircle2, color: 'bg-primary text-primary-foreground' },
  { key: 'weekly', title: 'Revisión semanal', icon: Activity, color: 'bg-teal text-cream' },
  { key: 'monthly', title: 'Revisión mensual', icon: Shield, color: 'bg-sage text-cream' }
];

export default function HealthPage() {
  return (
    <div className="min-h-screen">
      <Hero
        image={HERO_IMAGES.health}
        tint="bg-cloud"
        eyebrow="Prevención y detección"
        title="Salud y"
        highlight="bienestar"
        highlightColor="text-teal"
        description="Reconocer los signos de salud y enfermedad es fundamental para el cuidado de tu conejo."
        badge="¡Obsérvalo!"
        badgeColor="bg-teal text-cream"
      />

      <section className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <Reveal variant="zoom" className="relative mx-auto max-w-4xl">
          <Blob className="absolute -inset-6 h-auto w-auto text-teal/15" />
          <div className="relative overflow-hidden rounded-[2.5rem] border-4 border-ink shadow-hard-lg">
            <ImageWithFallback
              src={IMAGES.rabbit}
              alt="Conejo saludable"
              className="h-[320px] w-full object-cover md:h-[420px]"
            />
          </div>
        </Reveal>

        <Reveal variant="up" className="mt-12 flex flex-col gap-4 rounded-[2rem] border-4 border-ink bg-butter p-6 shadow-hard md:flex-row md:items-start md:p-8">
          <span className="grid h-12 w-12 flex-shrink-0 place-items-center rounded-2xl border-2 border-ink bg-mustard text-ink">
            <Activity className="h-6 w-6" />
          </span>
          <div>
            <h2 className="text-xl text-ink">Importante sobre los conejos</h2>
            <p className="mt-2 font-medium text-ink/75">
              Los conejos son presas por naturaleza y tienden a ocultar signos de enfermedad hasta
              que es grave. Observa a diario su comportamiento, apetito y heces. Cualquier cambio
              significativo requiere atención veterinaria inmediata.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="relative mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <Reveal className="mx-auto mb-12 max-w-2xl text-center">
          <span className="font-script text-2xl text-primary">Señales de alerta</span>
          <h2 className="mt-2 text-3xl md:text-4xl">Problemas de salud comunes</h2>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {commonIssues.map((issue, index) => {
            const high = issue.urgency === 'high';
            return (
              <Reveal
                key={issue.title}
                variant="up"
                delay={(index % 3) * 0.1}
                className="h-full"
              >
              <article
                className="card-boho flex h-full flex-col overflow-hidden shadow-hard hover:-translate-y-1.5 hover:shadow-hard-lg"
              >
                <div className={`h-2 ${high ? 'bg-destructive' : 'bg-coral'}`} />
                <div className="flex flex-1 flex-col p-7">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-xl leading-tight">{issue.title}</h3>
                    {high && (
                      <span className="flex-shrink-0 rounded-full border-2 border-ink bg-destructive px-3 py-1 text-xs font-bold text-cream">
                        Urgente
                      </span>
                    )}
                  </div>

                  <p className="mt-5 text-xs font-bold uppercase tracking-wide text-muted-foreground">
                    Síntomas
                  </p>
                  <ul className="mt-2 space-y-1.5">
                    {issue.symptoms.map((symptom) => (
                      <li key={symptom} className="flex items-start gap-2 text-sm font-medium text-foreground/80">
                        <AlertCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-destructive" />
                        {symptom}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 space-y-4 border-t-2 border-dashed border-ink/15 pt-5">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wide text-accent-foreground/70">Prevención</p>
                      <p className="mt-1 text-sm text-foreground/80">{issue.prevention}</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wide text-accent-foreground/70">Tratamiento</p>
                      <p className={`mt-1 text-sm font-bold ${high ? 'text-destructive' : 'text-ink'}`}>
                        {issue.treatment}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden bg-mint py-16">
        <WaveDivider className="absolute left-0 top-0 h-10 w-full rotate-180 text-cream" />
        <WaveDivider className="absolute bottom-0 left-0 h-10 w-full text-cream" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto mb-12 max-w-2xl text-center">
            <span className="font-script text-2xl text-sage">Rutina preventiva</span>
            <h2 className="mt-2 text-3xl md:text-4xl">Lista de verificación de salud</h2>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-3">
            {checklistCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <Reveal key={card.key} variant="up" delay={index * 0.12} className="h-full">
                <div className="card-boho h-full p-7 shadow-hard hover:-translate-y-1.5 hover:shadow-hard-lg">
                  <div className="mb-5 flex items-center gap-3">
                    <span className={`grid h-12 w-12 place-items-center rounded-2xl border-2 border-ink ${card.color}`}>
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="text-lg font-bold">{card.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {healthChecklist[card.key].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm font-medium text-foreground/80">
                        <span className="mt-0.5 grid h-5 w-5 flex-shrink-0 place-items-center rounded-full border-2 border-ink bg-lime text-ink">
                          <CheckCircle2 className="h-3 w-3" />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative mt-20 overflow-hidden bg-destructive px-4 py-20 text-cream sm:px-6 md:mt-28 lg:px-8">
        <Blob className="absolute -right-20 -top-12 h-72 w-72 text-ink/15" />
        <Sparkle className="absolute left-[10%] bottom-12 h-10 w-10 text-mustard" />
        <Reveal variant="up" className="relative mx-auto max-w-6xl">
          <div className="flex flex-col gap-6 md:flex-row md:items-start">
            <span className="grid h-16 w-16 flex-shrink-0 place-items-center rounded-2xl border-2 border-cream/40 bg-cream text-destructive shadow-[5px_5px_0_0_#3b2a1f]">
              <AlertTriangle className="h-8 w-8" />
            </span>
            <div className="flex-1">
              <h2 className="text-3xl">Señales de emergencia</h2>
              <p className="mt-3 max-w-2xl text-cream/85">
                Si observas cualquiera de estos signos, contacta a un veterinario especializado
                inmediatamente:
              </p>

              <div className="mt-6 grid gap-3 md:grid-cols-2">
                {emergencySigns.map((sign) => (
                  <div
                    key={sign}
                    className="flex items-start gap-2 rounded-xl border-2 border-cream/25 bg-ink/20 p-3 text-sm font-medium"
                  >
                    <AlertCircle className="mt-0.5 h-4 w-4 flex-shrink-0" />
                    {sign}
                  </div>
                ))}
              </div>

              <div className="mt-6 flex items-start gap-4 rounded-2xl border-2 border-cream/25 bg-ink/20 p-5">
                <Clock className="mt-0.5 h-6 w-6 flex-shrink-0" />
                <div>
                  <p className="font-bold">El tiempo es clave</p>
                  <p className="mt-1 text-sm text-cream/85">
                    No esperes a ver si mejora. Los conejos pueden deteriorarse muy rápido. Ten
                    siempre a mano el número de un veterinario de urgencias especializado en
                    exóticos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}

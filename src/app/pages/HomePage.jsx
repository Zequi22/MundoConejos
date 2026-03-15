import { Link } from 'react-router';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { ArrowRight, Heart, Shield, Sparkles, BookOpen, Stethoscope, Apple } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';

const features = [
  {
    icon: BookOpen,
    title: 'Razas',
    description: 'Descubre las diferentes razas de conejos y sus características únicas',
    link: '/razas',
    gradient: 'bg-primary'
  },
  {
    icon: Apple,
    title: 'Alimentación',
    description: 'Guía completa sobre qué comer y qué evitar para mantener a tu conejo saludable',
    link: '/alimentacion',
    gradient: 'bg-secondary'
  },
  {
    icon: Heart,
    title: 'Cuidados',
    description: 'Todo sobre el habitat, higiene, socialización y ejercicio de tu conejo',
    link: '/cuidados',
    gradient: 'bg-accent'
  },
  {
    icon: Stethoscope,
    title: 'Salud',
    description: 'Aprende a identificar signos de salud y problemas comunes',
    link: '/salud',
    gradient: 'bg-primary'
  }
];

const stats = [
  { value: '8-12', label: 'Años de vida' },
  { value: '300+', label: 'Razas diferentes' },
  { value: '24/7', label: 'Heno disponible' },
  { value: '3-4h', label: 'Ejercicio diario' }
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-primary/90">
          <div className="absolute inset-0 opacity-20">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1747184046952-8890127c598a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXRlJTIwcmFiYml0JTIwYnVubnl8ZW58MXx8fHwxNzczNDk2MjQ0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Conejo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center text-white">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm">Guía Completa de Cuidado</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
              Todo Sobre
              <span className="block text-accent">
                Conejos
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">
              La guía definitiva para cuidar, alimentar y mantener feliz a tu conejo mascota
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/razas"
                className="inline-flex items-center gap-2 bg-white text-purple-600 px-8 py-4 rounded-full hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
              >
                Explorar Razas
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/cuidados"
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full hover:bg-white/20 transition-all border-2 border-white/30"
              >
                Guía de Cuidados
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm-6 lg-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                 <div className="text-4xl md:text-5xl text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4">
              Explora Nuestra Guía
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Todo lo que necesitas saber para ser el mejor cuidador de conejos
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Link key={index} to={feature.link} className="group">
                  <Card className="h-full hover:shadow-2xl transition-all duration-300 border-2 hover:border-purple-200 overflow-hidden">
                    <CardContent className="p-8">
                      <div className={`inline-flex p-4 rounded-2xl ${feature.gradient} mb-6 group-hover:scale-110 transition-transform`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      
                      <h3 className="text-2xl mb-3 group-hover:text-purple-600 transition-colors">
                        {feature.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4">
                        {feature.description}
                      </p>
                      
                      <div className="flex items-center gap-2 text-purple-600 group-hover:translate-x-4 transition-all">
                        <span>Explorar</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <Shield className="w-16 h-16 mx-auto mb-6 opacity-90" />
          <h2 className="text-3xl md:text-4xl mb-4">
            ¿Tienes Preguntas?
          </h2>
          <p className="text-xl mb-8 text-gray-100">
            Consulta nuestra sección de preguntas frecuentes para resolver tus dudas
          </p>
          <Link
            to="/faq"
            className="inline-flex items-center gap-2 bg-white text-purple-600 px-8 py-4 rounded-full hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
          >
            Ver Preguntas Frecuentes
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}




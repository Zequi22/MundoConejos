import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Weight, Clock, Heart, Ruler } from 'lucide-react';

const breeds = [
  {
    name: "Conejo Holandés Enano",
    size: "Pequeño",
    weight: "1-1.5 kg",
    temperament: "Activo y amigable",
    lifespan: "10-12 años",
    description: "Una de las razas más populares como mascota. Son pequeños, adorables y muy sociables. Perfectos para vivir en apartamentos.",
    characteristics: ["Muy sociable", "Fácil de entrenar", "Energético", "Requiere atención diaria"],
    color: "blue"
  },
  {
    name: "Conejo Cabeza de León",
    size: "Mediano",
    weight: "1.5-2 kg",
    temperament: "Tranquilo y dócil",
    lifespan: "8-10 años",
    description: "Caracterizado por su melena de pelo alrededor de la cabeza, similar a la de un león. Son cariñosos y gentiles.",
    characteristics: ["Melena distintiva", "Calmado", "Bueno con niños", "Requiere cepillado regular"],
    color: "orange"
  },
  {
    name: "Conejo Gigante de Flandes",
    size: "Grande",
    weight: "6-10 kg",
    temperament: "Gentil y calmado",
    lifespan: "5-8 años",
    description: "Una de las razas más grandes. A pesar de su tamaño, son conocidos por ser muy tranquilos y dóciles.",
    characteristics: ["Tamaño impresionante", "Muy gentil", "Necesita mucho espacio", "Come más que otras razas"],
    color: "purple"
  },
  {
    name: "Conejo Rex",
    size: "Mediano",
    weight: "3-4.5 kg",
    temperament: "Inteligente y juguetón",
    lifespan: "8-11 años",
    description: "Reconocido por su pelaje aterciopelado único y su personalidad cariñosa. Muy inteligente.",
    characteristics: ["Pelaje suave único", "Muy inteligente", "Juguetón", "Aprende trucos fácilmente"],
    color: "green"
  },
  {
    name: "Conejo Belier o Lop",
    size: "Mediano",
    weight: "2-3 kg",
    temperament: "Dulce y sociable",
    lifespan: "7-10 años",
    description: "Caracterizados por sus orejas caídas. Son muy populares por su aspecto tierno y personalidad afectuosa.",
    characteristics: ["Orejas caídas", "Muy cariñoso", "Excelente mascota", "Necesita limpieza de orejas"],
    color: "pink"
  },
  {
    name: "Conejo Angora",
    size: "Mediano",
    weight: "2-5 kg",
    temperament: "Tranquilo y afectuoso",
    lifespan: "7-12 años",
    description: "Famoso por su largo y suave pelaje que requiere cepillado regular. Hermosos pero necesitan cuidado constante.",
    characteristics: ["Pelaje muy largo", "Requiere cepillado diario", "Muy tranquilo", "Alto mantenimiento"],
    color: "indigo"
  }
];

const colorClasses = {
  blue: 'bg-accent',
  orange: 'bg-secondary',
  purple: 'bg-primary',
  green: 'bg-secondary',
  pink: 'bg-accent',
  indigo: 'bg-primary'
};

export default function BreedsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm-6 lg-8">
          <div className="text-center">
            <h1 className="text-5xl md-6xl mb-6">
              Razas de Conejos
            </h1>
            <p className="text-xl md-2xl text-gray-100 max-w-3xl mx-auto">
              Descubre las características únicas de cada raza y encuentra el compañero perfecto para ti
            </p>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm-6 lg-8">
        <div className="rounded-2xl overflow-hidden shadow-2xl">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1589933767411-38a58367efd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWZmZXJlbnQlMjByYWJiaXQlMjBicmVlZHN8ZW58MXx8fHwxNzczNTgwNTY0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Diferentes razas de conejos"
            className="w-full h-[400px] object-cover"
          />
        </div>
      </section>

      {/* Info Section */}
      <section className="py-8 max-w-7xl mx-auto px-4 sm-6 lg-8">
        <div className="bg-accent/10 rounded-2xl p-8 mb-12">
          <h2 className="text-3xl mb-4 text-center">Más de 300 Razas en el Mundo</h2>
          <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
            Existen más de 300 razas de conejos reconocidas en todo el mundo, cada una con características únicas. 
            Aquí te presentamos algunas de las más populares como mascotas.
          </p>
        </div>
      </section>

      {/* Breeds Grid */}
      <section className="pb-20 max-w-7xl mx-auto px-4 sm-6 lg-8">
        <div className="grid md-cols-2 lg-cols-3 gap-8">
          {breeds.map((breed, index) => (
            <Card key={index} className="hover-2xl transition-all duration-300 border-0 overflow-hidden group">
              <div className={`h-2 ${colorClasses[breed.color]}`}></div>
              
              <CardHeader>
                <CardTitle className="text-2xl group-hover-purple-600 transition-colors">
                  {breed.name}
                </CardTitle>
                <div className="flex flex-wrap gap-2 mt-3">
                  <Badge variant="secondary" className="flex items-center gap-1">
                    <Ruler className="w-3 h-3" />
                    {breed.size}
                  </Badge>
                  <Badge variant="secondary" className="flex items-center gap-1">
                    <Weight className="w-3 h-3" />
                    {breed.weight}
                  </Badge>
                  <Badge variant="secondary" className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {breed.lifespan}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex items-start gap-2">
                  <Heart className="w-5 h-5 text-pink-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Temperamento</p>
                    <p className="font-medium">{breed.temperament}</p>
                  </div>
                </div>
                
                <p className="text-gray-600">
                  {breed.description}
                </p>
                
                <div className="pt-4 border-t">
                  <p className="text-sm font-semibold mb-2 text-gray-700">Características:</p>
                  <ul className="space-y-1">
                    {breed.characteristics.map((char, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className={`text-purple-500 mt-0.5`}>✓</span>
                        <span>{char}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}



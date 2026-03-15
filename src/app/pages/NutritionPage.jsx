import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Check, X, AlertTriangle, Leaf, Droplet } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

const dietComponents = [
  {
    icon: Leaf,
    title: 'Heno',
    percentage: '80%',
    description: 'Base de la alimentación',
    details: 'El heno de timothy o hierba debe estar disponible ilimitadamente. Es esencial para la digestión y el desgaste dental natural.',
    tips: ['Disponible 24/7', 'Debe ser fresco y de calidad', 'Principal fuente de fibra', 'Ayuda al desgaste dental'],
    color: 'green'
  },
  {
    icon: Leaf,
    title: 'Vegetales Frescos',
    percentage: '10-15%',
    description: 'Nutrientes esenciales',
    details: 'Una variedad de verduras frescas diariamente proporciona vitaminas y minerales esenciales.',
    tips: ['1 taza por kg de peso/día', 'Variedad de verduras de hoja', 'Introducir nuevas gradualmente', 'Lavar bien antes'],
    color: 'blue'
  },
  {
    icon: Leaf,
    title: 'Pellets',
    percentage: '5-10%',
    description: 'Complemento nutricional',
    details: 'Pellets de alta calidad específicos para conejos, en cantidades limitadas según el peso del animal.',
    tips: ['1/4 taza por 2.5kg', 'Específicos para conejos', 'Alto contenido de fibra', 'Limitar cantidad'],
    color: 'purple'
  }
];

const goodFoods = [
  { name: "Heno de timothy", category: "Esencial", icon: "🌾" },
  { name: "Col rizada", category: "Verdura", icon: "🥬" },
  { name: "Espinaca", category: "Verdura", icon: "🥬" },
  { name: "Lechuga romana", category: "Verdura", icon: "🥬" },
  { name: "Perejil", category: "Hierba", icon: "🌿" },
  { name: "Cilantro", category: "Hierba", icon: "🌿" },
  { name: "Albahaca", category: "Hierba", icon: "🌿" },
  { name: "Zanahorias (moderación)", category: "Verdura", icon: "🥕" },
  { name: "Brócoli (pequeñas cantidades)", category: "Verdura", icon: "🥦" },
  { name: "Pimientos", category: "Verdura", icon: "🫑" },
  { name: "Pepino", category: "Verdura", icon: "🥒" },
  { name: "Calabacín", category: "Verdura", icon: "🥒" }
];

const badFoods = [
  { name: "Chocolate", danger: "Tóxico", icon: "🍫" },
  { name: "Dulces y azúcares", danger: "Peligroso", icon: "🍬" },
  { name: "Lechuga iceberg", danger: "Bajo valor nutricional", icon: "🥬" },
  { name: "Aguacate", danger: "Tóxico", icon: "🥑" },
  { name: "Cebolla y ajo", danger: "Tóxico", icon: "🧅" },
  { name: "Patatas", danger: "Peligroso", icon: "🥔" },
  { name: "Semillas y nueces", danger: "Peligroso", icon: "🌰" },
  { name: "Pan", danger: "Dañino", icon: "🍞" },
  { name: "Productos lácteos", danger: "No digerible", icon: "🥛" }
];

const colorGradients = {
  green: 'bg-secondary',
  blue: 'bg-accent',
  purple: 'bg-primary'
};

export default function NutritionPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl mb-6">
              Alimentación
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto">
              Una dieta equilibrada es fundamental para la salud y longevidad de tu conejo
            </p>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl overflow-hidden shadow-2xl">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1695827406639-befb948fb513?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYWJiaXQlMjBlYXRpbmclMjB2ZWdldGFibGVzfGVufDF8fHx8MTc3MzUxNTc3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Conejo comiendo vegetales"
            className="w-full h-[400px] object-cover"
          />
        </div>
      </section>

      {/* Diet Components */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl text-center mb-12">Componentes de una Dieta Balanceada</h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {dietComponents.map((component, index) => {
            const Icon = component.icon;
            return (
              <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all overflow-hidden">
                <div className={`h-1.5 ${colorGradients[component.color]}`}></div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-xl ${colorGradients[component.color]}`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-primary">
                      {component.percentage}
                    </div>
                  </div>
                  <CardTitle className="text-2xl">{component.title}</CardTitle>
                  <p className="text-sm text-gray-500">{component.description}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{component.details}</p>
                  <ul className="space-y-2">
                    {component.tips.map((tip, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Foods Grid */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Good Foods */}
          <div className="bg-secondary/10 p-8 rounded-2xl border-2 border-secondary shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-secondary rounded-xl">
                <Check className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl text-green-800">Alimentos Permitidos</h3>
            </div>
            
            <div className="grid gap-3">
              {goodFoods.map((food, index) => (
                <div key={index} className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow flex items-center gap-3">
                  <span className="text-2xl">{food.icon}</span>
                  <div className="flex-1">
                    <p className="font-medium">{food.name}</p>
                    <p className="text-sm text-gray-500">{food.category}</p>
                  </div>
                  <Check className="w-5 h-5 text-green-600" />
                </div>
              ))}
            </div>
          </div>

          {/* Bad Foods */}
          <div className="bg-destructive/10 p-8 rounded-2xl border-2 border-destructive shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-destructive rounded-xl">
                <X className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl text-red-800">Alimentos Prohibidos</h3>
            </div>
            
            <div className="grid gap-3">
              {badFoods.map((food, index) => (
                <div key={index} className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow flex items-center gap-3">
                  <span className="text-2xl">{food.icon}</span>
                  <div className="flex-1">
                    <p className="font-medium">{food.name}</p>
                    <p className="text-sm text-red-600">{food.danger}</p>
                  </div>
                  <X className="w-5 h-5 text-red-600" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Water Section */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-accent rounded-2xl p-8 text-white shadow-2xl">
          <div className="flex items-start gap-4">
            <div className="p-4 bg-white/20 rounded-xl backdrop-blur-sm">
              <Droplet className="w-8 h-8" />
            </div>
            <div className="flex-1">
              <h3 className="text-3xl mb-4">Agua Fresca y Limpia</h3>
              <p className="text-lg text-blue-50 mb-4">
                Los conejos deben tener acceso constante a agua fresca y limpia. Es vital para su salud y bienestar.
              </p>
              <ul className="space-y-2 text-blue-50">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>Cambia el agua diariamente</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>Limpia el recipiente regularmente</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>Usa botella o bowl pesado (que no se vuelque)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>Monitorea el consumo diario</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

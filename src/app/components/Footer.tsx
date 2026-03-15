import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl mb-4">Sobre esta Guía</h3>
            <p className="text-gray-400">
              Esta guía proporciona información general sobre el cuidado de conejos. Siempre consulta con un veterinario especializado en animales exóticos para situaciones específicas.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl mb-4">Recursos Importantes</h3>
            <ul className="space-y-2 text-gray-400">
              <li>• Encuentra un veterinario especializado en exóticos</li>
              <li>• Únete a comunidades de cuidadores de conejos</li>
              <li>• Investiga refugios de adopción locales</li>
              <li>• Aprende sobre el lenguaje corporal de los conejos</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl mb-4">Recuerda</h3>
            <ul className="space-y-2 text-gray-400">
              <li>• Los conejos son un compromiso de 8-12 años</li>
              <li>• Requieren atención veterinaria especializada</li>
              <li>• No son mascotas de bajo mantenimiento</li>
              <li>• Considera adoptar en lugar de comprar</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            Hecho con <Heart className="w-4 h-4 text-red-500" /> para los amantes de los conejos
          </p>
          <p className="text-gray-500 text-sm mt-2">
            La información presentada es educativa. Siempre consulta profesionales veterinarios.
          </p>
        </div>
      </div>
    </footer>
  );
}

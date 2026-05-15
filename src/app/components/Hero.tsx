import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="início" className="pt-24 pb-16 bg-gradient-to-br from-purple-50 via-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Ajudando ONGs no resgate animal
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              O LOGPET é uma plataforma dedicada a conectar ONGs de resgate animal com pessoas que desejam ajudar.
              Juntos, salvamos vidas e damos uma segunda chance para quem mais precisa.
            </p>
            <button className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 transition-all duration-300 hover:shadow-lg hover:scale-105">
              Saiba Mais
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1594004844563-536a03a6e532?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxyZXNjdWVkJTIwZG9nJTIwc2hlbHRlcnxlbnwxfHx8fDE3Nzg4NzM0NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Cachorro resgatado"
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 max-w-xs">
              <p className="text-3xl font-bold text-purple-500">+1.500</p>
              <p className="text-gray-600">Animais resgatados em 2024</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

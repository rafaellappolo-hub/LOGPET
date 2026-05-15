import { MapPin, Info } from 'lucide-react';

const rescueAnimals = [
  {
    id: 1,
    name: 'Max',
    image: 'https://images.unsplash.com/photo-1553688738-a278b9f063e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNjdWVkJTIwZG9nJTIwc2hlbHRlcnxlbnwxfHx8fDE3Nzg4NzM0NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    location: 'Jundiaí, SP',
    status: 'Resgatado - Aguardando adoção',
  },
  {
    id: 2,
    name: 'Luna',
    image: 'https://images.unsplash.com/photo-1558618047-f4b511aae74d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXQlMjBhZG9wdGlvbiUyMHNoZWx0ZXJ8ZW58MXx8fHwxNzc4ODczNDcyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    location: 'Jundiaí, SP',
    status: 'Em tratamento veterinário',
  },
  {
    id: 3,
    name: 'Thor',
    image: 'https://images.unsplash.com/photo-1675701917791-debd2d61cc4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxyZXNjdWVkJTIwZG9nJTIwc2hlbHRlcnxlbnwxfHx8fDE3Nzg4NzM0NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    location: 'Jundiaí, SP',
    status: 'Resgatado - Disponível para adoção',
  },
  {
    id: 4,
    name: 'Mel',
    image: 'https://images.unsplash.com/photo-1769634847861-69ee4fa8c343?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxjYXQlMjBhZG9wdGlvbiUyMHNoZWx0ZXJ8ZW58MXx8fHwxNzc4ODczNDcyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    location: 'Jundiaí, SP',
    status: 'Resgatada - Aguardando adoção',
  },
  {
    id: 5,
    name: 'Bob',
    image: 'https://images.unsplash.com/photo-1604606363386-dd3f2357ad87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw5fHxyZXNjdWVkJTIwZG9nJTIwc2hlbHRlcnxlbnwxfHx8fDE3Nzg4NzM0NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    location: 'Jundiaí, SP',
    status: 'Resgate recente - Em observação',
  },
  {
    id: 6,
    name: 'Nina',
    image: 'https://images.unsplash.com/photo-1667699676070-7927180dd91d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxjYXQlMjBhZG9wdGlvbiUyMHNoZWx0ZXJ8ZW58MXx8fHwxNzc4ODczNDcyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    location: 'Jundiaí, SP',
    status: 'Resgatada - Disponível para adoção',
  },
];

export default function Rescues() {
  return (
    <section id="resgates" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Animais Resgatados</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Conheça alguns dos animais que foram resgatados e estão aguardando uma família amorosa
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rescueAnimals.map((animal) => (
            <div
              key={animal.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 group"
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={animal.image}
                  alt={animal.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">{animal.name}</h3>
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="w-4 h-4" />
                  <span>{animal.location}</span>
                </div>
                <p className="text-sm text-gray-500 bg-purple-50 px-3 py-2 rounded-lg">
                  {animal.status}
                </p>
                <button className="w-full bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg">
                  Ver Mais
                  <Info className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

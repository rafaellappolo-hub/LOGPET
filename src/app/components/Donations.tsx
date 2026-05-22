import * as Progress from '@radix-ui/react-progress';
import { Heart, Mail, MapPin, PackageCheck, X } from 'lucide-react';
import { useState } from 'react';

const donationItems = [
  {
    id: 1,
    name: 'Ração',
    current: 750,
    goal: 1000,
    unit: 'kg',
  },
  {
    id: 2,
    name: 'Medicamentos',
    current: 85,
    goal: 100,
    unit: 'itens',
  },
  {
    id: 3,
    name: 'Cobertores',
    current: 120,
    goal: 200,
    unit: 'unidades',
  },
];

export default function Donations() {
  const [showDonationGuide, setShowDonationGuide] = useState(false);

  return (
    <section id="doações" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Campanha de Doações</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ajude-nos a alcançar nossas metas mensais e garantir o bem-estar de todos os animais resgatados
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {donationItems.map((item) => {
            const percentage = (item.current / item.goal) * 100;
            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <Heart className="w-6 h-6 text-purple-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{item.name}</h3>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Arrecadado</span>
                    <span className="font-semibold">
                      {item.current} / {item.goal} {item.unit}
                    </span>
                  </div>

                  <Progress.Root
                    className="relative overflow-hidden bg-gray-200 rounded-full w-full h-4"
                    value={percentage}
                  >
                    <Progress.Indicator
                      className="bg-gradient-to-r from-purple-400 to-purple-500 w-full h-full transition-transform duration-500 ease-out rounded-full"
                      style={{ transform: `translateX(-${100 - percentage}%)` }}
                    />
                  </Progress.Root>

                  <div className="text-center">
                    <p className="text-3xl font-bold text-purple-500">{percentage.toFixed(0)}%</p>
                    <p className="text-sm text-gray-500">da meta alcançada</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <button
            type="button"
            onClick={() => setShowDonationGuide((isVisible) => !isVisible)}
            aria-expanded={showDonationGuide}
            aria-controls="guia-doacao"
            className="bg-purple-500 hover:bg-purple-600 text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            Fazer uma Doação
          </button>
        </div>

        {showDonationGuide && (
          <div
            id="guia-doacao"
            className="mt-10 bg-white rounded-2xl shadow-xl p-6 sm:p-8 max-w-4xl mx-auto"
          >
            <div className="flex items-start justify-between gap-4 mb-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Como fazer uma doação</h3>
                <p className="text-gray-600 mt-2">
                  Escolha uma das formas abaixo e entre em contato para combinarmos a entrega.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setShowDonationGuide(false)}
                aria-label="Fechar orientações de doação"
                className="p-2 rounded-full text-gray-500 hover:text-purple-600 hover:bg-purple-50 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid md:grid-cols-3 gap-5 text-left">
              <div className="border border-purple-100 rounded-xl p-5">
                <PackageCheck className="w-7 h-7 text-purple-500 mb-3" />
                <h4 className="font-bold text-gray-900 mb-2">Separe os itens</h4>
                <p className="text-sm text-gray-600">
                  Ração, medicamentos, cobertores e materiais de limpeza são sempre bem-vindos.
                </p>
              </div>

              <div className="border border-purple-100 rounded-xl p-5">
                <Mail className="w-7 h-7 text-purple-500 mb-3" />
                <h4 className="font-bold text-gray-900 mb-2">Fale com a LOGPET</h4>
                <p className="text-sm text-gray-600">
                  Envie uma mensagem para confirmar o melhor horário de entrega ou retirada.
                </p>
              </div>

              <div className="border border-purple-100 rounded-xl p-5">
                <MapPin className="w-7 h-7 text-purple-500 mb-3" />
                <h4 className="font-bold text-gray-900 mb-2">Combine a entrega</h4>
                <p className="text-sm text-gray-600">
                  Leve sua doação até um ponto de coleta ou solicite orientação para retirada.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

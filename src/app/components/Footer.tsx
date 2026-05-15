import { Heart, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contato" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Logo e Descrição */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Heart className="w-8 h-8 text-purple-400 fill-purple-400" />
              <span className="font-bold text-2xl">LOGPET</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Conectando ONGs de resgate animal com pessoas que querem fazer a diferença.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="font-bold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-3">
              {['Início', 'Resgates', 'Doações', 'Blog', 'Sobre Nós'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="w-4 h-4 text-purple-400" />
                <span>contato@logpet.com.br</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="w-4 h-4 text-purple-400" />
                <span>(11) 98765-4321</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <MapPin className="w-4 h-4 text-purple-400" />
                <span>Jundiaí, SP</span>
              </li>
            </ul>
          </div>

          {/* Redes Sociais */}
          <div>
            <h3 className="font-bold text-lg mb-4">Redes Sociais</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="bg-gray-800 hover:bg-purple-500 p-3 rounded-full transition-colors duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-purple-500 p-3 rounded-full transition-colors duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-purple-500 p-3 rounded-full transition-colors duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
            <p className="text-gray-400 mt-6 text-sm leading-relaxed">
              Siga-nos nas redes sociais e acompanhe histórias inspiradoras de resgate e adoção!
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© 2024 LOGPET. Todos os direitos reservados.</p>
          <p className="text-sm mt-2">
            Feito com <Heart className="w-4 h-4 inline text-red-500 fill-red-500" /> para salvar vidas
          </p>
        </div>
      </div>
    </footer>
  );
}

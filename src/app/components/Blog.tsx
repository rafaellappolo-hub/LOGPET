import { Calendar, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'Como preparar sua casa para receber um pet resgatado',
    excerpt: 'Dicas essenciais para garantir que seu novo amigo se sinta seguro e confortável no novo lar.',
    image: 'https://images.unsplash.com/photo-1583786693544-e352f898888d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxMHx8cmVzY3VlZCUyMGRvZyUyMHNoZWx0ZXJ8ZW58MXx8fHwxNzc4ODczNDcyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    date: '15 de Maio, 2024',
  },
  {
    id: 2,
    title: 'A importância da castração para o controle populacional',
    excerpt: 'Entenda como a castração ajuda a reduzir o número de animais abandonados nas ruas.',
    image: 'https://images.unsplash.com/photo-1583787317796-2bc56f8556e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw4fHxyZXNjdWVkJTIwZG9nJTIwc2hlbHRlcnxlbnwxfHx8fDE3Nzg4NzM0NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    date: '12 de Maio, 2024',
  },
  {
    id: 3,
    title: 'Histórias inspiradoras de adoção bem-sucedida',
    excerpt: 'Conheça famílias que transformaram suas vidas ao adotar um animal resgatado.',
    image: 'https://images.unsplash.com/photo-1775409322777-4f089ed9bd33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxjYXQlMjBhZG9wdGlvbiUyMHNoZWx0ZXJ8ZW58MXx8fHwxNzc4ODczNDcyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    date: '10 de Maio, 2024',
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Últimas Notícias</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Fique por dentro das novidades, dicas e histórias inspiradoras sobre resgate animal
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="relative overflow-hidden h-56">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 leading-tight group-hover:text-purple-500 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{post.excerpt}</p>
                <button className="text-purple-500 font-semibold flex items-center gap-2 hover:gap-3 transition-all duration-300">
                  Ler mais
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import { ArrowRight, Calendar, X } from 'lucide-react';
import { KeyboardEvent, useEffect, useState } from 'react';

type AdoptionStory = {
  name: string;
  image: string;
  text: string;
};

type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  relatedImage?: string;
  relatedImageAlt?: string;
  relatedImageCaption?: string;
  date: string;
  content: string[];
  stories?: AdoptionStory[];
};

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Como preparar sua casa para receber um pet resgatado',
    excerpt: 'Dicas essenciais para garantir que seu novo amigo se sinta seguro e confortável no novo lar.',
    image:
      'https://images.unsplash.com/photo-1583786693544-e352f898888d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxMHx8cmVzY3VlZCUyMGRvZyUyMHNoZWx0ZXJ8ZW58MXx8fHwxNzc4ODczNDcyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    relatedImage:
      'https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
    relatedImageAlt: 'Pet descansando em um ambiente doméstico seguro',
    relatedImageCaption: 'Um espaço calmo, limpo e previsível ajuda o pet resgatado a ganhar confiança no novo lar.',
    date: '15 de Maio, 2024',
    content: [
      'Receber um pet resgatado é um momento especial, mas também exige preparação. Antes da chegada, escolha um canto tranquilo da casa para ser o primeiro espaço de adaptação, com água, comida, caminha e brinquedos simples.',
      'Nos primeiros dias, evite excesso de visitas, barulho e mudanças bruscas de rotina. Animais resgatados podem precisar de tempo para confiar, explorar e entender que estão seguros.',
      'Também é importante retirar objetos perigosos do alcance, proteger fios, separar produtos de limpeza e manter portas e janelas seguras. Com paciência, carinho e rotina, o novo membro da família se adapta com muito mais tranquilidade.',
      'Se houver outros animais na casa, faça a apresentação aos poucos. O ideal é permitir que eles sintam o cheiro um do outro antes do contato direto, sempre com supervisão e sem forçar aproximações.',
      'A rotina também ajuda muito na adaptação. Horários parecidos para alimentação, passeios, brincadeiras e descanso fazem o pet entender melhor o ambiente e se sentir mais seguro a cada dia.',
      'Depois da chegada, marque uma avaliação veterinária para conferir vacinação, vermifugação, controle de pulgas e necessidades específicas. Esse cuidado inicial evita problemas futuros e garante um começo mais saudável.',
      'Outro ponto importante é observar a linguagem corporal do animal. Cauda baixa, orelhas para trás, tentativa de se esconder ou recusa de alimento podem indicar medo. Nesses momentos, o melhor é reduzir estímulos, falar baixo e permitir que ele se aproxime quando estiver pronto.',
      'Brinquedos interativos, tapetes higiênicos bem posicionados e uma caminha em local protegido também fazem diferença. O objetivo não é deixar tudo perfeito no primeiro dia, mas criar um ambiente acolhedor, onde o pet possa entender que não precisa mais disputar comida, abrigo ou atenção.',
      'Com o passar das semanas, pequenos sinais mostram que a adaptação está acontecendo: dormir profundamente, explorar novos cômodos, aceitar carinho, brincar e procurar a família espontaneamente. Cada avanço, mesmo discreto, merece ser respeitado e celebrado.',
    ],
  },
  {
    id: 2,
    title: 'A importância da castração para o controle populacional',
    excerpt: 'Entenda como a castração ajuda a reduzir o número de animais abandonados nas ruas.',
    image:
      'https://images.unsplash.com/photo-1583787317796-2bc56f8556e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw4fHxyZXNjdWVkJTIwZG9nJTIwc2hlbHRlcnxlbnwxfHx8fDE3Nzg4NzM0NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    relatedImage:
      'https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
    relatedImageAlt: 'Cachorro recebendo cuidado veterinário',
    relatedImageCaption: 'A orientação veterinária é essencial antes e depois da castração.',
    date: '12 de Maio, 2024',
    content: [
      'A castração é uma das medidas mais eficazes para reduzir o abandono de cães e gatos. Ela evita ninhadas não planejadas e diminui a quantidade de animais vivendo nas ruas ou aguardando adoção em abrigos.',
      'Além do impacto coletivo, o procedimento também traz benefícios para a saúde do animal, podendo reduzir riscos de algumas doenças e comportamentos ligados ao período reprodutivo.',
      'Antes de castrar, converse com um médico veterinário para avaliar idade, peso, histórico de saúde e cuidados necessários no pós-operatório. Informação correta salva vidas e ajuda a comunidade inteira.',
      'Muitas pessoas ainda têm receio por falta de informação, mas a castração é um procedimento comum quando realizado por profissionais capacitados e com acompanhamento adequado.',
      'No pós-operatório, o animal precisa de repouso, medicação conforme orientação veterinária e atenção ao local da cirurgia. Em poucos dias, muitos pets já retomam a rotina com segurança.',
      'Campanhas comunitárias de castração também são importantes porque ampliam o acesso ao procedimento. Quando tutores, protetores e poder público trabalham juntos, o impacto no controle populacional é muito maior.',
      'O controle populacional não acontece de uma hora para outra, mas cada animal castrado representa a prevenção de várias ninhadas futuras. Esse efeito acumulado reduz a pressão sobre abrigos, lares temporários e protetores independentes.',
      'A castração também precisa caminhar junto com educação. Explicar os benefícios, combater mitos e orientar tutores sobre guarda responsável torna a comunidade mais preparada para cuidar dos animais que já existem.',
      'Quando a sociedade entende que prevenção é um ato de cuidado, o abandono deixa de ser tratado apenas como emergência e passa a ser enfrentado na origem. Esse é um passo fundamental para que mais animais tenham vida digna, segura e saudável.',
    ],
  },
  {
    id: 3,
    title: 'Histórias inspiradoras de adoção bem-sucedida',
    excerpt: 'Conheça famílias que transformaram suas vidas ao adotar um animal resgatado.',
    image:
      'https://images.unsplash.com/photo-1775409322777-4f089ed9bd33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxjYXQlMjBhZG9wdGlvbiUyMHNoZWx0ZXJ8ZW58MXx8fHwxNzc4ODczNDcyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    date: '10 de Maio, 2024',
    content: [
      'Cada adoção começa com uma chance. Conheça três histórias fictícias inspiradas em jornadas reais de acolhimento, paciência e recomeço.',
      'Essas histórias mostram que adotar não é apenas levar um animal para casa. É oferecer tempo, segurança e a chance de uma vida nova para quem já enfrentou abandono.',
    ],
    stories: [
      {
        name: 'Amora',
        image:
          'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900',
        text: 'Amora foi encontrada em uma praça, muito assustada e evitando qualquer aproximação. Depois de ser resgatada, passou algumas semanas em lar temporário até conhecer a família da Ana. No começo, ela se escondia atrás do sofá, mas com rotina, carinho e paciência, começou a pedir colo todas as noites.',
      },
      {
        name: 'Bento',
        image:
          'https://images.unsplash.com/photo-1552053831-71594a27632d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900',
        text: 'Bento chegou à LOGPET com medo de barulhos altos e muita dificuldade para confiar em pessoas. Marcos, seu adotante, decidiu respeitar o tempo dele: montou um cantinho silencioso, ofereceu petiscos sem forçar contato e comemorou cada avanço. Meses depois, Bento já recebe visitas abanando o rabo.',
      },
      {
        name: 'Nina',
        image:
          'https://images.unsplash.com/photo-1574158622682-e40e69881006?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=900',
        text: 'Nina era uma gatinha filhote encontrada em uma caixa perto de um mercado. Pequena e frágil, precisou de cuidados veterinários antes de estar pronta para adoção. Foi acolhida por Dona Célia, que procurava companhia depois que os filhos se mudaram. As duas criaram uma rotina tranquila na janela da sala.',
      },
    ],
  },
];

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    if (!selectedPost) {
      document.body.style.overflow = '';
      return;
    }

    document.body.style.overflow = 'hidden';
    window.scrollTo({ top: 0, behavior: 'smooth' });

    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedPost]);

  const openPost = (post: BlogPost) => {
    setSelectedPost(post);
  };

  const handlePostKeyDown = (event: KeyboardEvent<HTMLElement>, post: BlogPost) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openPost(post);
    }
  };

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
              role="button"
              tabIndex={0}
              onClick={() => openPost(post)}
              onKeyDown={(event) => handlePostKeyDown(event, post)}
              aria-label={`Abrir notícia: ${post.title}`}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group cursor-pointer focus:outline-none focus:ring-4 focus:ring-purple-200"
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
                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    openPost(post);
                  }}
                  className="text-purple-500 font-semibold flex items-center gap-2 hover:gap-3 transition-all duration-300"
                >
                  Ler mais
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {selectedPost && (
        <div
          className="fixed inset-0 z-[100] bg-white overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="noticia-titulo"
        >
          <div className="min-h-screen">
            <div className="relative h-72 sm:h-96 lg:h-[460px]">
              <img
                src={selectedPost.image}
                alt={selectedPost.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/20" />
              <button
                type="button"
                onClick={() => setSelectedPost(null)}
                aria-label="Fechar notícia"
                className="absolute top-5 right-5 bg-white/95 text-gray-900 p-3 rounded-full shadow-lg hover:bg-purple-50 hover:text-purple-600 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="absolute bottom-0 left-0 right-0">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 text-white">
                  <div className="flex items-center gap-2 text-sm mb-4">
                    <Calendar className="w-4 h-4" />
                    <span>{selectedPost.date}</span>
                  </div>
                  <h2 id="noticia-titulo" className="text-3xl sm:text-5xl font-bold leading-tight">
                    {selectedPost.title}
                  </h2>
                </div>
              </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
              <p className="text-xl text-gray-700 leading-relaxed mb-8">{selectedPost.excerpt}</p>

              {selectedPost.relatedImage && (
                <figure className="mb-10 overflow-hidden rounded-2xl border border-purple-100 bg-purple-50 shadow-lg">
                  <img
                    src={selectedPost.relatedImage}
                    alt={selectedPost.relatedImageAlt ?? selectedPost.title}
                    className="w-full max-h-[420px] object-cover"
                  />
                  {selectedPost.relatedImageCaption && (
                    <figcaption className="px-5 py-4 text-sm text-gray-600">
                      {selectedPost.relatedImageCaption}
                    </figcaption>
                  )}
                </figure>
              )}

              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                {selectedPost.content.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              {selectedPost.stories && (
                <div className="grid md:grid-cols-3 gap-6 mt-10">
                  {selectedPost.stories.map((story) => (
                    <article
                      key={story.name}
                      className="bg-white border border-purple-100 rounded-2xl overflow-hidden shadow-lg"
                    >
                      <div className="aspect-[4/3] overflow-hidden">
                        <img
                          src={story.image}
                          alt={`Foto de ${story.name}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-5">
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">{story.name}</h3>
                        <p className="text-base text-gray-700 leading-relaxed">{story.text}</p>
                      </div>
                    </article>
                  ))}
                </div>
              )}

              <div className="mt-12">
                <button
                  type="button"
                  onClick={() => setSelectedPost(null)}
                  className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-3 rounded-full font-semibold transition-colors"
                >
                  Voltar para notícias
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

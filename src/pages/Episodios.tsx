
import Layout from '@/components/Layout';
import { Play, Clock, Calendar, Headphones, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

const Episodios = () => {
  const episodes = [
    {
      id: 1,
      title: "O Futuro da IA no Mercado Brasileiro: Oportunidades e Desafios",
      description: "Neste episódio, exploramos como a inteligência artificial está transformando o cenário empresarial brasileiro.",
      thumbnail: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=300&fit=crop",
      duration: "45 min",
      date: "15 Nov 2024",
      plays: "2.1k"
    },
    {
      id: 2,
      title: "Transformação Digital: Cases de Sucesso no Brasil",
      description: "Analisamos empresas brasileiras que conseguiram se reinventar através da tecnologia.",
      thumbnail: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop",
      duration: "52 min",
      date: "08 Nov 2024",
      plays: "1.8k"
    },
    {
      id: 3,
      title: "Mercado de Criptomoedas: Regulamentação e Oportunidades",
      description: "O cenário atual das criptomoedas no Brasil e as perspectivas de regulamentação.",
      thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
      duration: "38 min",
      date: "01 Nov 2024",
      plays: "2.5k"
    },
    {
      id: 4,
      title: "ESG: Como a Sustentabilidade Move os Negócios",
      description: "A importância dos critérios ESG para empresas e investidores no mercado atual.",
      thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop",
      duration: "41 min",
      date: "25 Out 2024",
      plays: "1.9k"
    },
    {
      id: 5,
      title: "Startups Brasileiras: O Que Esperar para 2025",
      description: "Tendências e projeções para o ecossistema de startups no Brasil.",
      thumbnail: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=300&fit=crop",
      duration: "47 min",
      date: "18 Out 2024",
      plays: "2.2k"
    },
    {
      id: 6,
      title: "E-commerce: Estratégias para o Mercado Digital",
      description: "Como empresas estão se adaptando ao crescimento do comércio eletrônico.",
      thumbnail: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop",
      duration: "43 min",
      date: "11 Out 2024",
      plays: "1.7k"
    }
  ];

  return (
    <Layout>
      <section className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              Todos os Episódios
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
              Explore nossa biblioteca completa de episódios sobre inteligência de mercado e inovação
            </p>
            
            {/* Search */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input 
                placeholder="Buscar episódios..." 
                className="pl-10 bg-dark-700 border-white/20 text-white placeholder:text-gray-500"
              />
            </div>
          </div>

          {/* Episodes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {episodes.map((episode) => (
              <Card key={episode.id} className="glass-effect border-white/10 hover-lift overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative">
                    <img 
                      src={episode.thumbnail}
                      alt={episode.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <Button 
                      size="sm"
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md hover:bg-white/30 border-white/20 text-white rounded-full w-12 h-12 p-0"
                    >
                      <Play className="w-4 h-4 fill-current" />
                    </Button>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {episode.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {episode.duration}
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2">
                      {episode.title}
                    </h3>
                    
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                      {episode.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-400">
                        <Headphones className="w-4 h-4 mr-1" />
                        {episode.plays}
                      </div>
                      <Button size="sm" className="bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-blue text-white">
                        <Play className="w-3 h-3 mr-1" />
                        Ouvir
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
              Carregar Mais Episódios
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Episodios;

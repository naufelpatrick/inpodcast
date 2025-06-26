
import { Play, Clock, Calendar, Headphones } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const LatestEpisode = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Último Episódio
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Não perca o episódio mais recente com insights exclusivos sobre o mercado atual
          </p>
        </div>

        <Card className="max-w-4xl mx-auto glass-effect border-white/10 hover-lift">
          <CardContent className="p-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Imagem do Episódio */}
              <div className="relative overflow-hidden rounded-l-lg">
                <img 
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&h=400&fit=crop"
                  alt="Último episódio"
                  className="w-full h-64 lg:h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-neon-blue text-white px-3 py-1 rounded-full text-sm font-medium">
                    NOVO
                  </span>
                </div>
                <Button 
                  size="lg"
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md hover:bg-white/30 border-white/20 text-white rounded-full w-16 h-16 p-0"
                >
                  <Play className="w-6 h-6 fill-current" />
                </Button>
              </div>

              {/* Conteúdo do Episódio */}
              <div className="p-8 lg:p-12">
                <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    15 Nov 2024
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    45 min
                  </div>
                  <div className="flex items-center">
                    <Headphones className="w-4 h-4 mr-1" />
                    2.1k plays
                  </div>
                </div>

                <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-4 leading-tight">
                  O Futuro da IA no Mercado Brasileiro: Oportunidades e Desafios
                </h3>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  Neste episódio, exploramos como a inteligência artificial está transformando o cenário empresarial brasileiro, as principais oportunidades de investimento e os desafios regulatórios que precisamos superar.
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button className="bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-blue text-white font-semibold">
                    <Play className="w-4 h-4 mr-2" />
                    Ouvir Agora
                  </Button>
                  <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                    Ver Transcrição
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default LatestEpisode;

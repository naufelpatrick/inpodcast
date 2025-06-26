
import { Play, Eye, Share } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const FeaturedReels = () => {
  const reels = [
    {
      id: 1,
      title: "3 Tendências que vão dominar 2025",
      thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=600&fit=crop",
      views: "5.2k",
      duration: "0:45"
    },
    {
      id: 2,
      title: "Como a IA está mudando o varejo",
      thumbnail: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=600&fit=crop",
      views: "3.8k",
      duration: "1:12"
    },
    {
      id: 3,
      title: "Startups brasileiras que impressionam",
      thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=600&fit=crop",
      views: "7.1k",
      duration: "0:58"
    },
    {
      id: 4,
      title: "O futuro do trabalho remoto",
      thumbnail: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=600&fit=crop",
      views: "4.3k",
      duration: "1:05"
    }
  ];

  return (
    <section className="py-20 bg-dark-800/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Destaques em Vídeo
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Os momentos mais impactantes dos nossos episódios em formato de reel
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reels.map((reel) => (
            <Card key={reel.id} className="group bg-dark-700/50 border-white/10 hover-lift overflow-hidden">
              <CardContent className="p-0">
                <div className="relative aspect-[9/16] overflow-hidden">
                  <img 
                    src={reel.thumbnail}
                    alt={reel.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>
                  
                  {/* Play Button */}
                  <Button 
                    size="sm"
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md hover:bg-white/30 border-white/20 text-white rounded-full w-12 h-12 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Play className="w-4 h-4 fill-current" />
                  </Button>
                  
                  {/* Duration */}
                  <div className="absolute top-3 right-3 bg-black/60 text-white text-xs px-2 py-1 rounded">
                    {reel.duration}
                  </div>
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-semibold text-sm mb-2 line-clamp-2">
                      {reel.title}
                    </h3>
                    <div className="flex items-center justify-between text-xs text-gray-300">
                      <div className="flex items-center">
                        <Eye className="w-3 h-3 mr-1" />
                        {reel.views}
                      </div>
                      <Button size="sm" variant="ghost" className="p-1 h-6 w-6 text-gray-300 hover:text-white">
                        <Share className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
            Ver Mais Vídeos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedReels;

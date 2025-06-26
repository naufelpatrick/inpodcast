import Layout from '@/components/Layout';
import { ExternalLink, Star, Users, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Canais = () => {
  const platforms = [
    {
      name: "Spotify",
      description: "A maior plataforma de streaming de música e podcasts do mundo",
      icon: "🎵",
      color: "from-green-400 to-green-600",
      rating: 4.8,
      followers: "12.5k",
      url: "#",
      featured: true
    },
    {
      name: "YouTube",
      description: "Versão em vídeo dos episódios com conteúdo visual exclusivo",
      icon: "📺",
      color: "from-red-500 to-red-700",
      rating: 4.9,
      followers: "8.2k",
      url: "#",
      featured: true
    },
    {
      name: "Apple Podcasts",
      description: "Para usuários iOS, a plataforma oficial da Apple",
      icon: "🎧",
      color: "from-purple-500 to-purple-700",
      rating: 4.7,
      followers: "6.8k",
      url: "#",
      featured: false
    },
    {
      name: "Google Podcasts",
      description: "Integrado com o ecossistema Google para Android",
      icon: "🔊",
      color: "from-blue-500 to-blue-700",
      rating: 4.6,
      followers: "4.3k",
      url: "#",
      featured: false
    },
    {
      name: "Amazon Music",
      description: "Plataforma da Amazon com integração Alexa",
      icon: "🎼",
      color: "from-orange-500 to-orange-700",
      rating: 4.5,
      followers: "3.1k",
      url: "#",
      featured: false
    },
    {
      name: "Deezer",
      description: "Streaming francês com qualidade de áudio superior",
      icon: "🎶",
      color: "from-pink-500 to-pink-700",
      rating: 4.4,
      followers: "2.7k",
      url: "#",
      featured: false
    }
  ];

  const featuredPlatforms = platforms.filter(platform => platform.featured);
  const otherPlatforms = platforms.filter(platform => !platform.featured);

  return (
    <Layout>
      <section className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              Onde Escutar
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
              Escolha sua plataforma favorita e não perca nenhum episódio do InPodcast
            </p>
            
            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center gap-6 text-center">
              <div>
                <div className="text-2xl font-bold gradient-text">37k+</div>
                <div className="text-gray-400 text-sm">Total de Seguidores</div>
              </div>
              <div>
                <div className="text-2xl font-bold gradient-text">4.7</div>
                <div className="text-gray-400 text-sm">Avaliação Média</div>
              </div>
              <div>
                <div className="text-2xl font-bold gradient-text">6</div>
                <div className="text-gray-400 text-sm">Plataformas</div>
              </div>
            </div>
          </div>

          {/* Featured Platforms */}
          <div className="mb-16">
            <h2 className="text-2xl font-display font-bold text-white mb-8 text-center">
              Plataformas Principais
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {featuredPlatforms.map((platform) => (
                <Card key={platform.name} className="glass-effect border-white/10 hover-lift overflow-hidden">
                  <CardContent className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <div className={`w-16 h-16 bg-gradient-to-r ${platform.color} rounded-2xl flex items-center justify-center text-2xl shadow-lg`}>
                          {platform.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">{platform.name}</h3>
                          <div className="flex items-center space-x-4 mt-1">
                            <div className="flex items-center">
                              <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                              <span className="text-gray-300 text-sm">{platform.rating}</span>
                            </div>
                            <div className="flex items-center">
                              <Users className="w-4 h-4 text-gray-400 mr-1" />
                              <span className="text-gray-300 text-sm">{platform.followers}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Badge className="bg-neon-blue text-white">
                        Popular
                      </Badge>
                    </div>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {platform.description}
                    </p>
                    
                    <div className="flex gap-3">
                      <Button 
                        className={`bg-gradient-to-r ${platform.color} hover:scale-105 transition-transform text-white font-semibold flex-1`}
                      >
                        <Play className="w-4 h-4 mr-2" />
                        Escutar Agora
                      </Button>
                      <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Other Platforms */}
          <div>
            <h2 className="text-2xl font-display font-bold text-white mb-8 text-center">
              Outras Plataformas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {otherPlatforms.map((platform) => (
                <Card key={platform.name} className="glass-effect border-white/10 hover-lift">
                  <CardContent className="p-6 text-center">
                    <div className={`w-12 h-12 bg-gradient-to-r ${platform.color} rounded-xl flex items-center justify-center text-xl mb-4 mx-auto shadow-lg`}>
                      {platform.icon}
                    </div>
                    
                    <h3 className="text-white font-semibold mb-2">{platform.name}</h3>
                    
                    <div className="flex items-center justify-center space-x-3 mb-3 text-sm text-gray-400">
                      <div className="flex items-center">
                        <Star className="w-3 h-3 text-yellow-400 fill-current mr-1" />
                        {platform.rating}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-3 h-3 mr-1" />
                        {platform.followers}
                      </div>
                    </div>
                    
                    <p className="text-gray-400 text-xs mb-4 line-clamp-2">
                      {platform.description}
                    </p>
                    
                    <Button 
                      size="sm"
                      className={`bg-gradient-to-r ${platform.color} hover:scale-105 transition-transform text-white font-medium w-full`}
                    >
                      Acessar
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <Card className="max-w-2xl mx-auto glass-effect border-white/10">
              <CardContent className="p-8">
                <h3 className="text-2xl font-display font-bold text-white mb-4">
                  Não encontrou sua plataforma?
                </h3>
                <p className="text-gray-300 mb-6">
                  Deixe uma sugestão! Estamos sempre expandindo nossa presença para chegar até você.
                </p>
                <Button className="bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-blue text-white font-semibold">
                  Sugerir Plataforma
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Canais;

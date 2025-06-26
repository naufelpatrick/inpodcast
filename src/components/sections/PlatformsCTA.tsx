
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const PlatformsCTA = () => {
  const platforms = [
    {
      name: "Spotify",
      icon: "🎵",
      color: "from-green-400 to-green-600",
      url: "#"
    },
    {
      name: "YouTube",
      icon: "📺",
      color: "from-red-500 to-red-700",
      url: "#"
    },
    {
      name: "Apple Podcasts",
      icon: "🎧",
      color: "from-purple-500 to-purple-700",
      url: "#"
    },
    {
      name: "Google Podcasts",
      icon: "🔊",
      color: "from-blue-500 to-blue-700",
      url: "#"
    }
  ];

  return (
    <section className="py-20 bg-dark-800/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Escute onde preferir
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Disponível em todas as principais plataformas de podcast
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
          {platforms.map((platform) => (
            <Card key={platform.name} className="glass-effect border-white/10 hover-lift">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-3">{platform.icon}</div>
                <h3 className="text-white font-semibold mb-3">{platform.name}</h3>
                <Button 
                  size="sm"
                  className={`bg-gradient-to-r ${platform.color} hover:scale-105 transition-transform text-white font-medium w-full`}
                >
                  Escutar
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Card className="max-w-2xl mx-auto glass-effect border-white/10">
            <CardContent className="p-8">
              <h3 className="text-2xl font-display font-bold text-white mb-4">
                Não perca nenhum episódio
              </h3>
              <p className="text-gray-300 mb-6">
                Inscreva-se no seu aplicativo favorito e receba notificações dos novos episódios
              </p>
              <Button size="lg" className="bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-blue text-white font-semibold">
                Ver Todas as Plataformas
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PlatformsCTA;

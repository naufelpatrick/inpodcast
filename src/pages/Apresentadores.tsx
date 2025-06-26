
import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Linkedin, Twitter, Instagram } from 'lucide-react';

const Apresentadores = () => {
  const apresentadores = [
    {
      nome: "Patrick Naufel",
      cargo: "Host & Fundador",
      bio: "Especialista em inteligência de mercado com mais de 10 anos de experiência em transformação digital. Patrick é consultor estratégico e palestrante, ajudando empresas a navegar pelo futuro dos negócios através de insights baseados em dados e tendências de mercado.",
      expertise: ["Inteligência de Mercado", "Transformação Digital", "Estratégia Corporativa", "Inovação"],
      imagem: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      redes: {
        linkedin: "#",
        twitter: "#",
        instagram: "#"
      }
    },
    {
      nome: "Giovani Letti",
      cargo: "Co-Host & Analista",
      bio: "Analista de negócios e especialista em inovação tecnológica. Giovani traz uma perspectiva única sobre startups, investimentos e as últimas tendências do mercado tech, combinando análise técnica com visão estratégica de negócios.",
      expertise: ["Análise de Negócios", "Tecnologia", "Startups", "Investimentos"],
      imagem: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      redes: {
        linkedin: "#",
        twitter: "#",
        instagram: "#"
      }
    }
  ];

  return (
    <Layout>
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-display font-bold gradient-text mb-6">
              Apresentadores
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Conheça as mentes por trás do InPodcast, especialistas apaixonados por 
              inteligência de mercado e inovação que trazem insights valiosos em cada episódio.
            </p>
          </div>

          {/* Apresentadores Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {apresentadores.map((apresentador, index) => (
              <Card key={index} className="glass-effect border-white/10 hover-lift overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative">
                    {/* Imagem */}
                    <div className="relative h-80 overflow-hidden">
                      <img 
                        src={apresentador.imagem} 
                        alt={apresentador.nome}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent"></div>
                    </div>
                    
                    {/* Conteúdo */}
                    <div className="p-8">
                      <div className="mb-4">
                        <h3 className="text-2xl font-display font-bold text-white mb-2">
                          {apresentador.nome}
                        </h3>
                        <p className="text-neon-blue font-medium text-lg">
                          {apresentador.cargo}
                        </p>
                      </div>

                      <p className="text-gray-300 leading-relaxed mb-6">
                        {apresentador.bio}
                      </p>

                      {/* Expertise */}
                      <div className="mb-6">
                        <h4 className="text-white font-semibold mb-3">Especialidades:</h4>
                        <div className="flex flex-wrap gap-2">
                          {apresentador.expertise.map((skill, skillIndex) => (
                            <span 
                              key={skillIndex}
                              className="px-3 py-1 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 border border-neon-blue/30 rounded-full text-sm text-neon-blue"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Redes Sociais */}
                      <div className="flex space-x-4">
                        <a 
                          href={apresentador.redes.linkedin}
                          className="p-3 bg-white/5 hover:bg-neon-blue/20 border border-white/10 hover:border-neon-blue/50 rounded-lg transition-all duration-300 group"
                        >
                          <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-neon-blue" />
                        </a>
                        <a 
                          href={apresentador.redes.twitter}
                          className="p-3 bg-white/5 hover:bg-neon-blue/20 border border-white/10 hover:border-neon-blue/50 rounded-lg transition-all duration-300 group"
                        >
                          <Twitter className="w-5 h-5 text-gray-400 group-hover:text-neon-blue" />
                        </a>
                        <a 
                          href={apresentador.redes.instagram}
                          className="p-3 bg-white/5 hover:bg-neon-purple/20 border border-white/10 hover:border-neon-purple/50 rounded-lg transition-all duration-300 group"
                        >
                          <Instagram className="w-5 h-5 text-gray-400 group-hover:text-neon-purple" />
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="glass-effect border-white/10 rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-display font-bold text-white mb-4">
                Quer conversar com nossos apresentadores?
              </h3>
              <p className="text-gray-300 mb-6">
                Entre em contato para parcerias, entrevistas ou colaborações. 
                Estamos sempre abertos a novas oportunidades e conversas interessantes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:contato@inpodcast.com" 
                  className="px-6 py-3 bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-blue text-white font-medium rounded-lg transition-all duration-300"
                >
                  Entrar em Contato
                </a>
                <a 
                  href="#" 
                  className="px-6 py-3 border border-white/20 hover:border-neon-blue/50 text-white hover:text-neon-blue font-medium rounded-lg transition-all duration-300"
                >
                  Ver Episódios
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Apresentadores;

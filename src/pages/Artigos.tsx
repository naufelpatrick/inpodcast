
import Layout from '@/components/Layout';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Artigos = () => {
  const articles = [
    {
      id: 1,
      title: "5 Tendências de IA que Vão Dominar o Mercado em 2025",
      excerpt: "A inteligência artificial continua evoluindo rapidamente. Descubra as principais tendências que definirão o futuro dos negócios.",
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=600&h=400&fit=crop",
      category: "Inteligência Artificial",
      date: "18 Nov 2024",
      readTime: "5 min",
      featured: true
    },
    {
      id: 2,
      title: "Como Medir o ROI da Transformação Digital",
      excerpt: "Entenda as métricas essenciais para avaliar o sucesso dos seus projetos de digitalização.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop",
      category: "Transformação Digital",
      date: "15 Nov 2024",
      readTime: "7 min",
      featured: false
    },
    {
      id: 3,
      title: "Entrevista: CEO da TechStart Fala Sobre Inovação",
      excerpt: "Maria Silva compartilha sua visão sobre o futuro da tecnologia no Brasil e os desafios do empreendedorismo.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop",
      category: "Entrevistas",
      date: "12 Nov 2024",
      readTime: "10 min",
      featured: false
    },
    {
      id: 4,
      title: "Análise de Mercado: Setor de Fintechs em Crescimento",
      excerpt: "O mercado de fintechs brasileiro continua aquecido. Veja os números e projeções para o próximo ano.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
      category: "Análise de Mercado",
      date: "08 Nov 2024",
      readTime: "6 min",
      featured: false
    },
    {
      id: 5,
      title: "Sustentabilidade e Tecnologia: O Futuro Verde dos Negócios",
      excerpt: "Como a tecnologia está ajudando empresas a serem mais sustentáveis e rentáveis ao mesmo tempo.",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=600&h=400&fit=crop",
      category: "Sustentabilidade",
      date: "05 Nov 2024",
      readTime: "8 min",
      featured: false
    }
  ];

  const categories = ["Todos", "Inteligência Artificial", "Transformação Digital", "Análise de Mercado", "Entrevistas", "Sustentabilidade"];
  const featuredArticle = articles.find(article => article.featured);
  const regularArticles = articles.filter(article => !article.featured);

  return (
    <Layout>
      <section className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              Artigos e Insights
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Análises profundas, entrevistas exclusivas e tendências do mercado de inovação
            </p>
          </div>

          {/* Categories Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <Badge 
                key={category}
                variant={category === "Todos" ? "default" : "outline"}
                className={`cursor-pointer transition-colors ${
                  category === "Todos" 
                    ? "bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-blue text-white border-0" 
                    : "border-white/20 text-gray-300 hover:bg-white/10 hover:text-white"
                }`}
              >
                {category}
              </Badge>
            ))}
          </div>

          {/* Featured Article */}
          {featuredArticle && (
            <Card className="glass-effect border-white/10 hover-lift mb-12 overflow-hidden">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="relative">
                    <img 
                      src={featuredArticle.image}
                      alt={featuredArticle.title}
                      className="w-full h-64 lg:h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-neon-blue text-white">
                        Destaque
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                      <Badge variant="outline" className="border-neon-purple text-neon-purple">
                        <Tag className="w-3 h-3 mr-1" />
                        {featuredArticle.category}
                      </Badge>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {featuredArticle.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {featuredArticle.readTime}
                      </div>
                    </div>
                    
                    <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
                      {featuredArticle.title}
                    </h2>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {featuredArticle.excerpt}
                    </p>
                    
                    <Button className="bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-blue text-white font-semibold w-fit">
                      Ler Artigo
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularArticles.map((article) => (
              <Card key={article.id} className="glass-effect border-white/10 hover-lift overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative">
                    <img 
                      src={article.image}
                      alt={article.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="outline" className="border-white/30 text-white bg-black/30 backdrop-blur-sm">
                        {article.category}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {article.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {article.readTime}
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2">
                      {article.title}
                    </h3>
                    
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                      {article.excerpt}
                    </p>
                    
                    <Button variant="ghost" className="text-neon-blue hover:text-neon-purple hover:bg-white/5 p-0">
                      Ler mais
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
              Carregar Mais Artigos
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Artigos;


import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Maria Silva",
      role: "CEO, TechStart",
      content: "O InPodcast é essencial na minha rotina. As análises são sempre precisas e me ajudam a tomar decisões estratégicas mais assertivas.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b029?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Carlos Mendes",
      role: "Diretor de Inovação",
      content: "Conteúdo de altíssima qualidade! Sempre trago insights do podcast para minha equipe. É referência no mercado brasileiro.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Ana Costa",
      role: "Investidora Angel",
      content: "Excelente fonte de informação sobre tendências de mercado. Me mantém sempre atualizada sobre as melhores oportunidades de investimento.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            O que nossos ouvintes dizem
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Milhares de profissionais confiam no InPodcast para se manterem atualizados
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="glass-effect border-white/10 hover-lift">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Quote className="w-8 h-8 text-neon-blue mr-3" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

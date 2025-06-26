
import { Link } from 'react-router-dom';
import { Play, Mail, Instagram, Youtube, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  return (
    <footer className="bg-dark-800 border-t border-white/10 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-neon-blue to-neon-purple rounded-lg flex items-center justify-center">
                <Play className="w-5 h-5 text-white fill-current" />
              </div>
              <h3 className="text-xl font-display font-bold text-white">InPodcast</h3>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              O podcast brasileiro que conecta você com o futuro dos negócios através de inteligência de mercado, inovação e transformação digital.
            </p>
            
            {/* Newsletter */}
            <div className="space-y-3">
              <h4 className="text-white font-semibold">Newsletter</h4>
              <div className="flex flex-col sm:flex-row gap-2">
                <Input 
                  placeholder="Seu e-mail" 
                  className="bg-dark-700 border-white/20 text-white placeholder:text-gray-500"
                />
                <Button className="bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-blue">
                  <Mail className="w-4 h-4 mr-2" />
                  Inscrever
                </Button>
              </div>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="text-white font-semibold mb-4">Links Rápidos</h4>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-400 hover:text-neon-blue transition-colors">
                Home
              </Link>
              <Link to="/episodios" className="block text-gray-400 hover:text-neon-blue transition-colors">
                Episódios
              </Link>
              <Link to="/artigos" className="block text-gray-400 hover:text-neon-blue transition-colors">
                Artigos
              </Link>
              <Link to="/canais" className="block text-gray-400 hover:text-neon-blue transition-colors">
                Onde Escutar
              </Link>
            </div>
          </div>

          {/* Redes Sociais */}
          <div>
            <h4 className="text-white font-semibold mb-4">Nos Siga</h4>
            <div className="space-y-3">
              <a 
                href="#" 
                className="flex items-center space-x-2 text-gray-400 hover:text-neon-blue transition-colors"
              >
                <Youtube className="w-5 h-5" />
                <span>YouTube</span>
              </a>
              <a 
                href="#" 
                className="flex items-center space-x-2 text-gray-400 hover:text-neon-blue transition-colors"
              >
                <Instagram className="w-5 h-5" />
                <span>Instagram</span>
              </a>
              <a 
                href="#" 
                className="flex items-center space-x-2 text-gray-400 hover:text-neon-blue transition-colors"
              >
                <Twitter className="w-5 h-5" />
                <span>Twitter</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 InPodcast. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <section className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-2xl mx-auto">
          {/* 404 Visual */}
          <div className="mb-8">
            <h1 className="text-8xl md:text-9xl font-bold gradient-text mb-4">
              404
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto rounded-full"></div>
          </div>

          {/* Content */}
          <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
            Página não encontrada
          </h2>
          <p className="text-gray-400 text-lg mb-8 leading-relaxed">
            Ops! A página que você está procurando não existe ou foi movida.
            Que tal explorar nossos episódios mais recentes?
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              className="bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-blue text-white font-semibold"
            >
              <Link to="/">
                <Home className="w-4 h-4 mr-2" />
                Voltar ao Início
              </Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              className="border-white/20 text-white hover:bg-white/10"
            >
              <Link to="/episodios">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Ver Episódios
              </Link>
            </Button>
          </div>

          {/* Floating Elements */}
          <div className="absolute top-1/4 left-10 w-20 h-20 bg-neon-blue/10 rounded-full blur-xl animate-float"></div>
          <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-neon-purple/10 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;

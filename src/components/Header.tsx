import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Episódios', path: '/episodios' },
    { name: 'Artigos', path: '/artigos' },
    { name: 'Apresentadores', path: '/apresentadores' },
    { name: 'Canais', path: '/canais' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-dark-900/95 backdrop-blur-md border-b border-white/10' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-r from-neon-blue to-neon-purple rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play className="w-5 h-5 text-white fill-current" />
              </div>
              <div className="absolute inset-0 w-10 h-10 bg-gradient-to-r from-neon-blue to-neon-purple rounded-lg blur opacity-50 group-hover:opacity-75 transition-opacity"></div>
            </div>
            <div>
              <h1 className="text-xl font-display font-bold text-white">InPodcast</h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative text-sm font-medium transition-colors hover:text-neon-blue ${
                  location.pathname === item.path 
                    ? 'text-neon-blue' 
                    : 'text-gray-300'
                }`}
              >
                {item.name}
                {location.pathname === item.path && (
                  <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-neon-blue to-neon-purple"></div>
                )}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-blue text-white font-medium px-6">
              Ouvir Agora
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-dark-800/95 backdrop-blur-md border-b border-white/10">
            <div className="px-4 py-6 space-y-4">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block text-lg font-medium transition-colors ${
                    location.pathname === item.path 
                      ? 'text-neon-blue' 
                      : 'text-gray-300 hover:text-neon-blue'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button className="w-full bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-blue text-white font-medium">
                Ouvir Agora
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

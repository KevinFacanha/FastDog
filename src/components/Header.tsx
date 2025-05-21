import React, { useState, useEffect } from 'react';
import { Dog } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src="/catalogs/fastdog-logo2.png" alt="FastDog Logo" className="h-10 w-auto sm:h-12 md:h-14" />
          <span className="text-2xl font-bold text-green-700">FastDog</span>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a
                href="#home"
                className="text-green-800 hover:text-green-600 font-medium transition-colors"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#catalogs"
                className="text-green-800 hover:text-green-600 font-medium transition-colors"
              >
                Catálogos
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-green-800 hover:text-green-600 font-medium transition-colors"
              >
                Sobre
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
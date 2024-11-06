import { Menu, X, ChefHat } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <ChefHat className="h-8 w-8 text-amber-600" />
            <span className="ml-2 text-xl font-serif font-bold text-gray-900">Chef Zora</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="hover:text-amber-600 px-3 py-2 text-sm font-medium">Home</a>
              <a href="#menu" className="hover:text-amber-600 px-3 py-2 text-sm font-medium">Menu</a>
              <a href="#about" className="hover:text-amber-600 px-3 py-2 text-sm font-medium">About</a>
              <a href="#contact" className="hover:text-amber-600 px-3 py-2 text-sm font-medium">Contact</a>
              <button className="bg-amber-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-amber-700">
                Reserve
              </button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-amber-600"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <a href="#home" className="hover:text-amber-600 block px-3 py-2 text-base font-medium">Home</a>
            <a href="#menu" className="hover:text-amber-600 block px-3 py-2 text-base font-medium">Menu</a>
            <a href="#about" className="hover:text-amber-600 block px-3 py-2 text-base font-medium">About</a>
            <a href="#contact" className="hover:text-amber-600 block px-3 py-2 text-base font-medium">Contact</a>
            <button className="w-full text-left bg-amber-600 text-white px-4 py-2 rounded-md text-base font-medium hover:bg-amber-700">
              Reserve
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
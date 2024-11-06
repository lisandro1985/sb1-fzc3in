import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div id="home" className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
          alt="Chef's table"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gray-900/70"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
            Experience Culinary Excellence
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl">
            Embark on a gastronomic journey with Chef Zora, where traditional techniques meet modern innovation in a symphony of flavors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-amber-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-amber-700 flex items-center justify-center">
              Reserve a Table
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-white/10">
              View Menu
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
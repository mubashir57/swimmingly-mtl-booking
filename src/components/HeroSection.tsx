
import { Button } from "@/components/ui/button";
import { Star, Award } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-cyan-500 to-blue-800">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1530549387789-4c1017266635?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20"></div>
        
        {/* Animated Water Ripples */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/10 rounded-full animate-ping animation-duration-[3s]"></div>
          <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-white/10 rounded-full animate-ping animation-duration-[4s] animation-delay-1000"></div>
          <div className="absolute bottom-1/3 left-1/3 w-16 h-16 bg-white/10 rounded-full animate-ping animation-duration-[5s] animation-delay-2000"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className="flex justify-center mb-6">
          <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
            <Award className="h-5 w-5" />
            <span className="text-sm font-medium">Certified Instructor & Former Junior Team Canada Swimmer</span>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in">
          <span className="bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
            Jacqueline Buche
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-4 opacity-90 animate-fade-in animation-delay-500">
          Sharing the joy of safe swimming since 2021
        </p>
        
        <p className="text-lg md:text-xl mb-8 opacity-80 animate-fade-in animation-delay-700">
          Quality, reliable, and safe swim lessons for all ages and levels
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animation-delay-1000">
          <Button 
            size="lg" 
            className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Book Your Session
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-3 rounded-full transition-all duration-300"
          >
            Learn More
          </Button>
        </div>

        {/* Statistics */}
        <div className="flex justify-center space-x-8 mt-12 animate-fade-in animation-delay-1200">
          <div className="text-center">
            <div className="text-3xl font-bold">3+</div>
            <div className="text-sm opacity-80">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold">100+</div>
            <div className="text-sm opacity-80">Happy Students</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold">5★</div>
            <div className="text-sm opacity-80">Rating</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;


import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="hero-section min-h-screen flex items-center justify-center relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 overflow-hidden contain-layout">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30 animate-pulse"></div>
      
      {/* Floating orbs for visual appeal */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20 animate-bounce will-change-transform" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-r from-pink-400 to-red-500 rounded-full opacity-20 animate-bounce will-change-transform" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
      <div className="absolute top-1/2 right-10 w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full opacity-20 animate-bounce will-change-transform" style={{ animationDelay: '2s', animationDuration: '5s' }}></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <div className="w-36 h-36 rounded-full bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 mx-auto mb-8 flex items-center justify-center shadow-2xl transform hover:scale-110 hover:rotate-3 transition-all duration-500 will-change-transform cursor-pointer overflow-hidden">
            <img 
              src="/lovable-uploads/ff6f66bd-7d06-4127-8ed4-555dcaeb9c78.png" 
              alt="Garv Ahuja - Professional Portrait"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 hover:from-pink-400 hover:via-purple-400 hover:to-cyan-400 transition-all duration-700">
            Garv Ahuja
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-200 mb-8 max-w-3xl mx-auto leading-relaxed hover:text-white transition-colors duration-300">
            Data Engineer & Analyst passionate about creating data products and interactive dashboards with modern technologies
          </p>
          
          <div className="flex gap-4 justify-center mb-12 flex-wrap">
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-white/10 border-white/30 text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:border-transparent transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-blue-500/25 will-change-transform group"
              onClick={() => window.open('https://github.com/garvahuja007', '_blank')}
            >
              <Github className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
              GitHub
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-white/10 border-white/30 text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-800 hover:border-transparent transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-blue-600/25 will-change-transform group"
              onClick={() => window.open('https://www.linkedin.com/in/garv-ahuja-516416214', '_blank')}
            >
              <Linkedin className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
              LinkedIn
            </Button>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:from-purple-600 hover:via-pink-600 hover:to-red-600 transition-all duration-500 shadow-lg hover:shadow-purple-500/30 transform hover:scale-105 hover:-translate-y-1 will-change-transform group"
              onClick={() => window.open('mailto:garvahuja03@gmail.com', '_blank')}
            >
              <Mail className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
              Get In Touch
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce will-change-transform hover:text-cyan-400 transition-colors duration-300 cursor-pointer">
          <ArrowDown className="w-6 h-6 text-white/80 hover:w-7 hover:h-7 transition-all duration-300" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

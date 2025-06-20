
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 mx-auto mb-8 flex items-center justify-center text-4xl font-bold text-white shadow-2xl">
            JD
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600">
            John Developer
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Full-Stack Developer crafting beautiful, functional web experiences with modern technologies
          </p>
          
          <div className="flex gap-4 justify-center mb-12">
            <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-all duration-300">
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-all duration-300">
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </Button>
            <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg">
              <Mail className="w-5 h-5 mr-2" />
              Get In Touch
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-white/60" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

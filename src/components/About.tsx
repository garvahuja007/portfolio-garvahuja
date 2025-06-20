
import { Code, Lightbulb, Users, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable solutions"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Always exploring new technologies"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Strong team player and communicator"
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimized and fast applications"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-slate-800">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                I'm a passionate full-stack developer with 5+ years of experience building 
                web applications that make a difference. I love turning complex problems 
                into simple, beautiful solutions.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing 
                to open source projects, or sharing knowledge with the developer community.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6 text-center">
                    <item.icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                    <h3 className="font-semibold text-slate-800 mb-2">{item.title}</h3>
                    <p className="text-sm text-slate-600">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

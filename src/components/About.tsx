
import { Code, Lightbulb, Users, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Data Engineering",
      description: "ETL processes and data pipeline development",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Lightbulb,
      title: "Analytics", 
      description: "Interactive dashboards and business insights",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Cross-functional team player",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Zap,
      title: "Problem Solving",
      description: "Efficient data solutions and reporting",
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <p className="text-lg text-slate-700 leading-relaxed hover:text-slate-900 transition-colors duration-300 cursor-default">
                I'm a dedicated Data Engineering student at Guru Tegh Bahadur Institute of Technology, 
                with hands-on experience in creating data products and interactive dashboards that drive 
                business decisions.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed hover:text-slate-900 transition-colors duration-300 cursor-default">
                My experience includes working as a Data Engineering Intern at Maruti Suzuki and 
                Data Analyst Intern at Morepen Laboratories, where I've collaborated with teams to 
                streamline data processes and improve decision-making efficiency.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed hover:text-slate-900 transition-colors duration-300 cursor-default">
                I'm passionate about leveraging data to solve complex problems and am actively involved 
                in coding communities and sports activities.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <Card 
                  key={index} 
                  className="hover:shadow-xl transition-all duration-500 hover:-translate-y-3 hover:rotate-1 transform cursor-pointer group border-0 bg-white/80 backdrop-blur-sm"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 text-center">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${item.color} mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className="w-6 h-6 text-white group-hover:rotate-12 transition-transform duration-300" />
                    </div>
                    <h3 className="font-semibold text-slate-800 mb-2 group-hover:text-indigo-600 transition-colors duration-300">{item.title}</h3>
                    <p className="text-sm text-slate-600 group-hover:text-slate-700 transition-colors duration-300">{item.description}</p>
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

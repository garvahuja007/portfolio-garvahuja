
import { Code, Lightbulb, Users, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Data Engineering",
      description: "ETL processes and data pipeline development"
    },
    {
      icon: Lightbulb,
      title: "Analytics",
      description: "Interactive dashboards and business insights"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Cross-functional team player"
    },
    {
      icon: Zap,
      title: "Problem Solving",
      description: "Efficient data solutions and reporting"
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
                I'm a dedicated Data Engineering student at Guru Tegh Bahadur Institute of Technology, 
                with hands-on experience in creating data products and interactive dashboards that drive 
                business decisions.
              </p>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                My experience includes working as a Data Engineering Intern at Maruti Suzuki and 
                Data Analyst Intern at Morepen Laboratories, where I've collaborated with teams to 
                streamline data processes and improve decision-making efficiency.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                I'm passionate about leveraging data to solve complex problems and am actively involved 
                in coding communities and sports activities.
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

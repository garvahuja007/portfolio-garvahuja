
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "Competitor Analysis Dashboard",
      description: "Enhanced existing Power BI dashboard report for comprehensive competitor analysis, improving team decision-making capabilities.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80&fm=webp",
      technologies: ["Power BI", "Power Query Editor", "MySQL"],
      github: "#",
      demo: "#",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "Sales vs Target Analysis Dashboard",
      description: "Developed a performance indicating dashboard fetching sales data from server to analyze performance against targets.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80&fm=webp",
      technologies: ["Power BI", "Power Query Editor", "MySQL"],
      github: "#",
      demo: "#",
      gradient: "from-green-500 to-teal-600"
    },
    {
      title: "Exam Portal System",
      description: "Comprehensive exam portal with seamless integration supporting multiple question types including MCQs, with user-friendly interface for exam takers and administrators.",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80&fm=webp",
      technologies: ["Python", "MySQL"],
      github: "#", 
      demo: "#",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      title: "Personal Portfolio Website",
      description: "Designed and developed a dynamic personal portfolio website showcasing technical skills and professional accomplishments with sleek, responsive design.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=800&q=80&fm=webp",
      technologies: ["HTML", "CSS", "Bootstrap"],
      github: "#",
      demo: "#",
      gradient: "from-orange-500 to-red-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white via-blue-50 to-indigo-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
          Featured Projects
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 hover:rotate-1 group border-0 bg-white/90 backdrop-blur-sm"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={`${project.title} dashboard interface`}
                  className="w-full h-48 object-cover group-hover:scale-125 transition-transform duration-700"
                  width="800"
                  height="300"
                  loading={index < 2 ? "eager" : "lazy"}
                  decoding="async"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-0 group-hover:opacity-80 transition-all duration-500`} />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="flex gap-3">
                    <Button size="sm" variant="outline" className="bg-white/20 border-white/40 text-white hover:bg-white/30 backdrop-blur-sm">
                      <Github className="w-4 h-4" />
                    </Button>
                    <Button size="sm" className="bg-white/20 border-white/40 text-white hover:bg-white/30 backdrop-blur-sm">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl text-slate-800 group-hover:text-indigo-600 transition-colors duration-300">{project.title}</CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-slate-600 text-sm leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="secondary" 
                      className="text-xs hover:scale-105 transition-transform duration-200 bg-gradient-to-r from-blue-100 to-purple-100 hover:from-blue-200 hover:to-purple-200"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3 pt-4">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 hover:bg-gradient-to-r hover:from-gray-100 hover:to-gray-200 transition-all duration-300 hover:scale-105 group/btn"
                  >
                    <Github className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform duration-300" />
                    Code
                  </Button>
                  <Button 
                    size="sm" 
                    className={`flex-1 bg-gradient-to-r ${project.gradient} hover:scale-105 transition-all duration-300 shadow-lg group/btn`}
                  >
                    <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform duration-300" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

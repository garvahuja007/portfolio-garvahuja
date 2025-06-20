
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
      demo: "#"
    },
    {
      title: "Sales vs Target Analysis Dashboard",
      description: "Developed a performance indicating dashboard fetching sales data from server to analyze performance against targets.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80&fm=webp",
      technologies: ["Power BI", "Power Query Editor", "MySQL"],
      github: "#",
      demo: "#"
    },
    {
      title: "Exam Portal System",
      description: "Comprehensive exam portal with seamless integration supporting multiple question types including MCQs, with user-friendly interface for exam takers and administrators.",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80&fm=webp",
      technologies: ["Python", "MySQL"],
      github: "#",
      demo: "#"
    },
    {
      title: "Personal Portfolio Website",
      description: "Designed and developed a dynamic personal portfolio website showcasing technical skills and professional accomplishments with sleek, responsive design.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=800&q=80&fm=webp",
      technologies: ["HTML", "CSS", "Bootstrap"],
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-slate-800">
          Featured Projects
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={`${project.title} dashboard interface`}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  width="800"
                  height="300"
                  loading={index < 2 ? "eager" : "lazy"}
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl text-slate-800">{project.title}</CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-slate-600 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3 pt-4">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700">
                    <ExternalLink className="w-4 h-4 mr-2" />
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

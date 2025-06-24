
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar } from "lucide-react";

const WorkExperience = () => {
  const experiences = [
    {
      company: "Accenture",
      logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&w=200&q=80&fm=webp",
      position: "Data Engineer",
      duration: "June 2023 - Present",
      location: "Bangalore, India",
      description: "Developed and enhanced Power BI dashboards for comprehensive business analytics. Created ETL pipelines and optimized data workflows to support decision-making processes.",
      technologies: ["Power BI", "SQL", "Python", "Azure", "Data Modeling"],
      gradient: "from-purple-500 to-blue-600"
    },
    {
      company: "Tech Solutions Inc",
      logo: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=200&q=80&fm=webp",
      position: "Data Analyst Intern",
      duration: "January 2023 - May 2023",
      location: "Remote",
      description: "Analyzed large datasets to identify business insights and trends. Built interactive dashboards and reports to visualize key performance indicators for stakeholders.",
      technologies: ["Excel", "SQL", "Tableau", "Python", "Statistics"],
      gradient: "from-green-500 to-teal-600"
    },
    {
      company: "StartupXYZ",
      logo: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=200&q=80&fm=webp",
      position: "Junior Developer",
      duration: "August 2022 - December 2022",
      location: "Mumbai, India",
      description: "Contributed to web development projects using modern technologies. Collaborated with cross-functional teams to deliver high-quality software solutions.",
      technologies: ["React", "JavaScript", "Node.js", "MongoDB", "Git"],
      gradient: "from-orange-500 to-red-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
          Work Experience
        </h2>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((experience, index) => (
            <Card 
              key={index}
              className="overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group border-0 bg-white/90 backdrop-blur-sm"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex flex-col md:flex-row">
                {/* Company Logo */}
                <div className="md:w-32 md:h-32 w-full h-24 relative overflow-hidden">
                  <img 
                    src={experience.logo}
                    alt={`${experience.company} logo`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading={index < 2 ? "eager" : "lazy"}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${experience.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <CardHeader className="pb-3">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <div>
                        <h3 className="text-xl font-bold text-slate-800 group-hover:text-indigo-600 transition-colors duration-300">
                          {experience.position}
                        </h3>
                        <p className="text-lg font-semibold text-indigo-600 mt-1">
                          {experience.company}
                        </p>
                      </div>
                      
                      <div className="flex flex-col gap-1 text-sm text-slate-600">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{experience.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{experience.location}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <p className="text-slate-600 mb-4 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                      {experience.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex}
                          variant="secondary"
                          className="text-xs hover:scale-105 transition-transform duration-200 bg-gradient-to-r from-blue-100 to-purple-100 hover:from-blue-200 hover:to-purple-200"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;

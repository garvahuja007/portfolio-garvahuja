
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const skillCategories = [
    {
      category: "Advanced",
      skills: [
        { name: "Python", level: 95 },
        { name: "SQL", level: 90 },
        { name: "Power BI", level: 90 }
      ]
    },
    {
      category: "Intermediate",
      skills: [
        { name: "C/C++", level: 80 },
        { name: "Database Management", level: 85 },
        { name: "Data Structures & Algorithms", level: 80 },
        { name: "CSS & HTML5", level: 75 },
        { name: "Power Query Editor", level: 80 }
      ]
    },
    {
      category: "Beginner",
      skills: [
        { name: "Bootstrap", level: 60 },
        { name: "Java", level: 65 },
        { name: "Cloud Computing", level: 60 },
        { name: "Cyber Security", level: 55 },
        { name: "Spark SQL", level: 65 }
      ]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-slate-800">
          Skills & Technologies
        </h2>
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-6">
              <h3 className="text-2xl font-semibold text-slate-800 mb-6 text-center">
                {category.category}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-slate-700">{skill.name}</span>
                      <span className="text-sm text-slate-500">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

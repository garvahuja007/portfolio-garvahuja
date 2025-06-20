
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const skillCategories = [
    {
      category: "Advanced",
      skills: [
        { name: "Python", level: 95, color: "from-blue-500 to-blue-600" },
        { name: "SQL", level: 90, color: "from-green-500 to-green-600" },
        { name: "Power BI", level: 90, color: "from-yellow-500 to-orange-500" }
      ],
      bgGradient: "from-blue-50 to-blue-100"
    },
    {
      category: "Intermediate", 
      skills: [
        { name: "C/C++", level: 80, color: "from-purple-500 to-purple-600" },
        { name: "Database Management", level: 85, color: "from-indigo-500 to-indigo-600" },
        { name: "Data Structures & Algorithms", level: 80, color: "from-pink-500 to-pink-600" },
        { name: "CSS & HTML5", level: 75, color: "from-cyan-500 to-cyan-600" },
        { name: "Power Query Editor", level: 80, color: "from-teal-500 to-teal-600" }
      ],
      bgGradient: "from-purple-50 to-purple-100"
    },
    {
      category: "Beginner",
      skills: [
        { name: "Bootstrap", level: 60, color: "from-red-500 to-red-600" },
        { name: "Java", level: 65, color: "from-orange-500 to-orange-600" },
        { name: "Cloud Computing", level: 60, color: "from-emerald-500 to-emerald-600" },
        { name: "Cyber Security", level: 55, color: "from-slate-500 to-slate-600" },
        { name: "Spark SQL", level: 65, color: "from-violet-500 to-violet-600" }
      ],
      bgGradient: "from-green-50 to-green-100"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
          Skills & Technologies
        </h2>
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex} 
              className={`p-8 rounded-2xl bg-gradient-to-br ${category.bgGradient} hover:shadow-xl transition-all duration-500 hover:-translate-y-2 transform group border border-white/50`}
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <h3 className="text-2xl font-semibold text-slate-800 mb-6 text-center group-hover:text-indigo-600 transition-colors duration-300">
                {category.category}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex} 
                    className="space-y-3 hover:scale-105 transition-transform duration-300 cursor-pointer"
                    style={{ animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s` }}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-slate-700 hover:text-slate-900 transition-colors duration-200">{skill.name}</span>
                      <span className="text-sm text-slate-500 font-semibold bg-white/60 px-2 py-1 rounded-full">{skill.level}%</span>
                    </div>
                    <div className="relative">
                      <Progress 
                        value={skill.level} 
                        className="h-3 bg-white/60 hover:h-4 transition-all duration-300" 
                      />
                      <div 
                        className={`absolute top-0 left-0 h-3 bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 hover:shadow-lg`}
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${(categoryIndex * 0.5) + (skillIndex * 0.2)}s`
                        }}
                      />
                    </div>
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

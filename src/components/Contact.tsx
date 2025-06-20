
import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "garvahuja03@gmail.com",
      href: "mailto:garvahuja03@gmail.com",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Phone,
      title: "Phone", 
      value: "+91 9810243221",
      href: "tel:+919810243221",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "New Delhi, India",
      href: "#",
      color: "from-blue-500 to-cyan-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
          Let's Work Together
        </h2>
        
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-4 hover:text-indigo-600 transition-colors duration-300">
                Get In Touch
              </h3>
              <p className="text-lg text-slate-600 mb-8 hover:text-slate-800 transition-colors duration-300">
                I'm always open to discussing new opportunities in data engineering and analytics, 
                interesting projects, or collaborations. Feel free to reach out!
              </p>
            </div>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div 
                  key={index} 
                  className="flex items-center space-x-4 hover:scale-105 transition-all duration-300 cursor-pointer group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-lg flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                    <info.icon className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-800 group-hover:text-indigo-600 transition-colors duration-300">{info.title}</p>
                    <a 
                      href={info.href}
                      className="text-slate-600 hover:text-purple-600 transition-colors duration-300 hover:underline"
                    >
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <Card className="shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="group">
                  <label className="block text-sm font-medium text-slate-700 mb-2 group-hover:text-indigo-600 transition-colors duration-300">
                    Name
                  </label>
                  <Input 
                    placeholder="Your name" 
                    className="hover:border-indigo-300 focus:border-indigo-500 transition-all duration-300 hover:shadow-md"
                  />
                </div>
                
                <div className="group">
                  <label className="block text-sm font-medium text-slate-700 mb-2 group-hover:text-indigo-600 transition-colors duration-300">
                    Email
                  </label>
                  <Input 
                    type="email" 
                    placeholder="your.email@example.com"
                    className="hover:border-indigo-300 focus:border-indigo-500 transition-all duration-300 hover:shadow-md"
                  />
                </div>
                
                <div className="group">
                  <label className="block text-sm font-medium text-slate-700 mb-2 group-hover:text-indigo-600 transition-colors duration-300">
                    Subject
                  </label>
                  <Input 
                    placeholder="Project inquiry"
                    className="hover:border-indigo-300 focus:border-indigo-500 transition-all duration-300 hover:shadow-md"
                  />
                </div>
                
                <div className="group">
                  <label className="block text-sm font-medium text-slate-700 mb-2 group-hover:text-indigo-600 transition-colors duration-300">
                    Message
                  </label>
                  <Textarea 
                    placeholder="Tell me about your project..."
                    className="min-h-[120px] hover:border-indigo-300 focus:border-indigo-500 transition-all duration-300 hover:shadow-md"
                  />
                </div>
                
                <Button className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;

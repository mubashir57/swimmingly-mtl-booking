
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, GraduationCap, MapPin, Clock } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            About Jacqueline
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate swimming instructor with elite competitive background and years of teaching experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative group">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1530549387789-4c1017266635?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Jacqueline Buche - Swimming Instructor"
                className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-4 rounded-xl shadow-lg">
              <Award className="h-8 w-8" />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                Sharing the joy of safe swimming since 2021
              </h3>
              <p className="text-gray-600 leading-relaxed">
                As a former Junior Team Canada Swimmer and certified lifeguard and instructor, 
                I bring both competitive excellence and teaching expertise to every lesson. 
                My goal is to create a safe, supportive environment where swimmers of all 
                ages and abilities can develop confidence in the water.
              </p>
            </div>

            {/* Credentials */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Award className="h-5 w-5 text-blue-600" />
                <span className="font-semibold">Former Junior Team Canada Swimmer</span>
              </div>
              <div className="flex items-center space-x-3">
                <Award className="h-5 w-5 text-blue-600" />
                <span className="font-semibold">Certified Lifeguard and Instructor</span>
              </div>
              <div className="flex items-center space-x-3">
                <GraduationCap className="h-5 w-5 text-blue-600" />
                <span className="font-semibold">John Abbott College & McGill University</span>
              </div>
            </div>

            {/* Experience */}
            <div className="bg-blue-50 p-6 rounded-xl">
              <h4 className="font-bold text-gray-800 mb-3">Experience</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <div>• Atelier Enfants Tenaces</div>
                <div>• Cedar Park Pool</div>
                <div>• Pointe-Claire Aquatic Center</div>
              </div>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">All Ages</Badge>
              <Badge className="bg-cyan-100 text-cyan-800 hover:bg-cyan-200">All Levels</Badge>
              <Badge className="bg-green-100 text-green-800 hover:bg-green-200">Safety Certified</Badge>
              <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200">Competitive Background</Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

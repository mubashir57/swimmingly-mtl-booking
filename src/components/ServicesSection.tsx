
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, User, Trophy, Baby, MapPin, Clock } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: User,
      title: "Private Lessons",
      description: "One-on-one personalized instruction tailored to your specific needs and goals",
      features: ["Customized curriculum", "Flexible scheduling", "Rapid progress", "Individual attention"],
      price: "Starting at $60/session",
      duration: "45-60 minutes"
    },
    {
      icon: Users,
      title: "Group Classes",
      description: "Small group sessions that combine learning with social interaction",
      features: ["Max 4 students", "Peer motivation", "Cost effective", "Fun environment"],
      price: "Starting at $40/session",
      duration: "60 minutes"
    },
    {
      icon: Trophy,
      title: "Competitive Training",
      description: "Advanced coaching for swimmers looking to excel in competitive swimming",
      features: ["Technique refinement", "Race preparation", "Goal setting", "Performance analysis"],
      price: "Starting at $75/session",
      duration: "75-90 minutes"
    },
    {
      icon: Baby,
      title: "Kids & Beginners",
      description: "Patient, fun approach to introduce children and beginners to swimming",
      features: ["Water safety focus", "Confidence building", "Play-based learning", "Parent communication"],
      price: "Starting at $50/session",
      duration: "30-45 minutes"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Swimming Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional swimming instruction offered in your pool or mine, designed for all ages and skill levels
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm"
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                    <span className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {service.duration}
                    </span>
                  </div>
                  <div className="text-lg font-bold text-blue-600 mb-3">
                    {service.price}
                  </div>
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700">
                    Book Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Location Info */}
        <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
          <div className="flex items-center justify-center mb-4">
            <MapPin className="h-6 w-6 text-blue-600 mr-2" />
            <h3 className="text-2xl font-bold text-gray-800">Flexible Locations</h3>
          </div>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Lessons available at your private pool or at partner facilities throughout West Island, Quebec. 
            I bring all necessary equipment and focus on creating a comfortable learning environment wherever we meet.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-blue-50 px-4 py-2 rounded-full">
              <span className="text-blue-800 font-medium">Your Pool</span>
            </div>
            <div className="bg-cyan-50 px-4 py-2 rounded-full">
              <span className="text-cyan-800 font-medium">Partner Facilities</span>
            </div>
            <div className="bg-green-50 px-4 py-2 rounded-full">
              <span className="text-green-800 font-medium">West Island Quebec</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

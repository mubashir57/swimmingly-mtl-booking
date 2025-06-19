
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Facebook, MapPin, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start your swimming journey? Reach out and let's discuss how I can help you achieve your goals
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Phone */}
          <Card className="group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-blue-50 to-cyan-50">
            <CardContent className="p-8 text-center">
              <div className="mx-auto w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Phone</h3>
              <p className="text-gray-600 mb-4">Call or text for quick responses</p>
              <a 
                href="tel:+15147914758" 
                className="text-blue-600 hover:text-blue-700 font-semibold transition-colors"
              >
                (514) 791-4758
              </a>
            </CardContent>
          </Card>

          {/* Email */}
          <Card className="group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-blue-50 to-cyan-50">
            <CardContent className="p-8 text-center">
              <div className="mx-auto w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Email</h3>
              <p className="text-gray-600 mb-4">Send detailed inquiries</p>
              <a 
                href="mailto:swimmingly.mtl@gmail.com" 
                className="text-blue-600 hover:text-blue-700 font-semibold transition-colors"
              >
                swimmingly.mtl@gmail.com
              </a>
            </CardContent>
          </Card>

          {/* Facebook */}
          <Card className="group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-blue-50 to-cyan-50">
            <CardContent className="p-8 text-center">
              <div className="mx-auto w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Facebook className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Facebook</h3>
              <p className="text-gray-600 mb-4">Follow for updates</p>
              <a 
                href="https://www.facebook.com/jacqueline.buche.2025/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-600 hover:text-blue-700 font-semibold transition-colors"
              >
                Visit Page
              </a>
            </CardContent>
          </Card>

          {/* Location */}
          <Card className="group hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-blue-50 to-cyan-50">
            <CardContent className="p-8 text-center">
              <div className="mx-auto w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">Service Area</h3>
              <p className="text-gray-600 mb-4">Lessons throughout</p>
              <span className="text-blue-600 font-semibold">
                West Island, Quebec
              </span>
            </CardContent>
          </Card>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8">
          <div className="flex items-center justify-center mb-4">
            <Clock className="h-6 w-6 text-blue-600 mr-2" />
            <h3 className="text-2xl font-bold text-gray-800">Response Time</h3>
          </div>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            I typically respond to all inquiries within 24 hours. For urgent requests or same-day bookings, 
            please call directly for the fastest response.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
            >
              <Phone className="h-4 w-4 mr-2" />
              Call Now
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-blue-600 text-blue-600 hover:bg-blue-50"
            >
              <Mail className="h-4 w-4 mr-2" />
              Send Email
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;


import { Waves, Facebook, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-900 to-cyan-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Waves className="h-8 w-8 text-cyan-300" />
              <span className="text-2xl font-bold">Swimmingly</span>
            </div>
            <p className="text-blue-100 mb-4">
              Professional swimming instruction by Jacqueline Buche. 
              Sharing the joy of safe swimming since 2021.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/jacqueline.buche.2025/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-200 hover:text-white transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="mailto:swimmingly.mtl@gmail.com"
                className="text-blue-200 hover:text-white transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a 
                href="tel:+15147914758"
                className="text-blue-200 hover:text-white transition-colors"
              >
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-blue-100">
              <li>Private Lessons</li>
              <li>Group Classes</li>
              <li>Competitive Training</li>
              <li>Kids & Beginners</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-blue-100">
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#booking" className="hover:text-white transition-colors">Book Now</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Info</h4>
            <div className="space-y-2 text-blue-100">
              <p>📧 swimmingly.mtl@gmail.com</p>
              <p>📞 (514) 791-4758</p>
              <p>📍 West Island, Quebec</p>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-700 mt-8 pt-8 text-center text-blue-200">
          <p>&copy; 2024 Swimmingly - Jacqueline Buche. All rights reserved. Servicing West Island, Quebec.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

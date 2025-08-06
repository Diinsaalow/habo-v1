import Link from 'next/link';
import { Fish, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Fish className="h-8 w-8 text-blue-400" />
              <div>
                <h2 className="text-xl font-bold">Habo Tuna</h2>
                <p className="text-sm text-blue-400">Factory</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              The tastiest fish in town! Leading producer and distributor of premium seafood products.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span className="text-sm">Bosaso, Puntland State, Somalia</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-sm">sales@habotuna.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-sm">+252 50 5817300</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-300 hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link href="/products" className="text-gray-300 hover:text-blue-400 transition-colors">Our Products</Link></li>
              <li><Link href="/factory" className="text-gray-300 hover:text-blue-400 transition-colors">Factory</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-blue-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li><span className="text-gray-300">White-meat Tuna</span></li>
              <li><span className="text-gray-300">Sardines</span></li>
              <li><span className="text-gray-300">Mackerel</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Sales Enquiries</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-blue-400 font-medium">Somalia:</span>
                <br />
                <span className="text-sm text-gray-300">+252 907 798231</span>
              </li>
              <li>
                <span className="text-blue-400 font-medium">UAE:</span>
                <br />
                <span className="text-sm text-gray-300">+971 50 4508715</span>
              </li>
              <li>
                <span className="text-blue-400 font-medium">Oman:</span>
                <br />
                <span className="text-sm text-gray-300">+968 99 655914</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © 2010 - 2025 Habo Tuna Factory. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-300 hover:text-blue-400 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/disclaimer" className="text-gray-300 hover:text-blue-400 text-sm transition-colors">
                Disclaimer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
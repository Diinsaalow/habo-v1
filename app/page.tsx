import Link from 'next/link';
import { ArrowRight, Fish, Award, Globe, Heart } from 'lucide-react';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              The Tastiest Fish
              <span className="block text-blue-200">in Town!</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Leading producer and distributor of premium seafood products including white-meat tuna, sardines, and mackerel from the Gulf of Aden Sea.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/products" 
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                View Our Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                href="/contact" 
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Welcome to Habo Tuna Factory
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Strategically located near the Gulf of Aden Sea, 60 km from Allula district in Puntland State of Somalia, 
              we operate a modern processing and canning facility with an annual production capacity of 1.5 million cartons.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
              <p className="text-gray-600">
                International food safety standards and certifications ensure the highest quality products.
              </p>
            </div>
            <div className="text-center group">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                <Globe className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Global Reach</h3>
              <p className="text-gray-600">
                Serving the Somali Military and exporting to UAE, Oman, Kenya, with plans to expand to the USA.
              </p>
            </div>
            <div className="text-center group">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-colors">
                <Heart className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Health & Nutrition</h3>
              <p className="text-gray-600">
                Rich in omega-3s, our products support heart and brain function with high-protein content.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Highlights */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Premium Products
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From the pristine waters of the Gulf of Aden, we bring you shelf-stable seafood products 
              that combine health, nutrition, and convenience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* White-meat Tuna */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                <Fish className="h-20 w-20 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">White-meat Tuna</h3>
                <p className="text-gray-600 mb-4">
                  Our most popular product - delicious, fresh white-meat tuna packed with protein and omega-3s.
                </p>
                <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                  Most Popular
                </span>
              </div>
            </div>

            {/* Sardines */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-48 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                <Fish className="h-20 w-20 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Sardines</h3>
                <p className="text-gray-600 mb-4">
                  High in omega-3 fatty acids, our sardines are ideal for cardiovascular health and overall wellness.
                </p>
                <span className="inline-block bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                  Heart Healthy
                </span>
              </div>
            </div>

            {/* Mackerel */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="h-48 bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                <Fish className="h-20 w-20 text-white" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Mackerel</h3>
                <p className="text-gray-600 mb-4">
                  Protein-rich and flavorful, our mackerel is ideal for muscle repair and recovery.
                </p>
                <span className="inline-block bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full">
                  High Protein
                </span>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/products" 
              className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center"
            >
              View All Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Preview */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Contact us today to learn more about our premium seafood products and how we can meet your needs.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-2">Head Office</h3>
                <p className="text-blue-100">Bosaso, Puntland State, Somalia</p>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <p className="text-blue-100">sales@habotuna.com</p>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-2">Phone</h3>
                <p className="text-blue-100">+252 50 5817300</p>
              </div>
            </div>
            <Link 
              href="/contact" 
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 inline-flex items-center"
            >
              Contact Us Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
import { MapPin, Users, Award, Truck, Clock, Shield } from 'lucide-react';

export default function Factory() {
  const highlights = [
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "Strategic Location",
      description: "Coastal location ideal for fresh seafood sourcing, positioned perfectly near the Gulf of Aden Sea."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Advanced Equipment",
      description: "Advanced processing, packing, and canning equipment ensuring efficiency and quality."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Skilled Workforce",
      description: "A highly trained workforce operating sanitary, efficient production lines."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Quality Standards",
      description: "International food safety standards and certifications ensuring premium quality."
    }
  ];

  const stats = [
    { label: "Annual Production Capacity", value: "1.5M", unit: "Cartons" },
    { label: "Tins per Carton", value: "48", unit: "Tins" },
    { label: "Distance from Allula District", value: "60", unit: "KM" },
    { label: "Years of Experience", value: "15+", unit: "Years" }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Factory</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              State-of-the-art processing and canning facility strategically located near the Gulf of Aden Sea in Puntland State, Somalia.
            </p>
          </div>
        </div>
      </section>

      {/* Factory Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Factory by Numbers</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our modern facility is equipped with the latest technology and operates at impressive capacity.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">{stat.value}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{stat.label}</h3>
                <p className="text-blue-600 font-medium">{stat.unit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Factory Highlights */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Factory Highlights</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              What makes our factory stand out in terms of quality, efficiency, and capability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {highlights.map((highlight, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-6">
                    <div className="text-blue-600">{highlight.icon}</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{highlight.title}</h3>
                    <p className="text-gray-600">{highlight.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Production Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Production Process</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our streamlined production process ensures quality at every step.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Fresh Sourcing</h3>
              <p className="text-gray-600">
                Fresh fish sourced directly from the Gulf of Aden Sea ensuring premium quality.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Processing</h3>
              <p className="text-gray-600">
                Advanced processing equipment handles fish with care to maintain quality and freshness.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Canning</h3>
              <p className="text-gray-600">
                State-of-the-art canning process ensures shelf-stability and preserves nutrition.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Distribution</h3>
              <p className="text-gray-600">
                Efficient packaging and distribution to markets across Somalia, UAE, Oman, and Kenya.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Factory Gallery</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Take a visual tour of our modern processing facility and see our operations in action.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Gallery Items with Placeholder Images */}
            <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg h-64 flex items-center justify-center text-white">
              <div className="text-center">
                <Clock className="h-12 w-12 mx-auto mb-2" />
                <p className="font-semibold">Processing Line</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-400 to-green-600 rounded-lg h-64 flex items-center justify-center text-white">
              <div className="text-center">
                <Truck className="h-12 w-12 mx-auto mb-2" />
                <p className="font-semibold">Canning Equipment</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg h-64 flex items-center justify-center text-white">
              <div className="text-center">
                <Shield className="h-12 w-12 mx-auto mb-2" />
                <p className="font-semibold">Quality Control</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg h-64 flex items-center justify-center text-white">
              <div className="text-center">
                <Users className="h-12 w-12 mx-auto mb-2" />
                <p className="font-semibold">Skilled Workers</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-teal-400 to-teal-600 rounded-lg h-64 flex items-center justify-center text-white">
              <div className="text-center">
                <Award className="h-12 w-12 mx-auto mb-2" />
                <p className="font-semibold">Packaging Area</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-lg h-64 flex items-center justify-center text-white">
              <div className="text-center">
                <MapPin className="h-12 w-12 mx-auto mb-2" />
                <p className="font-semibold">Storage Facility</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Strategic Location</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Located near the Gulf of Aden Sea, 60 km from Allula district in Puntland State of Somalia, our factory is strategically positioned for both domestic and international seafood supply.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-blue-200 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Location</h3>
                <p className="text-blue-100">Bosaso, Puntland State, Somalia</p>
              </div>
              <div className="text-center">
                <Clock className="h-12 w-12 text-blue-200 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Distance</h3>
                <p className="text-blue-100">60 km from Allula District</p>
              </div>
              <div className="text-center">
                <Truck className="h-12 w-12 text-blue-200 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Access</h3>
                <p className="text-blue-100">Direct Gulf of Aden Sea Access</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
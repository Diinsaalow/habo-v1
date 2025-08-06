import { Target, Eye, Users, Award, Globe, Lightbulb, Shield } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Commitment",
      description: "Dedicated to our employees, customers, and shareholders."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Honesty",
      description: "Promoting transparency and trust in all operations."
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Action",
      description: "Open communication and a results-oriented culture."
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Responsibility",
      description: "Caring for natural resources and community wellbeing."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Leadership",
      description: "Ethical and credible decision-making."
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Innovation",
      description: "Embracing improvement in all areas."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Habo Tuna Factory</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Leading the global seafood category with great-tasting and healthy products that meet the needs of today's consumers.
            </p>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Habo Tuna Factory is a leading producer, distributor, and marketer of shelf-stable seafood products including white-meat tuna, sardines, mackerel, and specialty seafood. Located near the Gulf of Aden Sea, 60 km from Allula district in Puntland State of Somalia, the factory is strategically positioned for both domestic and international seafood supply.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                The company operates a modern processing and canning facility with an annual production capacity of 1.5 million cartons. Each carton contains 48 tins of fish. Habo Tuna serves the Somali Military and exports to the UAE, Oman, Kenya, and other regional markets. Plans are underway to expand to the USA.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg h-96 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-6xl font-bold mb-4">1.5M</div>
                <p className="text-xl">Cartons Annual Capacity</p>
                <p className="text-sm mt-2">48 tins per carton</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Vision */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-lg text-gray-600">
                To lead the global seafood category by providing great-tasting and healthy products that meet the needs of today's consumers, while committing to responsible practices.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-lg text-gray-600">
                Fueling Life's Everyday Adventures with Exceptional Seafood.
              </p>
            </div>
          </div>

          {/* Objective */}
          <div className="mt-12 bg-blue-600 text-white rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Our Objective</h3>
            <p className="text-lg">
              To be the best seafood brand of Somali origin, offering high-quality products at the best prices to meet market demands.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These values guide everything we do, from our daily operations to our long-term strategic decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                  <div className="text-blue-600">{value.icon}</div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
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
              State-of-the-art facilities and processes ensure the highest quality products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Strategic Location</h3>
              <p className="text-gray-600">
                A coastal location ideal for fresh seafood sourcing, positioned perfectly near the Gulf of Aden Sea.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Advanced Equipment</h3>
              <p className="text-gray-600">
                Advanced processing, packing, and canning equipment ensuring efficiency and quality.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Skilled Workforce</h3>
              <p className="text-gray-600">
                A highly trained workforce operating sanitary, efficient production lines.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Quality Standards</h3>
              <p className="text-gray-600">
                International food safety standards and certifications ensuring premium quality.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
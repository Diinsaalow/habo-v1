import {
  Target,
  Eye,
  Users,
  Award,
  Globe,
  Lightbulb,
  Shield,
  MapPin,
  Factory,
  Users2,
  CheckCircle,
} from "lucide-react";

export default function About() {
  const values = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Commitment",
      description: "Dedicated to our employees, customers, and shareholders.",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Honesty",
      description: "Promoting transparency and trust in all operations.",
      color: "from-green-500 to-green-600",
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Action",
      description: "Open communication and a results-oriented culture.",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Responsibility",
      description: "Caring for natural resources and community wellbeing.",
      color: "from-teal-500 to-teal-600",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Leadership",
      description: "Ethical and credible decision-making.",
      color: "from-amber-500 to-amber-600",
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Innovation",
      description: "Embracing improvement in all areas.",
      color: "from-rose-500 to-rose-600",
    },
  ];

  const highlights = [
    {
      icon: <Factory className="h-6 w-6" />,
      title: "1.5M Cartons",
      subtitle: "Annual Production Capacity",
      description: "48 tins per carton",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Strategic Location",
      subtitle: "Gulf of Aden Sea",
      description: "60km from Allula district, Puntland State",
    },
    {
      icon: <Users2 className="h-6 w-6" />,
      title: "Global Reach",
      subtitle: "Export Markets",
      description: "UAE, Oman, Kenya, USA (planned)",
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Quality Certified",
      subtitle: "International Standards",
      description: "Food safety & premium quality",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[length:20px_20px] opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6 border border-white/20">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              Leading Global Seafood Producer
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              About{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Habo Tuna
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Leading the global seafood category with{" "}
              <span className="font-semibold text-yellow-300">
                great-tasting
              </span>{" "}
              and <span className="font-semibold text-yellow-300">healthy</span>{" "}
              products that meet the needs of today's consumers.
            </p>
          </div>
        </div>
      </section>

      {/* Key Highlights Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Habo Tuna?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover what makes us the preferred choice in the seafood
              industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <div key={index} className="group relative">
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 h-full border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-12 h-12 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                    {highlight.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-sm font-medium text-blue-600 mb-1">
                    {highlight.subtitle}
                  </p>
                  <p className="text-sm text-gray-600">
                    {highlight.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full mb-6">
                Our Story
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                A Legacy of{" "}
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Excellence
                </span>
              </h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  <span className="font-semibold text-gray-900">
                    Habo Tuna Factory
                  </span>{" "}
                  is a leading producer, distributor, and marketer of
                  shelf-stable seafood products including{" "}
                  <span className="font-semibold text-blue-600">
                    white-meat tuna
                  </span>
                  ,{" "}
                  <span className="font-semibold text-blue-600">sardines</span>,{" "}
                  <span className="font-semibold text-blue-600">mackerel</span>,
                  and{" "}
                  <span className="font-semibold text-blue-600">
                    specialty seafood
                  </span>
                  .
                </p>
                <p>
                  Located near the{" "}
                  <span className="font-semibold text-green-600">
                    Gulf of Aden Sea
                  </span>
                  , 60 km from Allula district in{" "}
                  <span className="font-semibold text-green-600">
                    Puntland State of Somalia
                  </span>
                  , the factory is strategically positioned for both domestic
                  and international seafood supply.
                </p>
                <p>
                  The company operates a{" "}
                  <span className="font-semibold text-orange-600">
                    modern processing and canning facility
                  </span>
                  with an annual production capacity of{" "}
                  <span className="font-semibold text-2xl text-orange-600">
                    1.5 million cartons
                  </span>
                  . Each carton contains 48 tins of fish.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-700 rounded-3xl p-8 text-white shadow-2xl">
                <div className="text-center">
                  <div className="text-7xl font-bold mb-4 text-yellow-300">
                    1.5M
                  </div>
                  <p className="text-2xl font-semibold mb-2">
                    Cartons Annual Capacity
                  </p>
                  <p className="text-lg opacity-90">48 tins per carton</p>
                  <div className="mt-6 flex justify-center space-x-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold">72M</div>
                      <div className="text-sm opacity-80">Total Tins</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold">24/7</div>
                      <div className="text-sm opacity-80">Production</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-400 rounded-full animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Vision & Mission
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Driving the future of sustainable seafood with clear purpose and
              direction
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Vision */}
            <div className="group relative">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 h-full border border-blue-200 hover:border-blue-400 transition-all duration-300 hover:shadow-xl">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                  Our Vision
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed text-center mb-4">
                  To{" "}
                  <span className="font-semibold text-blue-600">
                    lead the global seafood category
                  </span>{" "}
                  by providing great-tasting and healthy products that meet the
                  needs of today's consumers, while committing to{" "}
                  <span className="font-semibold text-blue-600">
                    responsible practices
                  </span>
                  .
                </p>
                <p className="text-lg text-gray-700 leading-relaxed text-center">
                  We envision a world where{" "}
                  <span className="font-medium text-blue-600">
                    premium seafood
                  </span>{" "}
                  is accessible to everyone, where{" "}
                  <span className="font-medium text-blue-600">
                    sustainability
                  </span>{" "}
                  drives innovation, and where{" "}
                  <span className="font-medium text-blue-600">quality</span>{" "}
                  never compromises our environmental responsibility.
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="group relative">
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-8 h-full border border-green-200 hover:border-green-400 transition-all duration-300 hover:shadow-xl">
                <div className="bg-gradient-to-br from-green-500 to-green-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                  Our Mission
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed text-center mb-4">
                  <span className="font-semibold text-green-600">
                    Fueling Life's Everyday Adventures
                  </span>{" "}
                  with{" "}
                  <span className="font-semibold text-green-600">
                    Exceptional Seafood
                  </span>
                  .
                </p>
                <p className="text-lg text-gray-700 leading-relaxed text-center">
                  Through{" "}
                  <span className="font-medium text-green-600">innovation</span>{" "}
                  in processing,{" "}
                  <span className="font-medium text-green-600">commitment</span>{" "}
                  to quality, and{" "}
                  <span className="font-medium text-green-600">dedication</span>{" "}
                  to customer satisfaction, we deliver products that enhance
                  daily meals and support healthy lifestyles worldwide.
                </p>
              </div>
            </div>
          </div>

          {/* Objective */}
          <div className="relative">
            <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700 text-white rounded-3xl p-10 text-center shadow-2xl">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-full text-sm font-semibold">
                  Primary Goal
                </div>
              </div>
              <h3 className="text-3xl font-bold mb-6">Our Objective</h3>
              <p className="text-xl leading-relaxed max-w-3xl mx-auto mb-6">
                To be the{" "}
                <span className="font-semibold text-yellow-300">
                  best seafood brand of Somali origin
                </span>
                , offering
                <span className="font-semibold text-yellow-300">
                  {" "}
                  high-quality products
                </span>{" "}
                at the best prices to meet market demands.
              </p>
              <p className="text-lg leading-relaxed max-w-3xl mx-auto opacity-90">
                We strive to{" "}
                <span className="font-semibold text-yellow-300">
                  exceed customer expectations
                </span>{" "}
                through continuous improvement in our{" "}
                <span className="font-semibold text-yellow-300">
                  processing techniques
                </span>
                ,{" "}
                <span className="font-semibold text-yellow-300">
                  quality standards
                </span>
                , and{" "}
                <span className="font-semibold text-yellow-300">
                  service delivery
                </span>
                . Our commitment to excellence drives us to become the{" "}
                <span className="font-semibold text-yellow-300">
                  preferred choice
                </span>{" "}
                for premium seafood products across the region and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These values guide everything we do, from our daily operations to
              our long-term strategic decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl p-8 h-full border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                  <div
                    className={`bg-gradient-to-br ${value.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <div className="text-white">{value.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-center leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Factory Highlights */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Factory Highlights
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              State-of-the-art facilities and processes ensure the highest
              quality products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-xl">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-12 h-12 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Strategic Location
              </h3>
              <p className="text-gray-600 leading-relaxed">
                A{" "}
                <span className="font-semibold text-blue-600">
                  coastal location
                </span>{" "}
                ideal for fresh seafood sourcing, positioned perfectly near the{" "}
                <span className="font-semibold text-blue-600">
                  Gulf of Aden Sea
                </span>
                .
              </p>
            </div>

            <div className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200 hover:border-green-300 transition-all duration-300 hover:shadow-xl">
              <div className="bg-gradient-to-br from-green-500 to-green-600 w-12 h-12 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                <Factory className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Advanced Equipment
              </h3>
              <p className="text-gray-600 leading-relaxed">
                <span className="font-semibold text-green-600">
                  Advanced processing
                </span>
                , packing, and canning equipment ensuring
                <span className="font-semibold text-green-600">
                  {" "}
                  efficiency and quality
                </span>
                .
              </p>
            </div>

            <div className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200 hover:border-purple-300 transition-all duration-300 hover:shadow-xl">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-12 h-12 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users2 className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Skilled Workforce
              </h3>
              <p className="text-gray-600 leading-relaxed">
                A{" "}
                <span className="font-semibold text-purple-600">
                  highly trained workforce
                </span>{" "}
                operating sanitary, efficient production lines with{" "}
                <span className="font-semibold text-purple-600">
                  expert precision
                </span>
                .
              </p>
            </div>

            <div className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200 hover:border-orange-300 transition-all duration-300 hover:shadow-xl">
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 w-12 h-12 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                <CheckCircle className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Quality Standards
              </h3>
              <p className="text-gray-600 leading-relaxed">
                <span className="font-semibold text-orange-600">
                  International food safety standards
                </span>{" "}
                and certifications ensuring
                <span className="font-semibold text-orange-600">
                  {" "}
                  premium quality
                </span>{" "}
                in every product.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

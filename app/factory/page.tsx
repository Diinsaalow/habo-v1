import {
  MapPin,
  Users,
  Award,
  Truck,
  Clock,
  Shield,
  CheckCircle,
  Globe,
  Zap,
  Star,
  ArrowRight,
  Package,
  Fish,
} from "lucide-react";
import Image from "next/image";

export default function Factory() {
  const highlights = [
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "Strategic Location",
      description:
        "Coastal location ideal for fresh seafood sourcing, positioned perfectly near the Gulf of Aden Sea.",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Advanced Equipment",
      description:
        "Advanced processing, packing, and canning equipment ensuring efficiency and quality.",
      color: "from-green-500 to-green-600",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Skilled Workforce",
      description:
        "A highly trained workforce operating sanitary, efficient production lines.",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Quality Standards",
      description:
        "International food safety standards and certifications ensuring premium quality.",
      color: "from-orange-500 to-orange-600",
    },
  ];

  const stats = [
    {
      label: "Annual Production Capacity",
      value: "1.5M",
      unit: "Cartons",
      icon: <Award className="h-6 w-6" />,
    },
    {
      label: "Tins per Carton",
      value: "48",
      unit: "Tins",
      icon: <Truck className="h-6 w-6" />,
    },
    {
      label: "Distance from Allula District",
      value: "60",
      unit: "KM",
      icon: <MapPin className="h-6 w-6" />,
    },
    {
      label: "Years of Experience",
      value: "15+",
      unit: "Years",
      icon: <Award className="h-6 w-6" />,
    },
  ];

  const productionSteps = [
    {
      step: "1",
      title: "Fresh Sourcing",
      description:
        "Fresh fish sourced directly from the Gulf of Aden Sea ensuring premium quality.",
      icon: <Fish className="h-8 w-8" />,
      color: "from-blue-500 to-blue-600",
    },
    {
      step: "2",
      title: "Processing",
      description:
        "Advanced processing equipment handles fish with care to maintain quality and freshness.",
      icon: <Zap className="h-8 w-8" />,
      color: "from-green-500 to-green-600",
    },
    {
      step: "3",
      title: "Canning",
      description:
        "State-of-the-art canning process ensures shelf-stability and preserves nutrition.",
      icon: <Truck className="h-8 w-8" />,
      color: "from-purple-500 to-purple-600",
    },
    {
      step: "4",
      title: "Distribution",
      description:
        "Efficient packaging and distribution to markets across Somalia, UAE, Oman, and Kenya.",
      icon: <Truck className="h-8 w-8" />,
      color: "from-orange-500 to-orange-600",
    },
  ];

  const galleryItems = [
    {
      title: "Processing Line",
      image: "/images/home/habo-home-1.png",
      gradient: "from-blue-400 to-blue-600",
      description: "Advanced processing equipment in action",
    },
    {
      title: "Canning Equipment",
      image: "/images/home/habo-home-2.png",
      gradient: "from-green-400 to-green-600",
      description: "State-of-the-art canning technology",
    },
    {
      title: "Quality Control",
      image: "/images/home/habo-home-3.png",
      gradient: "from-purple-400 to-purple-600",
      description: "Rigorous quality testing procedures",
    },
    {
      title: "Skilled Workers",
      image: "/images/home/habo-home-4.png",
      gradient: "from-orange-400 to-orange-600",
      description: "Expert team ensuring excellence",
    },
    {
      title: "Packaging Area",
      image: "/images/home/habo-home-5.png",
      gradient: "from-teal-400 to-teal-600",
      description: "Efficient packaging operations",
    },
    {
      title: "Storage Facility",
      image: "/images/home/habo-home-6.png",
      gradient: "from-indigo-400 to-indigo-600",
      description: "Modern storage and logistics",
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
              State-of-the-Art Processing Facility
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Our{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Factory
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              State-of-the-art processing and canning facility strategically
              located near the{" "}
              <span className="font-semibold text-yellow-300">
                Gulf of Aden Sea
              </span>{" "}
              in{" "}
              <span className="font-semibold text-yellow-300">
                Puntland State, Somalia
              </span>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Factory Stats */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Factory by Numbers
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Impressive Production Capacity
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our modern facility is equipped with the latest technology and
              operates at impressive capacity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 h-full border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <div className="text-white">{stat.icon}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-900 mb-2">
                      {stat.value}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {stat.label}
                    </h3>
                    <p className="text-blue-600 font-medium">{stat.unit}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Factory Highlights */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              What Makes Us Special
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Factory Highlights
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              What makes our factory stand out in terms of quality, efficiency,
              and capability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {highlights.map((highlight, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 h-full border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                  <div className="flex items-start">
                    <div
                      className={`bg-gradient-to-br ${highlight.color} p-4 rounded-2xl mr-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      <div className="text-white">{highlight.icon}</div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {highlight.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Production Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Our Process
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Production Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our streamlined production process ensures quality at every step.
            </p>
          </div>

          {/* Timeline Layout */}
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-200 via-blue-200 to-green-200 hidden lg:block"></div>

            <div className="space-y-12">
              {productionSteps.map((step, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col lg:flex-row items-center ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Step Content */}
                  <div
                    className={`lg:w-1/2 ${
                      index % 2 === 0 ? "lg:pr-12" : "lg:pl-12"
                    }`}
                  >
                    <div className="group bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border border-gray-200 hover:border-purple-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                      <div className="flex items-center mb-6">
                        <div
                          className={`bg-gradient-to-br ${step.color} text-white w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold group-hover:scale-110 transition-transform duration-300 shadow-lg mr-6`}
                        >
                          {step.step}
                        </div>
                        <div className="bg-gradient-to-br from-gray-100 to-gray-200 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <div className="text-gray-600">{step.icon}</div>
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-lg">
                        {step.description}
                      </p>

                      {/* Process Details */}
                      {/* <div className="mt-6 pt-6 border-t border-gray-200">
                        <div className="flex items-center justify-between text-sm text-gray-500">
                          <span>Quality Check</span>
                          <span>✓</span>
                        </div>
                        <div className="flex items-center justify-between text-sm text-gray-500 mt-2">
                          <span>
                            Time:{" "}
                            {index === 0
                              ? "2-4 hrs"
                              : index === 1
                              ? "6-8 hrs"
                              : index === 2
                              ? "4-6 hrs"
                              : "1-2 hrs"}
                          </span>
                          <span>✓</span>
                        </div>
                      </div> */}
                    </div>
                  </div>

                  {/* Center Timeline Node */}
                  <div className="relative z-10 my-8 lg:my-0">
                    <div
                      className={`w-8 h-8 rounded-full bg-gradient-to-br ${step.color} border-4 border-white shadow-lg flex items-center justify-center`}
                    >
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                    {/* Connection Lines for Mobile */}
                    {index < productionSteps.length - 1 && (
                      <div className="lg:hidden w-1 h-12 bg-gradient-to-b from-gray-200 to-gray-300 mx-auto mt-4"></div>
                    )}
                  </div>

                  {/* Empty Space for Alternating Layout */}
                  <div className="lg:w-1/2"></div>
                </div>
              ))}
            </div>

            {/* Bottom Connection */}
            <div className="hidden lg:block">
              <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-6 w-1 h-12 bg-gradient-to-b from-green-200 to-transparent"></div>
            </div>
          </div>

          {/* Process Summary */}
          <div className="mt-20 text-center">
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-8 border border-purple-200">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-gradient-to-br from-purple-500 to-blue-600 text-white w-16 h-16 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                  <Package className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Complete Production Cycle
                </h3>
              </div>
              <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
                From fresh sourcing to final distribution, our integrated
                process ensures consistent quality and efficiency throughout the
                entire production chain.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Visual Tour
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Factory Gallery
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Take a visual tour of our modern processing facility and see our
              operations in action.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl h-80 relative overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-200">
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  {/* Overlay with content */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-sm opacity-90">{item.description}</p>
                  </div>

                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[length:20px_20px] opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <MapPin className="h-4 w-4 text-yellow-300 mr-2" />
              <span className="text-sm font-medium">Strategic Positioning</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Strategic{" "}
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Location
              </span>
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Located near the{" "}
              <span className="font-semibold text-yellow-300">
                Gulf of Aden Sea
              </span>
              , 60 km from Allula district in{" "}
              <span className="font-semibold text-yellow-300">
                Puntland State of Somalia
              </span>
              , our factory is strategically positioned for both domestic and
              international seafood supply.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 hover:bg-white/20">
                <MapPin className="h-16 w-16 text-yellow-300 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold mb-3">Location</h3>
                <p className="text-blue-100">Bosaso, Puntland State, Somalia</p>
              </div>
            </div>
            <div className="group text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 hover:bg-white/20">
                <Clock className="h-16 w-16 text-yellow-300 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold mb-3">Distance</h3>
                <p className="text-blue-100">60 km from Allula District</p>
              </div>
            </div>
            <div className="group text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 hover:bg-white/20">
                <Truck className="h-16 w-16 text-yellow-300 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold mb-3">Access</h3>
                <p className="text-blue-100">Direct Gulf of Aden Sea Access</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Star className="h-4 w-4 mr-2" />
            Ready to Partner?
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Interested in Our{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Factory Operations?
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Contact us today to learn more about our factory capabilities,
            production processes, and how we can meet your{" "}
            <span className="font-semibold text-blue-600">
              quality standards
            </span>{" "}
            and{" "}
            <span className="font-semibold text-blue-600">
              business requirements
            </span>
            .
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/contact"
              className="group bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center shadow-lg"
            >
              Get In Touch
              <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <a
              href="/products"
              className="group border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 inline-flex items-center"
            >
              View Our Products
              <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

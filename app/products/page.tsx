import Image from "next/image";
import {
  Fish,
  Heart,
  Shield,
  Zap,
  Star,
  Award,
  Globe,
  Truck,
  CheckCircle,
  ArrowRight,
  Package,
  Leaf,
} from "lucide-react";

export default function Products() {
  const products = [
    {
      name: "White-meat Tuna",
      description:
        "Our flagship product - delicious, fresh white-meat tuna that's our most popular offering. Packed with high-quality protein and omega-3 fatty acids, it's perfect for healthy meals and quick snacks.",
      features: [
        "High in protein",
        "Rich in omega-3s",
        "Fresh taste",
        "Most popular product",
        "Premium quality",
        "Sustainably sourced",
      ],
      icon: <Fish className="h-12 w-12" />,
      image: "/images/home/habo-home-1.png",
      color: "blue",
      badge: "Most Popular",
      highlights: [
        "48 tins per carton",
        "Shelf-stable",
        "Global distribution ready",
      ],
    },
    {
      name: "Sardines",
      description:
        "High in omega-3 fatty acids, our premium sardines are ideal for cardiovascular health and overall wellness. These nutrient-dense fish are perfect for heart-healthy diets and provide essential nutrients for active lifestyles.",
      features: [
        "High omega-3 content",
        "Cardiovascular health",
        "Nutrient dense",
        "Heart healthy",
        "Rich in minerals",
        "Low mercury",
      ],
      icon: <Heart className="h-12 w-12" />,
      image: "/images/home/habo-home-2.png",
      color: "green",
      badge: "Heart Healthy",
      highlights: ["Omega-3 rich", "Mineral packed", "Heart protective"],
    },
    {
      name: "Mackerel",
      description:
        "Protein-rich and flavorful, our mackerel is ideal for muscle repair and recovery. Perfect for athletes and health-conscious consumers seeking high-quality nutrition with exceptional taste and texture.",
      features: [
        "High protein content",
        "Muscle repair",
        "Great flavor",
        "Athletic performance",
        "Energy boost",
        "Rich in B vitamins",
      ],
      icon: <Zap className="h-12 w-12" />,
      image: "/images/home/habo-home-3.png",
      color: "purple",
      badge: "High Protein",
      highlights: ["Protein powerhouse", "Energy rich", "Athlete approved"],
    },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: "from-blue-500 to-blue-700",
        icon: "text-blue-600",
        badge: "bg-blue-100 text-blue-800",
        button: "bg-blue-600 hover:bg-blue-700",
        gradient: "from-blue-50 to-blue-100",
        border: "border-blue-200",
      },
      green: {
        bg: "from-green-500 to-green-700",
        icon: "text-green-600",
        badge: "bg-green-100 text-green-800",
        button: "bg-green-600 hover:bg-green-700",
        gradient: "from-green-50 to-green-100",
        border: "border-green-200",
      },
      purple: {
        bg: "from-purple-500 to-purple-700",
        icon: "text-purple-600",
        badge: "bg-purple-100 text-purple-800",
        button: "bg-purple-600 hover:bg-purple-700",
        gradient: "from-purple-50 to-purple-100",
        border: "border-purple-200",
      },
    };
    return colors[color as keyof typeof colors];
  };

  const benefits = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Heart Health",
      description:
        "Rich in omega-3s that support cardiovascular health and reduce inflammation",
      color: "from-red-500 to-red-600",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Energy Boost",
      description:
        "High-quality protein and B vitamins for sustained energy throughout the day",
      color: "from-yellow-500 to-yellow-600",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Immune Support",
      description:
        "Essential nutrients and minerals that strengthen your body's natural defenses",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: <Leaf className="h-8 w-8" />,
      title: "Sustainable",
      description:
        "Responsibly sourced from well-managed fisheries in the Gulf of Aden",
      color: "from-green-500 to-green-600",
    },
  ];

  const qualityFeatures = [
    {
      icon: <Package className="h-6 w-6" />,
      title: "Premium Packaging",
      description:
        "Advanced canning technology ensures freshness and long shelf life",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Global Standards",
      description: "Meets international food safety and quality standards",
    },
    {
      icon: <Truck className="h-6 w-6" />,
      title: "Worldwide Distribution",
      description:
        "Efficient logistics network for timely delivery to global markets",
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Quality Certified",
      description:
        "Rigorous testing and certification processes guarantee excellence",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[length:20px_20px] opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Star className="h-4 w-4 text-yellow-300 mr-2" />
              <span className="text-sm font-medium">Premium Quality</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our{" "}
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Premium Products
              </span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              From the pristine waters of the{" "}
              <span className="font-semibold text-yellow-300">
                Gulf of Aden
              </span>
              , we bring you{" "}
              <span className="font-semibold text-yellow-300">
                shelf-stable seafood products
              </span>{" "}
              that combine{" "}
              <span className="font-semibold text-yellow-300">health</span>,{" "}
              <span className="font-semibold text-yellow-300">nutrition</span>,
              and{" "}
              <span className="font-semibold text-yellow-300">convenience</span>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Key Benefits Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Why Choose Habo Tuna?
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Health, Nutrition & Convenience
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              All our products are designed with your health and convenience in
              mind, meeting the highest standards of quality and safety.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 h-full border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                  <div
                    className={`bg-gradient-to-br ${benefit.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <div className="text-white">{benefit.icon}</div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-center leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Our Product Line
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Premium Seafood Selection
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Each product is carefully crafted to deliver exceptional taste,
              nutrition, and quality that exceeds expectations.
            </p>
          </div>

          <div className="space-y-20">
            {products.map((product, index) => {
              const colors = getColorClasses(product.color);
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                    !isEven ? "lg:grid-flow-col-dense" : ""
                  }`}
                >
                  {/* Product Image */}
                  <div className={`${!isEven ? "lg:col-start-2" : ""}`}>
                    <div className="relative group">
                      <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl h-96 flex items-center justify-center shadow-2xl group-hover:scale-105 transition-transform duration-500 overflow-hidden">
                        <Image
                          src={product.image}
                          alt={product.name}
                          width={400}
                          height={400}
                          className="w-full h-full object-cover rounded-3xl"
                        />
                      </div>
                      <div className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full font-semibold shadow-lg">
                        {product.badge}
                      </div>
                    </div>
                  </div>

                  {/* Product Details */}
                  <div
                    className={`${
                      !isEven ? "lg:col-start-1 lg:row-start-1" : ""
                    }`}
                  >
                    <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 border border-gray-200 shadow-lg">
                      <div className="flex flex-col sm:flex-row items-start sm:items-center mb-6">
                        <div
                          className={`p-4 rounded-2xl bg-gradient-to-br ${colors.gradient} mb-4 sm:mb-0 sm:mr-6 overflow-hidden`}
                        >
                          <Image
                            src={product.image}
                            alt={product.name}
                            width={48}
                            height={48}
                            className="w-12 h-12 object-cover rounded-xl"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 break-words">
                            {product.name}
                          </h2>
                          <span
                            className={`inline-block ${colors.badge} text-sm font-semibold px-4 py-2 rounded-full`}
                          >
                            {product.badge}
                          </span>
                        </div>
                      </div>

                      <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                        {product.description}
                      </p>

                      <div className="mb-8">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                          Key Features:
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {product.features.map((feature, featureIndex) => (
                            <div
                              key={featureIndex}
                              className="flex items-center"
                            >
                              <div
                                className={`w-2 h-2 ${
                                  colors.button.split(" ")[0]
                                } rounded-full mr-3`}
                              ></div>
                              <span className="text-gray-700 font-medium">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-6 border border-gray-200">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                          <Package className="h-5 w-5 text-blue-500 mr-2" />
                          Product Highlights:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {product.highlights.map(
                            (highlight, highlightIndex) => (
                              <span
                                key={highlightIndex}
                                className="bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-700 border border-gray-200"
                              >
                                {highlight}
                              </span>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quality Assurance Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Quality Guarantee
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Uncompromising Quality Standards
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every product undergoes rigorous testing and quality control to
              ensure it meets our high standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {qualityFeatures.map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 h-full border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                  <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <div className="text-white">{feature.icon}</div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-center leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-[length:20px_20px] opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Star className="h-4 w-4 text-yellow-300 mr-2" />
            <span className="text-sm font-medium">
              Ready to Experience Quality?
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Interested in Our{" "}
            <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Premium Products?
            </span>
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Contact us today to learn more about our premium seafood products
            and how we can meet your{" "}
            <span className="font-semibold text-yellow-300">
              quality standards
            </span>{" "}
            and{" "}
            <span className="font-semibold text-yellow-300">
              business needs
            </span>
            .
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/contact"
              className="group bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 inline-flex items-center shadow-lg"
            >
              Get In Touch
              <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <a
              href="/about"
              className="group border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 transform hover:scale-105 inline-flex items-center backdrop-blur-sm"
            >
              Learn More About Us
              <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

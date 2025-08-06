import { Fish, Heart, Shield, Zap } from 'lucide-react';

export default function Products() {
  const products = [
    {
      name: "White-meat Tuna",
      description: "Our flagship product - delicious, fresh white-meat tuna that's our most popular offering. Packed with high-quality protein and omega-3 fatty acids, it's perfect for healthy meals and quick snacks.",
      features: ["High in protein", "Rich in omega-3s", "Fresh taste", "Most popular product"],
      icon: <Fish className="h-12 w-12" />,
      color: "blue",
      badge: "Most Popular"
    },
    {
      name: "Sardines",
      description: "High in omega-3 fatty acids, our premium sardines are ideal for cardiovascular health and overall wellness. These nutrient-dense fish are perfect for heart-healthy diets.",
      features: ["High omega-3 content", "Cardiovascular health", "Nutrient dense", "Heart healthy"],
      icon: <Heart className="h-12 w-12" />,
      color: "green",
      badge: "Heart Healthy"
    },
    {
      name: "Mackerel",
      description: "Protein-rich and flavorful, our mackerel is ideal for muscle repair and recovery. Perfect for athletes and health-conscious consumers seeking high-quality nutrition.",
      features: ["High protein content", "Muscle repair", "Great flavor", "Athletic performance"],
      icon: <Zap className="h-12 w-12" />,
      color: "purple",
      badge: "High Protein"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: "from-blue-400 to-blue-600",
        icon: "text-blue-600",
        badge: "bg-blue-100 text-blue-800",
        button: "bg-blue-600 hover:bg-blue-700"
      },
      green: {
        bg: "from-green-400 to-green-600", 
        icon: "text-green-600",
        badge: "bg-green-100 text-green-800",
        button: "bg-green-600 hover:bg-green-700"
      },
      purple: {
        bg: "from-purple-400 to-purple-600",
        icon: "text-purple-600", 
        badge: "bg-purple-100 text-purple-800",
        button: "bg-purple-600 hover:bg-purple-700"
      }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Premium Products</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              From the pristine waters of the Gulf of Aden, we bring you shelf-stable seafood products that combine health, nutrition, and convenience.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {products.map((product, index) => {
              const colors = getColorClasses(product.color);
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Product Image/Icon */}
                  <div className={`${!isEven ? 'lg:col-start-2' : ''}`}>
                    <div className={`bg-gradient-to-br ${colors.bg} rounded-lg h-80 flex items-center justify-center text-white`}>
                      {product.icon}
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className={`${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    <div className="flex items-center mb-4">
                      <div className={`p-3 rounded-full bg-gray-100 mr-4`}>
                        <div className={colors.icon}>{product.icon}</div>
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-gray-900">{product.name}</h2>
                        <span className={`inline-block ${colors.badge} text-sm font-medium px-3 py-1 rounded-full mt-2`}>
                          {product.badge}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-lg text-gray-600 mb-6">
                      {product.description}
                    </p>
                    
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Features:</h3>
                      <ul className="space-y-2">
                        {product.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center">
                            <div className={`w-2 h-2 ${colors.button.split(' ')[0]} rounded-full mr-3`}></div>
                            <span className="text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Health Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Health, Nutrition & Convenience</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              All our products are designed with your health and convenience in mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Health</h3>
              <p className="text-gray-600">
                Rich in omega-3s, Habo Tuna products support heart and brain function for optimal health.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Nutrition</h3>
              <p className="text-gray-600">
                High-protein products help in muscle growth and recovery for an active lifestyle.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Convenience</h3>
              <p className="text-gray-600">
                Shelf-stable tins ideal for global distribution and quick, nutritious meals anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Interested in Our Products?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us today to learn more about our premium seafood products and how we can meet your needs.
          </p>
          <a 
            href="/contact" 
            className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 inline-block"
          >
            Get In Touch
          </a>
        </div>
      </section>
    </div>
  );
}
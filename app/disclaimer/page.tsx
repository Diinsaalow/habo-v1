import { AlertTriangle, ExternalLink, Info, Scale, Globe, Shield } from 'lucide-react';

export default function Disclaimer() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <AlertTriangle className="h-16 w-16 text-blue-200 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Disclaimer</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Important information regarding the use of our website and services. Please read carefully.
            </p>
          </div>
        </div>
      </section>

      {/* Disclaimer Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* General Disclaimer */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <Info className="h-8 w-8 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">General Disclaimer</h2>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <p className="text-gray-700 mb-4">
                The information contained on this website is for general purposes only. Habo Tuna Factory makes no representations 
                or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or 
                availability with respect to the website or the information, products, services, or related graphics contained 
                on the website for any purpose.
              </p>
              <p className="text-gray-700">
                Any reliance you place on such information is therefore strictly at your own risk. In no event will Habo Tuna Factory 
                be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss 
                or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website.
              </p>
            </div>
          </div>

          {/* Website Content */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <Globe className="h-8 w-8 text-green-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Website Content</h2>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Information Accuracy</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                <li>All information on this website is provided in good faith and for general information purposes only</li>
                <li>Product specifications, prices, and availability are subject to change without prior notice</li>
                <li>We strive to keep information current but cannot guarantee its accuracy at all times</li>
                <li>Users should verify critical information independently before making decisions</li>
              </ul>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Content Updates</h3>
              <p className="text-gray-700">
                Website content, including product information, company details, and policies, may be updated, modified, or removed 
                at any time without prior notice. Users are responsible for regularly checking for updates to ensure they have 
                the most current information.
              </p>
            </div>
          </div>

          {/* External Links */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <ExternalLink className="h-8 w-8 text-purple-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">External Links</h2>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <p className="text-gray-700 mb-4">
                This website may contain links to external websites that are not provided or maintained by Habo Tuna Factory. 
                Please note that we do not guarantee the accuracy, relevance, timeliness, or completeness of any information 
                on these external websites.
              </p>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-yellow-800 mb-2">Important Notice:</h3>
                <ul className="list-disc list-inside space-y-1 text-yellow-700 text-sm">
                  <li>We are not responsible for the content, privacy policies, or practices of external sites</li>
                  <li>External links are provided for convenience and information purposes only</li>
                  <li>Inclusion of any external link does not imply endorsement by Habo Tuna Factory</li>
                  <li>Users access external sites at their own risk</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Product Information */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <Shield className="h-8 w-8 text-orange-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Product Information</h2>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Product Specifications</h3>
              <p className="text-gray-700 mb-4">
                While we make every effort to ensure product information is accurate and up-to-date, specifications, 
                ingredients, nutritional information, and other product details may vary and are subject to change without notice.
              </p>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Health and Nutritional Claims</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                <li>Nutritional information provided is based on standard analysis and may vary by batch</li>
                <li>Health benefits mentioned are general and may not apply to all individuals</li>
                <li>Consumers with specific dietary requirements should consult healthcare professionals</li>
                <li>Product labels should be checked for the most current and accurate information</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-900 mb-3">Availability and Pricing</h3>
              <p className="text-gray-700">
                Product availability and pricing information displayed on the website may not reflect real-time inventory 
                or current market prices. Contact us directly for the most accurate availability and pricing information.
              </p>
            </div>
          </div>

          {/* Legal Limitations */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <Scale className="h-8 w-8 text-red-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Legal Limitations</h2>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Limitation of Liability</h3>
              <p className="text-gray-700 mb-4">
                To the fullest extent permitted by law, Habo Tuna Factory shall not be liable for any direct, indirect, 
                incidental, special, consequential, or punitive damages arising from or related to your use of this website, 
                including but not limited to:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 mb-6">
                <li>Loss of profits, revenue, or business opportunities</li>
                <li>Loss of data or corruption of systems</li>
                <li>Personal injury or property damage</li>
                <li>Third-party claims or demands</li>
                <li>Any other losses, whether foreseeable or not</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-900 mb-3">Indemnification</h3>
              <p className="text-gray-700">
                Users agree to indemnify and hold harmless Habo Tuna Factory, its officers, directors, employees, and agents 
                from any claims, damages, losses, or expenses arising from their use of the website or violation of these terms.
              </p>
            </div>
          </div>

          {/* Technical Disclaimer */}
          <div className="mb-12">
            <div className="flex items-center mb-6">
              <Globe className="h-8 w-8 text-indigo-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Technical Disclaimer</h2>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Website Availability</h3>
              <p className="text-gray-700 mb-4">
                While we strive to ensure continuous website availability, we cannot guarantee uninterrupted access. 
                The website may be temporarily unavailable due to:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 mb-6">
                <li>Scheduled maintenance and updates</li>
                <li>Technical difficulties or server issues</li>
                <li>Network or internet service provider problems</li>
                <li>Force majeure events beyond our control</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-900 mb-3">Browser Compatibility</h3>
              <p className="text-gray-700">
                This website is designed to work with modern web browsers. While we test across multiple platforms, 
                we cannot guarantee full compatibility with all browsers, devices, or operating systems.
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gray-900 text-white rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Questions About This Disclaimer</h2>
            <p className="text-gray-300 mb-6">
              If you have any questions about this disclaimer or need clarification on any matters related to our website, 
              please don't hesitate to contact us:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">Email:</h3>
                <a href="mailto:sales@habotuna.com" className="text-blue-400 hover:underline">sales@habotuna.com</a>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Phone:</h3>
                <p className="text-gray-300">+252 50 5817300</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Address:</h3>
                <p className="text-gray-300">Habo Tuna Factory<br />Bosaso, Puntland State, Somalia</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Website:</h3>
                <p className="text-gray-300">www.habotuna.com</p>
              </div>
            </div>
          </div>

          {/* Last Updated */}
          <div className="mt-12 text-center">
            <p className="text-gray-500 text-sm">
              <strong>Last Updated:</strong> January 2025
            </p>
            <p className="text-gray-500 text-sm mt-2">
              This disclaimer is subject to change without notice. Please review this page periodically for updates.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
import { Shield, Eye, Lock, Bell, Database, Globe } from 'lucide-react';

export default function Privacy() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Shield className="h-16 w-16 text-blue-200 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose max-w-none">
            
            {/* Information We Collect */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <Database className="h-8 w-8 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Information We Collect</h2>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <p className="text-gray-700 mb-4">
                  Habo Tuna Factory collects personal data to improve our services and provide you with the best possible experience. The types of information we may collect include:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li><strong>Personal Information:</strong> Name, email address, phone number, and company details</li>
                  <li><strong>Technical Information:</strong> IP address, browser type, device information, and website usage data</li>
                  <li><strong>Communication Data:</strong> Messages sent through contact forms, emails, and other communications</li>
                  <li><strong>Cookies:</strong> Small files stored on your device to enhance website functionality</li>
                </ul>
              </div>
            </div>

            {/* How We Use Your Information */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <Eye className="h-8 w-8 text-green-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">How We Use Your Information</h2>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <p className="text-gray-700 mb-4">
                  We use the collected information for various purposes to provide and improve our services:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li><strong>Communication:</strong> To respond to your inquiries, provide customer support, and send important updates</li>
                  <li><strong>Marketing:</strong> To send you information about our products, services, and promotional offers (with your consent)</li>
                  <li><strong>Analytics:</strong> To understand how our website is used and improve user experience</li>
                  <li><strong>Business Operations:</strong> To process orders, manage accounts, and conduct business transactions</li>
                  <li><strong>Legal Compliance:</strong> To comply with applicable laws, regulations, and legal processes</li>
                </ul>
              </div>
            </div>

            {/* Data Security */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <Lock className="h-8 w-8 text-purple-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Data Security</h2>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <p className="text-gray-700 mb-4">
                  We take the security of your personal information seriously and implement appropriate measures to protect it:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Use of secure servers and encrypted connections for data transmission</li>
                  <li>Regular security audits and updates to our systems</li>
                  <li>Limited access to personal information on a need-to-know basis</li>
                  <li>Staff training on data protection and security best practices</li>
                </ul>
                <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <p className="text-yellow-800 text-sm">
                    <strong>Important:</strong> While we implement security measures to protect your information, 
                    we cannot guarantee 100% security for online data transmission. Please be cautious when 
                    sharing sensitive information online.
                  </p>
                </div>
              </div>
            </div>

            {/* Cookies */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <Globe className="h-8 w-8 text-orange-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Cookies and Tracking</h2>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <p className="text-gray-700 mb-4">
                  Our website uses cookies to enhance your browsing experience and provide personalized content:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li><strong>Essential Cookies:</strong> Required for basic website functionality</li>
                  <li><strong>Analytics Cookies:</strong> Help us understand website usage and improve performance</li>
                  <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                  <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements and track marketing effectiveness</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  You can control cookie settings through your browser preferences, though disabling certain cookies may affect website functionality.
                </p>
              </div>
            </div>

            {/* Data Sharing */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <Bell className="h-8 w-8 text-red-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Data Sharing and Disclosure</h2>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <p className="text-gray-700 mb-4">
                  We do not sell, trade, or rent your personal information to third parties. However, we may share your information in the following circumstances:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li><strong>Service Providers:</strong> With trusted partners who assist in operating our website and conducting business</li>
                  <li><strong>Legal Requirements:</strong> When required by law, court order, or to protect our rights and safety</li>
                  <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of business assets</li>
                  <li><strong>Consent:</strong> When you have given explicit consent for sharing your information</li>
                </ul>
              </div>
            </div>

            {/* Your Rights */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <Shield className="h-8 w-8 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Your Rights</h2>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <p className="text-gray-700 mb-4">
                  You have certain rights regarding your personal information:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li><strong>Access:</strong> Request access to the personal information we hold about you</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal requirements)</li>
                  <li><strong>Portability:</strong> Request a copy of your information in a structured format</li>
                  <li><strong>Objection:</strong> Object to certain types of processing of your information</li>
                  <li><strong>Withdrawal:</strong> Withdraw consent for marketing communications at any time</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  To exercise these rights, please contact us at <a href="mailto:sales@habotuna.com" className="text-blue-600 hover:underline">sales@habotuna.com</a>.
                </p>
              </div>
            </div>

            {/* Policy Updates */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Policy Updates</h2>
              <div className="bg-blue-50 rounded-lg p-6">
                <p className="text-gray-700 mb-4">
                  We may update this Privacy Policy from time to time to reflect changes in our practices, services, or applicable laws. When we make changes:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>We will post the updated policy on our website</li>
                  <li>We will update the "Last Updated" date at the top of this policy</li>
                  <li>For significant changes, we may notify you via email or website notification</li>
                  <li>Your continued use of our services after changes constitutes acceptance of the updated policy</li>
                </ul>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-gray-900 text-white rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Contact Us About Privacy</h2>
              <p className="text-gray-300 mb-6">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
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
                  <h3 className="font-semibold mb-2">Business Hours:</h3>
                  <p className="text-gray-300">Sunday - Thursday: 8:00 AM - 6:00 PM<br />Friday: 8:00 AM - 12:00 PM</p>
                </div>
              </div>
            </div>

            {/* Last Updated */}
            <div className="mt-12 text-center">
              <p className="text-gray-500 text-sm">
                <strong>Last Updated:</strong> January 2025
              </p>
              <p className="text-gray-500 text-sm mt-2">
                This Privacy Policy is effective as of the date listed above and applies to all information collected by Habo Tuna Factory.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
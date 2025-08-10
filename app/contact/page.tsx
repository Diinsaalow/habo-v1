"use client";
import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Star,
  ArrowRight,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    productInterest: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We will get back to you soon.");
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const offices = [
    {
      title: "Head Office",
      location: "Somalia",
      address: "Bosaso, Puntland State, Somalia",
      email: "sales@habotuna.com",
      phone: "+252 50 5817300",
      additionalPhone: "+252 906 794 251",
    },
  ];

  const salesEnquiries = [
    { country: "Somalia", phone: "+252 907 798231" },
    { country: "UAE", phone: "+971 50 4508715" },
    { country: "Oman", phone: "+968 99 655914" },
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
              Get In Touch
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Contact{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Us
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Get in touch with us for any inquiries about our{" "}
              <span className="font-semibold text-yellow-300">
                premium seafood products
              </span>
              . We're here to help you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Let's Connect
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Get In Touch
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We'd love to hear from you. Reach out to us for product inquiries,
              business opportunities, or any questions you might have.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="group">
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 h-full border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Send us a Message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="productInterest"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Product Interest
                    </label>
                    <select
                      id="productInterest"
                      name="productInterest"
                      value={formData.productInterest}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select a product</option>
                      <option value="white-meat-tuna">White-meat Tuna</option>
                      <option value="sardines">Sardines</option>
                      <option value="mackerel">Mackerel</option>
                      <option value="all-products">All Products</option>
                      <option value="wholesale">Wholesale Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Tell us about your inquiry..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 px-6 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 flex items-center justify-center group-hover:shadow-lg transform group-hover:-translate-y-1"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Head Office */}
              <div className="group">
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 h-full border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Head Office
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white w-12 h-12 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <MapPin className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-gray-900 font-semibold text-lg">
                          Bosaso, Puntland State, Somalia
                        </p>
                        <p className="text-gray-600">
                          60 km from Allula District
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="bg-gradient-to-br from-green-500 to-green-600 text-white w-12 h-12 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <Mail className="h-6 w-6" />
                      </div>
                      <a
                        href="mailto:sales@habotuna.com"
                        className="text-blue-600 hover:text-blue-700 font-medium text-lg transition-colors duration-300"
                      >
                        sales@habotuna.com
                      </a>
                    </div>
                    <div className="flex items-center">
                      <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white w-12 h-12 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <Phone className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-gray-900 font-semibold text-lg">
                          +252 50 5817300
                        </p>
                        <p className="text-gray-600">+252 906 794 251</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sales Enquiries */}
              <div className="group">
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border border-gray-200 hover:border-green-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Sales Enquiries
                  </h3>
                  <div className="space-y-4">
                    {salesEnquiries.map((enquiry, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center p-3 bg-white rounded-xl border border-gray-100 hover:border-green-200 transition-all duration-300"
                      >
                        <span className="font-semibold text-gray-900">
                          {enquiry.country}:
                        </span>
                        <a
                          href={`tel:${enquiry.phone}`}
                          className="text-green-600 hover:text-green-700 font-medium transition-colors duration-300"
                        >
                          {enquiry.phone}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50 w-full">
        <div className="w-full px-0">
          <div className="text-center mb-16 px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Our Location
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Find Us
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Located strategically near the Gulf of Aden Sea for optimal
              seafood sourcing and distribution.
            </p>
          </div>

          {/* Embedded Google Map */}
          <div className="group w-full">
            <div className="bg-white shadow-xl overflow-hidden border-0 w-full">
              <div className="h-[600px] w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4088.1234567890123!2d50.5187087!3d11.7832717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3dbe7b5c4b7c1fcd%3A0xeb86af01b3eeae4d!2sHabo%20Tuna%20Factory!5e0!3m2!1sen!2sso!4v1234567890123!5m1!1e1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Habo Tuna Factory - Bosaso, Puntland State, Somalia"
                  className="w-full h-full"
                ></iframe>
              </div>
              <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 border-t border-blue-100  mx-auto">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white w-10 h-10 rounded-2xl flex items-center justify-center mr-3 shadow-lg">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">
                        Habo Tuna Factory
                      </p>
                      <p className="text-sm text-gray-600">
                        Bosaso, Puntland State, Somalia
                      </p>
                    </div>
                  </div>
                  <a
                    href="https://www.google.com/maps/place/Habo+Tuna+Factory/@11.7832717,50.5187087,17z/data=!3m1!4b1!4m6!3m5!1s0x3dbe7b5c4b7c1fcd:0xeb86af01b3eeae4d!8m2!3d11.7832717!4d50.5187087!16s%2Fg%2F11wg2mvj1k?entry=ttu&g_ep=EgoyMDI1MDgwNi4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-300 flex items-center"
                  >
                    <ArrowRight className="h-4 w-4 mr-1" />
                    Open in Maps
                  </a>
                </div>
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
              Premium Products?
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Let's discuss how we can meet your seafood needs and establish a
            long-term business relationship.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 flex items-center justify-center group hover:shadow-lg transform hover:-translate-y-1">
              Get In Touch
              <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold border-2 border-blue-600 hover:bg-blue-50 transition-all duration-300 flex items-center justify-center group hover:shadow-lg transform hover:-translate-y-1">
              View Our Products
              <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

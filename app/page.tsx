import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Award,
  Globe,
  Heart,
  FileText,
  Download,
  MapPin,
  Mail,
  Phone,
  Quote,
  CheckCircle,
} from "lucide-react";

export default function Home() {
  const certificates = [
    {
      label: "Registration Certificate",
      file: "/assets/home/habotuna-certification-of-registration.pdf",
      thumbnail: "/images/home/habo-home-1.png", // Using existing image as placeholder
    },
    {
      label: "Dubai Test Report",
      file: "/assets/home/habotuna-dubai-test-report.pdf",
      thumbnail: "/images/home/habo-home-2.png", // Using existing image as placeholder
    },
    {
      label: "Ethiopia Test Report",
      file: "/assets/home/habotuna-ethopia-test-report.pdf",
      thumbnail: "/images/home/habo-home-3.png", // Using existing image as placeholder
    },
    {
      label: "Oman Test Report",
      file: "/assets/home/habotuna-oman-test-report.pdf",
      thumbnail: "/images/home/habo-home-4.png", // Using existing image as placeholder
    },
    {
      label: "SGS Test Report",
      file: "/assets/home/habotuna-sgs-test-report.pdf",
      thumbnail: "/images/home/habo-home-5.png", // Using existing image as placeholder
    },
  ];

  return (
    <div>
      {/* Hero Section with background imagery */}
      <section className="relative h-[70vh] min-h-[480px] w-full overflow-hidden">
        <Image
          src="/images/home/habo-home-1.png"
          alt="Habo Tuna Factory processing"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-end pb-12">
          <div>
            <p className="text-blue-200 uppercase tracking-widest text-sm md:text-base mb-2">
              Habo Fish Processing & Canning Factory
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Welcome to Habo Tuna Factory
            </h1>
            <p className="text-blue-100 mt-4 max-w-2xl text-lg md:text-xl">
              The tastiest fish in town — Tuna, Sardines, Mackerel and specialty
              seafood from the Gulf of Aden.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/products"
                className="bg-white text-blue-700 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition inline-flex items-center"
              >
                View Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/contact"
                className="bg-blue-600/80 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition inline-flex items-center"
              >
                Enquire Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section (modernized from legacy) */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-blue-600 font-semibold tracking-wide">About</p>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Habo Tuna Factory
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We are a leading producer, distributor and marketer of
                shelf-stable seafood products including white‑meat tuna,
                sardines, mackerel and specialty seafood. Our factory is located
                near the Gulf of Aden Sea, 60 km from Allula district in
                Puntland State of Somalia.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="bg-blue-50 rounded-lg p-5 text-center">
                  <Award className="h-7 w-7 text-blue-600 mx-auto mb-2" />
                  <p className="text-sm text-gray-700">International Quality</p>
                </div>
                <div className="bg-green-50 rounded-lg p-5 text-center">
                  <Globe className="h-7 w-7 text-green-600 mx-auto mb-2" />
                  <p className="text-sm text-gray-700">Regional Exports</p>
                </div>
                <div className="bg-red-50 rounded-lg p-5 text-center">
                  <Heart className="h-7 w-7 text-red-600 mx-auto mb-2" />
                  <p className="text-sm text-gray-700">Health & Nutrition</p>
                </div>
              </div>
            </div>
            <div>
              <div className="grid grid-cols-3 gap-4">
                {[
                  "/images/home/habo-home-2.png",
                  "/images/home/habo-home-3.png",
                  "/images/home/habo-home-4.png",
                  "/images/home/habo-home-5.png",
                  "/images/home/habo-home-6.png",
                  "/images/home/habo-home-7.png",
                ].map((src, i) => (
                  <div
                    key={src}
                    className={`relative aspect-[4/3] rounded-lg overflow-hidden ${
                      i % 2 === 0 ? "mt-4" : ""
                    }`}
                  >
                    <Image
                      src={src}
                      alt="Habo tuna collage"
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Factory Gallery (blue band) */}
      <section className="py-16 bg-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Our Factory
            </h2>
            <p className="text-blue-200 max-w-2xl mx-auto">
              Located on the Gulf of Aden Sea in Somalia — a modern processing
              and canning facility.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "/images/home/habo-home-8.png",
              "/images/home/habo-home-9.png",
              "/images/home/habo-home-10.png",
              "/images/home/habo-home-11.png",
              "/images/home/habo-home-12.png",
              "/images/home/habo-home-13.png",
              "/images/home/habo-home-14.png",
              "/images/home/habo-home-15.png",
              "/images/home/habo-home-16.png",
              "/images/home/habo-home-17.png",
              "/images/home/habo-home-18.png",
              "/images/home/habo-home-19.png",
            ].map((src) => (
              <div
                key={src}
                className="relative aspect-video rounded-md overflow-hidden ring-1 ring-white/10"
              >
                <Image
                  src={src}
                  alt="Factory gallery"
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/factory"
              className="inline-block bg-white/10 hover:bg-white/20 text-white backdrop-blur px-6 py-3 rounded-full transition"
            >
              More Info
            </Link>
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
              From the pristine waters of the Gulf of Aden, we bring you
              shelf-stable seafood products that combine health, nutrition, and
              convenience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* White-meat Tuna */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative h-48">
                <Image
                  src="/images/home/habo-home-23.png"
                  alt="White‑meat Tuna"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">White-meat Tuna</h3>
                <p className="text-gray-600 mb-4">
                  Our most popular product - delicious, fresh white-meat tuna
                  packed with protein and omega-3s.
                </p>
                <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                  Most Popular
                </span>
              </div>
            </div>

            {/* Sardines */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative h-48">
                <Image
                  src="/images/home/habo-home-12.png"
                  alt="Sardines"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Sardines</h3>
                <p className="text-gray-600 mb-4">
                  High in omega-3 fatty acids, our sardines are ideal for
                  cardiovascular health and overall wellness.
                </p>
                <span className="inline-block bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                  Heart Healthy
                </span>
              </div>
            </div>

            {/* Mackerel */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative h-48">
                <Image
                  src="/images/home/habo-home-18.png"
                  alt="Mackerel"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Mackerel</h3>
                <p className="text-gray-600 mb-4">
                  Protein-rich and flavorful, our mackerel is ideal for muscle
                  repair and recovery.
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

      {/* Health, Nutrition, Convenience (mosaic) */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Health • Nutrition • Convenience
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Health */}
            <div className="bg-gray-50 rounded-lg p-8 order-1">
              <h3 className="text-xl font-semibold mb-3">Health</h3>
              <p className="text-gray-600">
                Top-quality ingredients, omega‑3 rich and naturally high in
                protein. Sardines and tuna are nutritious staples that help
                support cardiovascular and brain health.
              </p>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                  Produced under internationally recognized food-safety programs
                  and third‑party tested.
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                  Naturally low in saturated fat and free from unnecessary
                  additives.
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                  Responsibly sourced from the Gulf of Aden region.
                </li>
              </ul>
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden order-2">
              <Image
                src="/images/home/habo-home-20.png"
                alt="Health"
                fill
                className="object-cover"
              />
            </div>

            {/* Nutrition */}
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden md:order-3 order-4">
              <Image
                src="/images/home/habo-home-21.png"
                alt="Nutrition"
                fill
                className="object-cover"
              />
            </div>
            <div className="bg-gray-50 rounded-lg p-8 md:order-4 order-3">
              <h3 className="text-xl font-semibold mb-3">Nutrition</h3>
              <p className="text-gray-600">
                Tuna is 100% pure protein, while sardines give muscle the amino
                acids and minerals required to build, repair and stay strong.
              </p>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  Rich in omega‑3 (EPA & DHA) for heart and cognitive support.
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  Excellent source of high‑quality protein for strength and
                  recovery.
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  Naturally provides key micronutrients such as vitamin B12,
                  vitamin D and selenium.
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                  Sardines with bones are a convenient source of calcium.
                </li>
              </ul>
            </div>

            {/* Convenience */}
            <div className="bg-gray-50 rounded-lg p-8 order-5">
              <h3 className="text-xl font-semibold mb-3">Convenience</h3>
              <p className="text-gray-600">
                Shelf‑stable tins, ready to enjoy and easy to transport. Trusted
                across home kitchens, hospitality and aid programs worldwide.
              </p>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5" />
                  Ambient storage with long shelf life for reliable supply
                  chains.
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5" />
                  Assorted pack sizes suitable for retail and food‑service.
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-purple-600 mt-0.5" />
                  Versatile for salads, sandwiches, pasta and hot dishes.
                </li>
              </ul>
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden order-6">
              <Image
                src="/images/home/habo-home-22.png"
                alt="Convenience"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Certificates strip */}
      <section id="certificates" className="py-16 bg-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Certificates & Test Reports
            </h2>
            <p className="text-blue-200 mt-2">
              Click on any certificate to view the full document.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {certificates.map((cert) => (
              <div key={cert.file} className="group cursor-pointer">
                <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-white/10 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                  <Image
                    src={cert.thumbnail}
                    alt={cert.label}
                    fill
                    className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <p className="text-white text-sm font-medium truncate">
                      {cert.label}
                    </p>
                    <p className="text-blue-200 text-xs">Click to view</p>
                  </div>
                  <div className="absolute top-2 right-2 bg-white/20 rounded-full p-2">
                    <FileText className="h-4 w-4 text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Managing Director Testimonial */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Profile Image Side */}
              <div className="relative h-64 lg:h-full min-h-[400px] overflow-hidden">
                <Image
                  src="/images/home/habo-home-25.png"
                  alt="Managing Director - Habo Tuna Factory"
                  fill
                  className="object-cover"
                />
                {/* Blue gradient overlay */}
                {/* <div className="absolute inset-0 bg-gradient-to-br from-blue-600/80 to-blue-800/80"></div> */}

                {/* Quote icon overlay */}
                <div className="absolute bottom-6 right-6 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Quote className="h-6 w-6 text-white" />
                </div>

                {/* Decorative elements */}
                <div className="absolute top-6 left-6 w-16 h-16 border-2 border-white/20 rounded-full"></div>
                <div className="absolute bottom-6 left-6 w-12 h-12 border-2 border-white/20 rounded-full"></div>
                <div className="absolute top-1/2 right-8 w-2 h-2 bg-white/30 rounded-full"></div>
                <div className="absolute top-1/3 left-12 w-1 h-1 bg-white/40 rounded-full"></div>
              </div>

              {/* Quote Content Side */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="mb-6">
                  <Quote className="h-12 w-12 text-blue-200 mb-4" />
                  <blockquote className="text-xl md:text-2xl text-gray-800 font-medium leading-relaxed mb-6">
                    "Consumers have come to know Habo Tuna as synonymous with
                    health, nutrition and convenience through the variety of
                    seafood products the company provides."
                  </blockquote>
                </div>

                <div className="border-l-4 border-blue-500 pl-4">
                  <div className="text-lg font-semibold text-gray-900 mb-1">
                    Ahmed Hassan Mohamed
                  </div>
                  <div className="text-blue-600 font-medium mb-2">
                    Managing Director
                  </div>
                  <div className="text-sm text-gray-600">
                    Habo Fish Processing & Canning Factory
                  </div>
                </div>

                {/* Additional credibility elements */}
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="flex items-center text-sm text-gray-500">
                    <Award className="h-4 w-4 mr-2" />
                    <span>
                      Over 15 years of experience in seafood processing
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Block */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Contact Us
              </h2>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-center">
                  <MapPin className="h-5 w-5 text-blue-600 mr-3" />
                  Bosaso, Puntland State, Somalia
                </li>
                <li className="flex items-center">
                  <Mail className="h-5 w-5 text-blue-600 mr-3" />
                  sales@habotuna.com
                </li>
                <li className="flex items-center">
                  <Phone className="h-5 w-5 text-blue-600 mr-3" />
                  +252 50 5817300
                </li>
              </ul>
              <Link
                href="/contact"
                className="inline-flex items-center mt-8 bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
              >
                Send an Enquiry
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="relative aspect-[16/9] rounded-lg overflow-hidden">
              <Image
                src="/images/home/habo-home-24.png"
                alt="Habo Tuna factory exterior"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import React, { useState } from "react";
import {
  GraduationCap,
  Globe2,
  DollarSign,
  Award,
  BookOpen,
  CheckCircle2,
  Send,
  ArrowRight,
  Linkedin,
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
} from "lucide-react";
import Navbar from "./components/Navbar";
import background from "./assets/background.jpg";
import CountUp from "react-countup";

// Update the benefits array at the top of your file
const benefits = [
  {
    icon: <Globe2 className="w-12 h-12 text-blue-600 dark:text-blue-400" />,
    title: "Global Recognition",
    description:
      "Degrees recognized worldwide with opportunities to practice internationally",
    image:
      "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=800",
  },
  {
    icon: <DollarSign className="w-12 h-12 text-blue-600 dark:text-blue-400" />,
    title: "Affordable Education",
    description: "Quality medical education at a fraction of domestic costs",
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800",
  },
  {
    icon: <Award className="w-12 h-12 text-blue-600 dark:text-blue-400" />,
    title: "Quality Education",
    description: "World-class facilities and experienced faculty members",
    image:
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=800",
  },
  {
    icon: <BookOpen className="w-12 h-12 text-blue-600 dark:text-blue-400" />,
    title: "Clinical Experience",
    description: "Extensive practical training and hands-on clinical exposure",
    image:
      "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=800",
  },
];

const countries = [
  {
    name: "Russia",
    details: "Top medical universities with modern infrastructure",
    image:
      "https://images.unsplash.com/photo-1513326738677-b964603b136d?auto=format&fit=crop&w=800",
  },
  {
    name: "Kazakhstan",
    details: "Affordable education with high teaching standards",
    image:
      "https://images.unsplash.com/photo-1558588942-930faae5a389?auto=format&fit=crop&w=800",
  },
  {
    name: "Philippines",
    details: "US-based curriculum with English medium instruction",
    image:
      "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=800",
  },
  {
    name: "Georgia",
    details: "European standard education at competitive costs",
    image:
      "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=800",
  },
  {
    name: "Uzbekistan",
    details: "Modern medical facilities with rich cultural experience",
    image:
      "https://images.unsplash.com/photo-1528132596460-787bb7adfd5f?auto=format&fit=crop&w=800",
  },
  {
    name: "Egypt",
    details: "Historic excellence in medical education",
    image:
      "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?auto=format&fit=crop&w=800",
  },
];

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      <Navbar />

      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img
            src={background}
            alt="Medical students"
            className="w-full h-full object-fit  rounded-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-blue-900/80 to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100/20 rounded-full backdrop-blur-sm">
                <span className=" w-2 h-2 bg-blue-100 rounded-full mr-2"></span>
                <p className="text-blue-100 font-medium">
                  Begin Your Medical Journey
                </p>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-white space-y-3">
                <span className="block">Study MBBS</span>
                <span className="block text-blue-400">Abroad</span>
              </h1>
              <p className="text-xl text-gray-200 max-w-xl leading-relaxed">
                Begin your journey to become a medical professional with
                world-class education from prestigious international
                universities.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#apply"
                  className="inline-flex items-center px-8 py-3 text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl shadow-blue-500/25"
                >
                  Apply Now <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <a
                  href="#benefits"
                  className="inline-flex items-center px-8 py-3 text-lg font-medium text-white hover:text-blue-400 border-2 border-white hover:border-blue-400 rounded-lg transition duration-300"
                >
                  Learn More
                </a>
              </div>
              <div className="flex items-center gap-8 pt-8">
                <div className="text-white text-center">
                  <div className="text-3xl font-bold">
                    <CountUp
                      end={50}
                      suffix="+"
                      duration={2.5}
                      enableScrollSpy
                      scrollSpyOnce
                    />
                  </div>
                  <div className="text-sm text-gray-300">Universities</div>
                </div>
                <div className="text-white text-center">
                  <div className="text-3xl font-bold">
                    <CountUp
                      end={10}
                      suffix="k+"
                      duration={2.5}
                      enableScrollSpy
                      scrollSpyOnce
                    />
                  </div>
                  <div className="text-sm text-gray-300">Students</div>
                </div>
                <div className="text-white text-center">
                  <div className="text-3xl font-bold">
                    <CountUp
                      end={15}
                      suffix="+"
                      duration={2.5}
                      enableScrollSpy
                      scrollSpyOnce
                    />
                  </div>
                  <div className="text-sm text-gray-300">Countries</div>
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              {/* Add decorative elements or additional content here */}
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <section
        id="benefits"
        className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Why Study MBBS Abroad?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-gray-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={benefit.image}
                    alt={benefit.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 group-hover:to-black/70 transition-colors duration-300" />
                  <div className="absolute bottom-4 left-4 text-white">
                    {benefit.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Countries Section */}
      <section
        id="countries"
        className="py-20 dark:bg-gray-900 transition-colors duration-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Top Destinations for MBBS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {countries.map((country, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-xl shadow-lg"
              >
                <img
                  src={country.image}
                  alt={country.name}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent">
                  <div className="absolute bottom-0 p-6">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {country.name}
                    </h3>
                    <p className="text-gray-200 text-sm opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      {country.details}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Process Section */}
      <section
        id="process"
        className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Admission Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
              <div className="flex items-center mb-4">
                <span className="w-10 h-10 bg-blue-600 dark:bg-blue-500 text-white rounded-full flex items-center justify-center font-bold ">
                  1
                </span>
                <h3 className="text-xl font-semibold ml-3 dark:text-white">
                  Initial Application
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Fill out the online application form and submit basic documents
                including academic transcripts
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-2" />
              </p>
            </div>

            <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
              <div className="flex items-center mb-4">
                <span className="w-10 h-10 bg-blue-600 dark:bg-blue-500 text-white rounded-full flex items-center justify-center font-bold ">
                  2
                </span>
                <h3 className="text-xl font-semibold ml-3 dark:text-white">
                  Document Verification
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Our team validates your academic credentials and ensures all
                requirements are met
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-2" />
              </p>
            </div>

            <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
              <div className="flex items-center mb-4">
                <span className="w-10 h-10 bg-blue-600 dark:bg-blue-500 text-white rounded-full flex items-center justify-center font-bold ">
                  3
                </span>
                <h3 className="text-xl font-semibold ml-3 dark:text-white">
                  University Selection
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Get personalized university recommendations based on your
                profile and preferences
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-2" />
              </p>
            </div>

            <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
              <div className="flex items-center mb-4">
                <span className="w-10 h-10 bg-blue-600 dark:bg-blue-500 text-white rounded-full flex items-center justify-center font-bold ">
                  4
                </span>
                <h3 className="text-xl font-semibold ml-3 dark:text-white">
                  Offer Letter
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Receive your conditional offer letter from the chosen university
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-2" />
              </p>
            </div>

            <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
              <div className="flex items-center mb-4">
                <span className="w-10 h-10 bg-blue-600 dark:bg-blue-500 text-white rounded-full flex items-center justify-center font-bold ">
                  5
                </span>
                <h3 className="text-xl font-semibold ml-3 dark:text-white">
                  Fee Payment
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Complete initial fee payment to secure your admission
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-2" />
              </p>
            </div>

            <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
              <div className="flex items-center mb-4">
                <span className="w-10 h-10 bg-blue-600 dark:bg-blue-500 text-white rounded-full flex items-center justify-center font-bold ">
                  6
                </span>
                <h3 className="text-xl font-semibold ml-3 dark:text-white">
                  Visa Processing
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Get assistance with visa application and documentation
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-2" />
              </p>
            </div>

            <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
              <div className="flex items-center mb-4">
                <span className="w-10 h-10 bg-blue-600 dark:bg-blue-500 text-white rounded-full flex items-center justify-center font-bold ">
                  7
                </span>
                <h3 className="text-xl font-semibold ml-3 dark:text-white">
                  Travel Arrangements
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Support with flight bookings and accommodation arrangements
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-2" />
              </p>
            </div>

            <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
              <div className="flex items-center mb-4">
                <span className="w-10 h-10 bg-blue-600 dark:bg-blue-500 text-white rounded-full flex items-center justify-center font-bold ">
                  8
                </span>
                <h3 className="text-xl font-semibold ml-3 dark:text-white">
                  Begin Your Journey
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Start your medical education journey at your chosen university
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-2" />
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section
        id="apply"
        className="py-20 dark:bg-gray-900 transition-colors duration-200"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-3xl transform -rotate-1"></div>

            <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 md:p-12">
              <div className="text-center mb-12">
                <span className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/40 rounded-full mb-4">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  <p className="text-blue-600 dark:text-blue-400 font-medium text-sm">
                    Start Your Journey
                  </p>
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                  Apply Now
                </h2>
                <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Fill out the form below and take your first step towards
                  becoming a medical professional
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      className="block w-full px-4 py-3 rounded-lg border-gray-300 dark:border-gray-600 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors duration-200"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="block w-full px-4 py-3 rounded-lg border-gray-300 dark:border-gray-600 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors duration-200"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      className="block w-full px-4 py-3 rounded-lg border-gray-300 dark:border-gray-600 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors duration-200"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="country"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                    >
                      Preferred Country
                    </label>
                    <select
                      id="country"
                      required
                      className="block w-full px-4 py-3 rounded-lg border-gray-300 dark:border-gray-600 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition-colors duration-200"
                      value={formData.country}
                      onChange={(e) =>
                        setFormData({ ...formData, country: e.target.value })
                      }
                    >
                      <option value="">Select a country</option>
                      {countries.map((country) => (
                        <option
                          key={country.name.toLowerCase()}
                          value={country.name.toLowerCase()}
                        >
                          {country.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full flex justify-center items-center px-8 py-4 text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 rounded-lg transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Submit Application
                  <Send className="ml-2 w-5 h-5" />
                </button>
              </form>

              <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                  By submitting this form, you agree to our{" "}
                  <a
                    href="#"
                    className="text-blue-600 hover:text-blue-500 dark:text-blue-400"
                  >
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a
                    href="#"
                    className="text-blue-600 hover:text-blue-500 dark:text-blue-400"
                  >
                    Privacy Policy
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-blue-400" />
                UniversityInsights
              </h3>
              <p className="text-sm">
                Your trusted partner in international medical education, helping
                students achieve their dreams of becoming medical professionals.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#benefits"
                    className="hover:text-blue-400 transition-colors flex items-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Benefits
                  </a>
                </li>
                <li>
                  <a
                    href="#countries"
                    className="hover:text-blue-400 transition-colors flex items-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Destinations
                  </a>
                </li>
                <li>
                  <a
                    href="#process"
                    className="hover:text-blue-400 transition-colors flex items-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Admission Process
                  </a>
                </li>
                <li>
                  <a
                    href="#apply"
                    className="hover:text-blue-400 transition-colors flex items-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Apply Now
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Contact Info</h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-blue-400" />
                  info@universityinsights.com
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-blue-400" />
                  +1 (555) 123-4567
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-blue-400 mt-1" />
                  <span>
                    123 Education Street,
                    <br />
                    City, Country 12345
                  </span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Follow Us</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="hover:text-blue-400 transition-colors p-2 hover:bg-gray-800 rounded-full"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="hover:text-blue-400 transition-colors p-2 hover:bg-gray-800 rounded-full"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="hover:text-blue-400 transition-colors p-2 hover:bg-gray-800 rounded-full"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="hover:text-blue-400 transition-colors p-2 hover:bg-gray-800 rounded-full"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
            <p>
              &copy; {new Date().getFullYear()} UniversityInsights. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

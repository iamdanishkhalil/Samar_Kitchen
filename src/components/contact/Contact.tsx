import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";

const Contact : React.FC = () => {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 text-transparent bg-clip-text animate-on-scroll">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-300 animate-on-scroll">
            We’d love to hear from you! Reach out via the form or contact details
            below.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row justify-between gap-12">
          {/* Contact Info */}
          <div className="flex-1 space-y-6 animate-on-scroll">
            <div className="flex items-start space-x-4">
              <MapPin className="text-yellow-400 w-6 h-6 mt-1" />
              <p className="text-lg">Digha, Patna, Bihar, India - 800011</p>
            </div>
            <div className="flex items-start space-x-4">
              <Phone className="text-yellow-400 w-6 h-6 mt-1" />
              <p className="text-lg">+91 98765 43210</p>
            </div>
            <div className="flex items-start space-x-4">
              <Mail className="text-yellow-400 w-6 h-6 mt-1" />
              <p className="text-lg">samarkitchen.patna@gmail.com</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="flex-1 animate-on-scroll">
            <form className="bg-zinc-800 text-white rounded-2xl p-8 shadow-2xl text-gray-800 transition-transform hover:scale-[1.01]">
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border  text-white border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
                  required
                />
              </div>
              <div className="mb-5">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full border  text-white border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
                  required
                />
              </div>
              <div className="mb-5">
                <textarea
                  placeholder="Your Message"
                  rows={5}
                  className="w-full border  text-white border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-yellow-500 text-black py-3 rounded-xl font-semibold hover:bg-yellow-400 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

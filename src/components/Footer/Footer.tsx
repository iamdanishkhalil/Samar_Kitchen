import React from 'react';
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-orange-700 to-orange-800 text-white pt-12 pb-6 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 max-w-7xl mx-auto">

        {/* Brand Info */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Samar Kitchen</h2>
          <p className="text-sm leading-relaxed">
            Experience the soul of Indian cuisine. Crafted with love from our kitchen in Patna.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Explore</h3>
          <ul className="space-y-3 text-sm">
            {['Home', 'Menu', 'About', 'Contact'].map(link => (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`} className="hover:text-yellow-300 transition">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <MapPin size={16} /> Digha, Patna, Bihar
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} /> +91 98765 43210
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} /> samarkitchen.patna@gmail.com
            </li>
          </ul>
        </div>

        {/* Newsletter / Socials */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Stay Updated</h3>
          <form className="flex flex-col gap-3 text-black">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded-md border border-white text-white text-sm focus:outline-none"
            />
            <button
              type="submit"
              className="bg-yellow-500 hover:bg-yellow-400 text-black py-2 rounded-md font-semibold transition"
            >
              Subscribe
            </button>
          </form>

          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:text-yellow-300 transition">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-yellow-300 transition">
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-orange-500 mt-10 pt-4 text-center text-sm text-orange-100">
        © 2025 Samar Kitchen. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;

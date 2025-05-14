import React, { useEffect } from 'react';
import './Kitchen.css';

const Kitchen: React.FC = () => {
  useEffect(() => {
    // Navbar scroll effect
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (navbar) {
        if (window.scrollY > 50) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Scroll-triggered animations
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    animateElements.forEach((element) => observer.observe(element));

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      animateElements.forEach((element) => observer.unobserve(element));
    };
  }, []);

  return (
    <div>
      {/* Navigation */}
      <nav className="navbar bg-orange-500 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Samar Kitchen</h1>
          <div className="space-x-4">
            <a href="#home" className="hover:text-yellow-300 transition">
              Home
            </a>
            <a href="#menu" className="hover:text-yellow-300 transition">
              Menu
            </a>
            <a href="#about" className="hover:text-yellow-300 transition">
              About
            </a>
            <a href="#contact" className="hover:text-yellow-300 transition">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="hero-bg relative h-screen flex items-center justify-center overflow-hidden"
      >
        <video
          autoPlay
          muted
          loop
          className="absolute z-0 w-auto min-w-full min-h-full max-w-none object-cover"
        >
          <source
            src="https://videos.pexels.com/video-files/3209013/3209013-uhd_2560_1440_25fps.mp4"
            type="video/mp4"
          />
        </video>
        <div className="animate-on-scroll relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Welcome to Samar Kitchen
          </h1>
          <p className="text-xl md:text-2xl mb-6">
            Savor the Taste of Tradition, Crafted with Love!
          </p>
          <a
            href="#menu"
            className="bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transition"
          >
            Explore Our Menu
          </a>
        </div>
        <div className="absolute inset-0 bg-black opacity-30 z-1"></div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 animate-on-scroll">
            Our Traditional Indian Menu
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="menu-item bg-gray-100 p-6 rounded-lg animate-on-scroll">
              <img
                src="https://images.pexels.com/photos/29684993/pexels-photo-29684993/free-photo-of-delicious-indian-curry-in-brass-kadhai.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Kadhai Paneer"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Kadhai Paneer</h3>
              <p className="text-gray-600">
                Tender paneer cubes cooked with bell peppers, onions, and aromatic
                spices in a traditional kadhai.
              </p>
            </div>
            <div className="menu-item bg-gray-100 p-6 rounded-lg animate-on-scroll">
              <img
                src="https://images.pexels.com/photos/28674710/pexels-photo-28674710/free-photo-of-aromatic-indian-dal-in-a-copper-pot.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Dal Tadka"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Dal Tadka</h3>
              <p className="text-gray-600">
                Yellow lentils tempered with cumin, garlic, and spices for a
                comforting, flavorful dish.
              </p>
            </div>
            <div className="menu-item bg-gray-100 p-6 rounded-lg animate-on-scroll">
              <img
                src="https://images.unsplash.com/photo-1606491956689-2ea866880c84?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
                alt="Sattu Bhar Roti"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Sattu Bhar Roti</h3>
              <p className="text-gray-600">
                Nutritious roasted gram flour stuffed in soft rotis, a wholesome
                Bihari specialty.
              </p>
            </div>
            <div className="menu-item bg-gray-100 p-6 rounded-lg animate-on-scroll">
              <img
                src="https://images.pexels.com/photos/9797029/pexels-photo-9797029.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Chapati"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Chapati</h3>
              <p className="text-gray-600">
                Soft, thin whole wheat flatbreads, perfect to pair with our
                delicious curries.
              </p>
            </div>
            <div className="menu-item bg-gray-100 p-6 rounded-lg animate-on-scroll">
              <img
                src="https://images.pexels.com/photos/10695966/pexels-photo-10695966.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Mix Veg Sabzi"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Mix Veg Sabzi</h3>
              <p className="text-gray-600">
                A vibrant medley of fresh vegetables cooked in a savory blend of
                Indian spices.
              </p>
            </div>
            <div className="menu-item bg-gray-100 p-6 rounded-lg animate-on-scroll">
              <img
                src="https://images.pexels.com/photos/31150262/pexels-photo-31150262/free-photo-of-delicious-indian-paratha-with-curry-and-chutney.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Aloo Paratha"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Aloo Paratha</h3>
              <p className="text-gray-600">
                Spiced potato-stuffed flatbread, served with curd or tangy pickle.
              </p>
            </div>
            <div className="menu-item bg-gray-100 p-6 rounded-lg animate-on-scroll">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWme70ySHdhvRMCWckjbnrAAe_CbT5_91Bug&s"
                alt="Dal Makhni"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Dal Makhni</h3>
              <p className="text-gray-600">
                Creamy black lentils slow-cooked with butter and spices for a rich,
                indulgent flavor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-orange-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8 animate-on-scroll">
            About Samar Kitchen
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-6 animate-on-scroll">
            Samar Kitchen is a heartfelt venture born from a passion for authentic
            Indian cuisine, started from the warmth of our home in Digha, Patna,
            Bihar. We specialize in traditional Indian dishes, crafted with love,
            care, and the freshest ingredients to bring the essence of
            home-cooked meals to your table. Our menu reflects the rich culinary
            heritage of India, with a focus on Bihari and North Indian flavors
            that evoke nostalgia and comfort.
          </p>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto animate-on-scroll">
            From the spicy Kadhai Paneer to the soul-soothing Dal Makhni, each
            dish is prepared with time-honored recipes passed down through
            generations. Samar Kitchen is more than just food—it's an experience
            of tradition, family, and the joy of sharing a meal. Whether you're
            craving the wholesome Sattu Bhar Roti or the comforting Mix Veg Sabzi,
            we promise a taste that feels like home.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8 animate-on-scroll">
            Get in Touch
          </h2>
          <p className="text-lg mb-4 animate-on-scroll">
            Address: Digha, Patna, Bihar, India - 800011
          </p>
          <p className="text-lg mb-4 animate-on-scroll">Phone: +91 98765 43210</p>
          <p className="text-lg mb-8 animate-on-scroll">
            Email: samarkitchen.patna@gmail.com
          </p>
          <div className="max-w-lg mx-auto animate-on-scroll">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 mb-4 rounded-lg text-black"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 mb-4 rounded-lg text-black"
              required
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-3 mb-4 rounded-lg text-black"
              rows={4}
              required
            ></textarea>
            <button
              type="button"
              className="bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transition"
            >
              Send Message
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-orange-600 text-white py-4 text-center">
        <p>© 2025 Samar Kitchen. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Kitchen;
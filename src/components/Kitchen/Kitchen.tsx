import React, { useEffect } from 'react';
import './Kitchen.css';
import Contact from '../contact/Contact';
import Footer from '../Footer/Footer';
import About from '../About/About';
import Menu from '../Menu/Menu';

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

<section
  id="home"
  className="hero-bg relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-r from-orange-600 via-yellow-500 to-orange-600"
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
    <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">
      Welcome to Samar Kitchen
    </h1>
    <p className="text-lg md:text-xl mb-8 max-w-7xl mx-auto font-medium opacity-90">
      Experience the rich, flavorful heritage of India with every bite. Our dishes are
      lovingly crafted from time-honored recipes, passed down through generations.
      Dive into a culinary journey that brings the warmth of home to your table.
    </p>
    <div className="flex justify-center gap-6">
      <a
        href="#menu"
        className="bg-yellow-500 text-black px-8 py-4 rounded-full font-semibold hover:bg-yellow-400 transition duration-300 ease-in-out shadow-xl transform hover:scale-105"
      >
        Explore Our Menu
      </a>
      <a
        href="#contact"
        className="bg-transparent border-2 border-yellow-500 text-yellow-500 px-8 py-4 rounded-full font-semibold hover:bg-yellow-500 hover:text-black transition duration-300 ease-in-out shadow-xl transform hover:scale-105"
      >
        Contact Us
      </a>
    </div>
  </div>
  <div className="absolute inset-0 bg-black opacity-40 z-1"></div>
</section>



<Menu />
      <About />
    

    

      <Contact />

      <Footer />
    </div>
  );
};

export default Kitchen;
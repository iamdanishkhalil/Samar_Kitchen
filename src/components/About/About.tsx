import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-orange-50 text-gray-800">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-orange-800 mb-4 animate-on-scroll">
            About Samar Kitchen
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-on-scroll">
            A Culinary Journey from the Heart of Bihar
          </p>
        </div>

        {/* Flex Layout for Image and Text */}
        <div className="flex md:flex-row flex-col items-center justify-between gap-12">
          {/* Left Side - Image */}
          <div className="w-full md:w-1/2 flex justify-end animate-on-scroll">
            <img
              src="https://images.pexels.com/photos/6957818/pexels-photo-6957818.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Samar cooking"
              className="w-full md:h-80 object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* Right Side - Text */}
          <div className="w-full md:w-1/2 flex flex-col justify-end items-start animate-on-scroll">
            <p className="text-md text-gray-700 mb-4 leading-relaxed">
              Samar Kitchen is a heartfelt venture born from a passion for authentic Indian cuisine, started from the warmth of our home in Digha, Patna, Bihar. We specialize in traditional Indian dishes, crafted with love, care, and the freshest ingredients to bring the essence of home-cooked meals to your table. Our menu reflects the rich culinary heritage of India, with a focus on Bihari and North Indian flavors that evoke nostalgia and comfort.
            </p>
            <p className="text-md text-gray-700 mb-4 leading-relaxed">
              From the spicy Kadhai Paneer to the soul-soothing Dal Makhni, each dish is prepared using time-honored recipes passed down through generations. Samar Kitchen is more than just food—it’s an experience of tradition, family, and the joy of sharing a meal. Whether you're craving the wholesome Sattu Bhar Roti or the comforting Mix Veg Sabzi, we promise a taste that feels like home.
            </p>
            <p className="text-md text-gray-700 leading-relaxed">
              Whether it’s the aroma of <em>Kadhai Paneer</em> or the comfort of <em>Dal Makhni</em>, Samar Kitchen is more than just food—it's a journey back to the warmth of home.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

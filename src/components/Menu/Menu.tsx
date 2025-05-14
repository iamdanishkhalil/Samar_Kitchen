import React from 'react';

const menuItems = [
  {
    name: 'Kadhai Paneer',
    description:
      'Tender paneer cubes cooked with bell peppers, onions, and aromatic spices in a traditional kadhai.',
    image:
      'https://images.pexels.com/photos/29684993/pexels-photo-29684993/free-photo-of-delicious-indian-curry-in-brass-kadhai.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Dal Tadka',
    description:
      'Yellow lentils tempered with cumin, garlic, and spices for a comforting, flavorful dish.',
    image:
      'https://images.pexels.com/photos/28674710/pexels-photo-28674710/free-photo-of-aromatic-indian-dal-in-a-copper-pot.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Sattu Bhar Roti',
    description:
      'Nutritious roasted gram flour stuffed in soft rotis, a wholesome Bihari specialty.',
    image:
      'https://images.unsplash.com/photo-1606491956689-2ea866880c84?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
  },
  {
    name: 'Chapati',
    description:
      'Soft, thin whole wheat flatbreads, perfect to pair with our delicious curries.',
    image:
      'https://images.pexels.com/photos/9797029/pexels-photo-9797029.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Mix Veg Sabzi',
    description:
      'A vibrant medley of fresh vegetables cooked in a savory blend of Indian spices.',
    image:
      'https://images.pexels.com/photos/10695966/pexels-photo-10695966.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Aloo Paratha',
    description:
      'Spiced potato-stuffed flatbread, served with curd or tangy pickle.',
    image:
      'https://images.pexels.com/photos/31150262/pexels-photo-31150262/free-photo-of-delicious-indian-paratha-with-curry-and-chutney.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Dal Makhni',
    description:
      'Creamy black lentils slow-cooked with butter and spices for a rich, indulgent flavor.',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWme70ySHdhvRMCWckjbnrAAe_CbT5_91Bug&s',
  },
];

const Menu: React.FC = () => {
  return (
    <section id="menu" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-orange-800 mb-12 animate-on-scroll">
          Our Traditional Indian Menu
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="menu-item bg-gray-100 p-6 rounded-xl shadow-md hover:shadow-2xl transition-shadow duration-300 animate-on-scroll"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-orange-700 mb-2">
                {item.name}
              </h3>
              <p className="text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;

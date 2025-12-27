import React from 'react';
import SofaImage from './images/Wooden sofa.png';
import ChairImage from './images/Wooden chair.png';
import StoolImage from './images/Wooden stool.png';


// 🔶 Single Product Card Component
const ProductCard = ({ imageSrc, title, price, rating }) => {
  return (
    <div className="flex flex-col items-center bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">

      {/* 🔷 Product Image Section */}
      <div className="w-full h-72 overflow-hidden rounded-t-xl">
        {/* h-full ensures image fills container properly */}
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* 🔷 Product Details */}
      <div className="p-4 w-full">
        {/* Title + Rating */}
        <div className="flex justify-between items-center mb-1">
          <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
          <div className="flex items-center text-sm text-yellow-500">
            <span className="mr-1">★</span>
            <span className="font-medium">{rating}</span>
          </div>
        </div>

        {/* Price */}
        <p className="text-2xl font-bold text-gray-900 mb-2">{price}</p>

        {/* Description */}
        <p className="text-sm text-gray-500">
          Get premium wooden furniture now
        </p>
      </div>
    </div>
  );
};


// 🔶 Main New Arrival Products Section
const NewArrivalProducts = () => {
  const products = [
    {
      id: 1,
      imageSrc: SofaImage,
      title: 'Wooden Sofa',
      price: '55$',
      rating: '4.5',
    },
    {
      id: 2,
      imageSrc: ChairImage,
      title: 'Wooden Chair',
      price: '45$',
      rating: '4.3',
    },
    {
      id: 3,
      imageSrc: StoolImage,
      title: 'Wooden Stool',
      price: '35$',
      rating: '4.5',
    },
  ];

  return (
    <div className="container mx-auto p-6 lg:p-10">

      {/* Title */}
      <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-8 lg:mb-12">
        New Arrival Products
      </h2>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            imageSrc={product.imageSrc}
            title={product.title}
            price={product.price}
            rating={product.rating}
          />
        ))}
      </div>

    </div>
  );
};

export default NewArrivalProducts;

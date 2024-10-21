import React, { useState } from 'react';
import { Star, ShoppingCart, Search, Filter } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  rating: number;
  image: string;
  category: string;
}

const ProductCard: React.FC<Product> = ({ name, description, price, rating, image }) => (
  <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
    <img src={image} alt={name} className="w-full h-48 object-cover mb-4 rounded" />
    <h3 className="text-xl font-semibold mb-2 text-blue-800">{name}</h3>
    <p className="text-gray-600 mb-4 h-20 overflow-hidden">{description}</p>
    <div className="flex justify-between items-center">
      <span className="text-2xl font-bold text-green-600">₹{price.toLocaleString('en-IN')}</span>
      <div className="flex items-center">
        <Star className="h-5 w-5 text-yellow-400 mr-1" />
        <span>{rating.toFixed(1)}</span>
      </div>
    </div>
    <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300 flex items-center justify-center">
      <ShoppingCart className="h-5 w-5 mr-2" />
      Add to Cart
    </button>
  </div>
);

const Marketplace: React.FC = () => {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const products: Product[] = [
    { id: 1, name: "Digital Stethoscope", description: "Advanced digital stethoscope with noise cancellation, ideal for telemedicine", price: 15999, rating: 4.7, image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", category: "Diagnostic" },
    { id: 2, name: "Portable ECG Monitor", description: "Compact ECG monitor for on-the-go heart health tracking with smartphone connectivity", price: 24999, rating: 4.5, image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", category: "Diagnostic" },
    { id: 3, name: "Smart Blood Pressure Monitor", description: "Bluetooth-enabled blood pressure monitor with app integration for easy tracking", price: 3999, rating: 4.8, image: "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", category: "Diagnostic" },
    { id: 4, name: "Ayurvedic Immunity Booster", description: "Natural Ayurvedic supplement to enhance immunity and overall health", price: 599, rating: 4.3, image: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", category: "Ayurveda" },
    { id: 5, name: "Portable Oxygen Concentrator", description: "Lightweight oxygen concentrator for patients with respiratory conditions", price: 49999, rating: 4.6, image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", category: "Respiratory" },
    { id: 6, name: "Telemedicine Consultation Kit", description: "All-in-one kit for remote patient consultations including camera and vital sign monitors", price: 34999, rating: 4.4, image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", category: "Telemedicine" },
    { id: 7, name: "Digital Thermometer", description: "Fast and accurate digital thermometer with fever alert function", price: 999, rating: 4.7, image: "https://images.unsplash.com/photo-1584483766114-2cea6facdf57?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", category: "Diagnostic" },
    { id: 8, name: "Pulse Oximeter", description: "Fingertip pulse oximeter for measuring blood oxygen saturation and pulse rate", price: 1999, rating: 4.5, image: "https://images.unsplash.com/photo-1584515933487-779824d29309?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", category: "Diagnostic" },
  ];

  const filteredProducts = products.filter(product => {
    if (filter !== 'all' && product.category !== filter) return false;
    if (searchTerm && !product.name.toLowerCase().includes(searchTerm.toLowerCase())) return false;
    return true;
  });

  return (
    <div id="marketplace" className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-800">Medical Marketplace</h2>
        <div className="flex flex-wrap justify-between items-center mb-8">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <Filter className="h-5 w-5 text-blue-600" />
            <select 
              className="bg-white border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="all">All Categories</option>
              <option value="Diagnostic">Diagnostic</option>
              <option value="Ayurveda">Ayurveda</option>
              <option value="Respiratory">Respiratory</option>
              <option value="Telemedicine">Telemedicine</option>
            </select>
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              className="bg-white border border-gray-300 rounded-md pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-64"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Medilinks</h1>
        <p className="text-xl md:text-2xl mb-8">Connecting Medical Professionals Worldwide</p>
        <button className="bg-white text-blue-600 font-bold py-2 px-6 rounded-full hover:bg-blue-100 transition duration-300">
          Join Now
        </button>
      </div>
    </div>
  );
};

export default Hero;
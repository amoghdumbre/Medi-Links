import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h3 className="text-xl font-bold mb-4">Medilinks</h3>
          <p className="text-gray-400">Connecting medical professionals worldwide.</p>
        </div>
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
          </ul>
        </div>
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h4 className="text-lg font-semibold mb-4">Connect</h4>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white"><Twitter className="h-6 w-6" /></a>
            <a href="#" className="text-gray-400 hover:text-white"><Linkedin className="h-6 w-6" /></a>
            <a href="#" className="text-gray-400 hover:text-white"><Facebook className="h-6 w-6" /></a>
            <a href="#" className="text-gray-400 hover:text-white"><Instagram className="h-6 w-6" /></a>
          </div>
        </div>
        <div className="w-full md:w-1/4">
          <h4 className="text-lg font-semibold mb-4">Subscribe</h4>
          <p className="text-gray-400 mb-4">Stay updated with our newsletter</p>
          <form className="flex">
            <input type="email" placeholder="Enter your email" className="bg-gray-700 text-white px-4 py-2 rounded-l-md focus:outline-none flex-grow" />
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 transition duration-300">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="container mx-auto mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
        <p>&copy; 2024 Medilinks. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
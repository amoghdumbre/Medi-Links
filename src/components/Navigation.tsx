import React from 'react';
import { Menu, User, MessageCircle, Stethoscope, BarChart } from 'lucide-react';

const Navigation: React.FC = () => {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Stethoscope className="h-8 w-8" />
          <span className="text-2xl font-bold">Medilinks</span>
        </div>
        <div className="hidden md:flex space-x-4">
          <a href="#" className="hover:text-blue-200">Community</a>
          <a href="#" className="hover:text-blue-200">Marketplace</a>
          <a href="#" className="hover:text-blue-200">Patient Services</a>
          <a href="#" className="hover:text-blue-200">Dashboard</a>
        </div>
        <div className="flex items-center space-x-4">
          <MessageCircle className="h-6 w-6 cursor-pointer" />
          <User className="h-6 w-6 cursor-pointer" />
          <Menu className="h-6 w-6 md:hidden cursor-pointer" />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
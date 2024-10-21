import React from 'react';
import { Users, ShoppingBag, Activity, BarChart2 } from 'lucide-react';

const features = [
  { icon: Users, title: 'Professional Community', description: 'Connect with peers, share knowledge, and grow your network.' },
  { icon: ShoppingBag, title: 'Medical Marketplace', description: 'Buy and sell medical equipment and services with ease.' },
  { icon: Activity, title: 'Patient Services', description: 'Manage consultations, prescriptions, and lab reports efficiently.' },
  { icon: BarChart2, title: 'Analytics Dashboard', description: 'Gain insights into your practice and community engagement.' },
];

const FeatureSection: React.FC = () => {
  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <feature.icon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
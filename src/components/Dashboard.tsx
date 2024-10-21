import React from 'react';
import { BarChart, PieChart, LineChart, Activity, Users, Calendar, FileText, TrendingUp } from 'lucide-react';

const ChartCard: React.FC<{ title: string; icon: React.ElementType; data: string; trend?: string }> = ({ title, icon: Icon, data, trend }) => (
  <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
    <div className="flex justify-between items-center mb-4">
      <h3 className="text-xl font-semibold text-blue-800">{title}</h3>
      <Icon className="h-6 w-6 text-blue-600" />
    </div>
    <div className="text-3xl font-bold">{data}</div>
    {trend && (
      <div className={`text-sm mt-2 ${trend.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
        {trend} <TrendingUp className="h-4 w-4 inline" />
      </div>
    )}
  </div>
);

const Dashboard: React.FC = () => {
  return (
    <div id="dashboard" className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-800">Analytics Dashboard</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ChartCard title="Total Patients" icon={Users} data="1,234" trend="+5.3%" />
          <ChartCard title="Consultations This Month" icon={Calendar} data="156" trend="+2.7%" />
          <ChartCard title="Revenue" icon={LineChart} data="₹4,56,789" trend="+8.1%" />
          <ChartCard title="Patient Satisfaction" icon={Activity} data="4.8/5" trend="+0.2" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-blue-800">Recent Activity</h3>
            <ul className="space-y-2">
              <li className="flex items-center justify-between">
                <span>New patient registration: Amit Patel</span>
                <span className="text-gray-500">2 minutes ago</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Prescription renewed: Priya Sharma</span>
                <span className="text-gray-500">15 minutes ago</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Telemedicine consultation completed: Dr. Rajesh Kumar</span>
                <span className="text-gray-500">1 hour ago</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Lab results uploaded: Sanjay Gupta</span>
                <span className="text-gray-500">2 hours ago</span>
              </li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-blue-800">Upcoming Appointments</h3>
            <ul className="space-y-2">
              <li className="flex items-center justify-between">
                <span>Dr. Meera Patel - Cardiology Follow-up</span>
                <span className="text-gray-500">Today, 2:00 PM</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Dr. Arjun Reddy - General Check-up</span>
                <span className="text-gray-500">Tomorrow, 10:30 AM</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Dr. Ananya Desai - Pediatric Consultation</span>
                <span className="text-gray-500">23 Apr, 3:15 PM</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Dr. Vikram Singh - Orthopedic Assessment</span>
                <span className="text-gray-500">25 Apr, 11:00 AM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
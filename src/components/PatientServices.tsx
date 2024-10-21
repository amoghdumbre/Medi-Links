import React from 'react';
import { Calendar, Clipboard, FileText, Activity, Video, Pill, Stethoscope, Thermometer } from 'lucide-react';

const ServiceCard: React.FC<{ icon: React.ElementType; title: string; description: string }> = ({ icon: Icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:bg-blue-50">
    <Icon className="h-12 w-12 text-blue-600 mb-4" />
    <h3 className="text-xl font-semibold mb-2 text-blue-800">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const PatientServices: React.FC = () => {
  const services = [
    { icon: Video, title: "Telemedicine Consultations", description: "Connect with doctors virtually for consultations, follow-ups, and second opinions." },
    { icon: Clipboard, title: "Digital Prescriptions", description: "Receive and manage digital prescriptions securely, with easy pharmacy integration." },
    { icon: FileText, title: "Electronic Health Records", description: "Access your complete medical history anytime, anywhere, with our secure EHR system." },
    { icon: Activity, title: "Remote Patient Monitoring", description: "Monitor chronic conditions from home with our connected devices and alert system." },
    { icon: Pill, title: "Medication Management", description: "Set reminders, track medications, and receive alerts for refills and interactions." },
    { icon: Calendar, title: "Appointment Scheduling", description: "Book and manage appointments with healthcare providers across specialties." },
    { icon: Stethoscope, title: "Symptom Checker", description: "Use our AI-powered tool to assess symptoms and get preliminary guidance." },
    { icon: Thermometer, title: "Health Tracking", description: "Log and track vital signs, symptoms, and lifestyle factors for better health management." },
  ];

  return (
    <div id="patient-services" className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-800">Patient Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PatientServices;
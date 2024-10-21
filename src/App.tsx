import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import FeatureSection from './components/FeatureSection';
import Community from './components/Community';
import Marketplace from './components/Marketplace';
import PatientServices from './components/PatientServices';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <Hero />
        <FeatureSection />
        <Community />
        <Marketplace />
        <PatientServices />
        <Dashboard />
      </main>
      <Footer />
    </div>
  );
}

export default App;
import React from "react";
import Intro from "../components/Intro";
import FeaturesSection from "../components/FeaturesSection";

const Homepage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Intro />
        <FeaturesSection />
      </main>
      <footer className="bg-[#69B0FC] text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 LMS Quiz Platform. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;
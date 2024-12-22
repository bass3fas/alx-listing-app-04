import React from "react";
import Header from "@/components/layout/Header";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Header />
      <div className="flex-grow flex items-center justify-center">
        <h1 className="text-2xl font-bold text-gray-800">Welcome to ALX Listing App</h1>
      </div>
    </div>
  );
};

export default Home;

import React from "react";
import Image from 'next/image';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <div className="relative">
        <div className="relative w-full">
          <Image
            src="/assets/images/hero/hero.png"
            alt="Hero Image"
            layout="responsive"
            width={2000}
            height={1500}
            quality={100}
            className="rounded-3xl"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
            <h1 className="text-4xl font-bold mb-4">Find your favorite place here!</h1>
            <p className="text-xl">The best prices for over 2 million properties worldwide.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;



import { Carousel } from 'antd';
import { useState } from 'react';
import comuter1 from "./image/computer class.png";
import computer2 from "./image/computer2.png";
import Testmonial from './Testmonial';

const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const carouselSettings = {
    autoplay: true,
    speed: 1800,
    effect: 'fade', 
    dots: true,
    beforeChange: (current, next) => {
      setActiveSlide(next);
    }
  };

  return (
    <div className="bg-gray-100">
      <div className="mx-auto w-11/12 px-8">
        <div className="pt-4 overflow-hidden">
          <Carousel {...carouselSettings}>
            <div className="relative overflow-hidden">
              <div className="w-full h-64 md:h-96 overflow-hidden">
                <img 
                  src={comuter1} 
                  alt="computer class" 
                  className={`w-full h-full object-cover object-center transition-all duration-1000 ease-out ${
                    activeSlide === 0 
                      ? "scale-100 opacity-100" 
                      : "scale-110 opacity-0"
                  }`}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div 
                    className={`flex flex-col items-center text-center max-w-lg px-4 py-4 md:px-6 md:py-6 bg-white bg-opacity-80 rounded-lg transform transition-all duration-1200 ${
                      activeSlide === 0 
                        ? "opacity-100 translate-y-0" 
                        : "opacity-0 translate-y-8"
                    }`}
                  >
                    <p className="text-xl md:text-2xl font-bold text-blue-700 mb-2">Learn to solve problems with codediv</p>
                    <p className="text-sm md:text-lg text-black mb-4">Coding school will equip you with the right skills to solve real-life problems</p>
                    <button className="px-4 py-1 md:px-6 md:py-2 border rounded-lg bg-blue-700 text-white hover:bg-blue-600 transition-colors">Apply now</button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative overflow-hidden">
              <div className="w-full h-64 md:h-96 overflow-hidden">
                <img 
                  src={computer2} 
                  alt="study computer" 
                  className={`w-full h-full object-cover object-center transition-all duration-1000 ease-out ${
                    activeSlide === 1 
                      ? "scale-100 opacity-100" 
                      : "scale-110 opacity-0"
                  }`}
                />
        
                <div className="absolute inset-0 flex items-center justify-center">
                  <div 
                    className={`flex flex-col items-center text-center max-w-lg px-4 py-4 md:px-6 md:py-6 bg-white bg-opacity-80 rounded-lg transform transition-all duration-1200 ${
                      activeSlide === 1 
                        ? "opacity-100 translate-y-0" 
                        : "opacity-0 translate-y-8"
                    }`}
                  >
                    <p className="text-xl md:text-2xl font-bold text-blue-700 mb-2">No rote memorization, everything is hands-on</p>
                    <p className="text-sm md:text-lg text-black mb-4">Join the school where every student learns by doing.</p>
                    <button className="px-4 py-1 md:px-6 md:py-2 border rounded-lg bg-blue-700 text-white hover:bg-blue-600 transition-colors">Apply now</button>
                  </div>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
      <div className="bg-blue-700/5 flex flex-col space-y-3 justify-between items-center p-12">
                <p className="text-2xl font-bold text-blue-700 uppercase">our community</p>
                <p className="text-4xl"> 150</p>
                <p className="text-lg font-semibold">graudutes</p>
            </div>
            <Testmonial />
    </div>
  );
};

export default Hero;
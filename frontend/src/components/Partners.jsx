

import { useEffect, useState, useRef } from "react";
import ishyiga from "./image/ishyiga.png";
import qonics from "./image/qonics.png";
import etrade from "./image/africa-e-trade.png";
import awesomity from "./image/awesomity-logo.png";

const Partners = () => {
    const partners = [
        { name: "Ishyiga", logo: ishyiga },
        { name: "Qonics", logo: qonics },
        { name: "Africa e-Trade", logo: etrade },
        { name: "Awesomity Lab", logo: awesomity }
    ];


    const allPartners = [...partners, ...partners];

    const sliderRef = useRef(null);
    const [position, setPosition] = useState(0);
    const speed = 0.5;

    useEffect(() => {
        let animationId;
        let lastTimestamp = 0;

        const animate = (timestamp) => {
            if (!lastTimestamp) lastTimestamp = timestamp;
            const elapsed = timestamp - lastTimestamp;

            setPosition(prevPosition => {
                const newPosition = prevPosition - speed * (elapsed / 16);


                if (sliderRef.current && -newPosition > sliderRef.current.clientWidth / 2) {
                    return 0;
                }
                return newPosition;
            });

            lastTimestamp = timestamp;
            animationId = requestAnimationFrame(animate);
        };

        animationId = requestAnimationFrame(animate);

        return () => {
            cancelAnimationFrame(animationId);
        };
    }, [speed]);

    return (
        <div className="bg-white">
            <div className="mx-auto w-11/12 py-16 px-8">
                <div className="flex flex-col items-center mb-10">
                    <h3 className="text-center text-xl font-bold text-blue-700 uppercase mb-2">Our Partners</h3>
                    <p className="text-center text-gray-700 max-w-2xl">
                        Our graduates go on to work for some of the industry leaders in software development companies
                    </p>
                </div>

                <div className="overflow-hidden relative py-8">
                    <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>

                    <div
                        ref={sliderRef}
                        className="flex items-center"
                        style={{
                            transform: `translateX(${position}px)`,
                            transition: 'transform 0.1s linear'
                        }}
                    >
                        {allPartners.map((partner, index) => (
                            <div
                                key={`${partner.name}-${index}`}
                                className="flex flex-col items-center mx-12"
                            >
                                <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center h-32 w-48">
                                    <img
                                        src={partner.logo}
                                        alt={`${partner.name} logo`}
                                        className="max-h-24 max-w-full object-contain transition-all hover:scale-105"
                                    />
                                </div>
                                <p className="mt-2 text-gray-700 font-medium">{partner.name}</p>
                            </div>
                        ))}
                    </div>

                    <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
                </div>
            </div>
        </div>

    );
};

export default Partners;
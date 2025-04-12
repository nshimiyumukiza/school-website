
import girl1 from "./image/girl1.png";
import girl2 from "./image/girl2.png";
import boy1 from "./image/boy1.png";
import boy2 from "./image/boy2.png";
import { useEffect, useState } from "react";

const Testimonial = () => {
    const testimonialData = [
        {
            id: 1,
            name: "Cyuzuzo Alice",
            role: "Software Engineer at Ishyiga Software",
            text: "The program completely transformed my career trajectory. I went from struggling with basic concepts to confidently building full-stack applications in just months.",
            avatar: girl1
        },
        {
            id: 2,
            name: "Chance Michael",
            role: "Frontend Developer at Africa eTrade",
            text: "The mentorship I received was invaluable. The instructors truly care about your success and go above and beyond to help you understand complex topics.",
            avatar: boy1
        },
        {
            id: 3,
            name: "Maurice Kwizera",
            role: "Data Scientist at Awesomity Lab",
            text: "I had tried other bootcamps before, but none compared to this experience. The curriculum is constantly updated with the latest industry standards.",
            avatar: girl2
        },
        {
            id: 4,
            name: "Emmanuel Ndungutse",
            role: "Backend Developer at Qonics Inc.",
            text: "From day one, I felt supported by both the instructors and my peers. The collaborative environment helped me grow not just technically, but professionally.",
            avatar: boy2
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [animate, setAnimate] = useState(true);


    useEffect(() => {
        const interval = setInterval(() => {
            setAnimate(false);
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialData.length);
                setAnimate(true);
            }, 500);
        }, 5000);
        
        return () => {
            clearInterval(interval);
        };
    }, [testimonialData.length]);

    const handleDotClick = (index) => {
        setAnimate(false);
        setTimeout(() => {
            setCurrentIndex(index);
            setAnimate(true);
        }, 300);
    };

    return (
        <div className='mx-auto w-11/12 bg-gray-100'>
            <div className="pt-12 pb-12">
                <div>
                    <h1 className='text-lg uppercase text-center text-blue-700 font-bold mb-8'>what our graduates say</h1>
                </div>
                <div className='flex md:flex-row flex-col md:justify-center items-center gap-8'>
                    <div className={`flex flex-col md:w-1/2 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} transition-all duration-500`}>
                    <div className="bg-white p-8">
                        <div>
                            <svg className="w-8 h-8 mb-4 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                            </svg>
                        </div>
                       
                        <p className="text-gray-700 mt-4">{testimonialData[currentIndex].text}</p>
                        <div className="flex items-center mb-4">
                            <img
                                className="h-12 w-12 mr-4 rounded-full"
                                src={testimonialData[currentIndex].avatar} 
                                alt={testimonialData[currentIndex].name} 
                            />
                            <div>
                                <h3 className="font-bold text-gray-800">{testimonialData[currentIndex].name}</h3>
                                <p className="text-blue-700">{testimonialData[currentIndex].role}</p>
                            </div>
                        </div>
                        </div>
                       
                       
                    </div>

                    <div className="grid w-full md:w-1/3 grid-cols-2 gap-4">
                        {testimonialData.map((testimonial, index) => (
                            <div 
                                key={testimonial.id}
                                className={`aspect-square rounded-lg overflow-hidden cursor-pointer transform transition hover:scale-105 ${currentIndex === index ? 'ring-4 ring-blue-500' : ''}`}
                                onClick={() => handleDotClick(index)}
                            >
                                <img 
                                    src={testimonial.avatar} 
                                    alt={testimonial.name}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex justify-center mt-10">
                    {testimonialData.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => handleDotClick(index)}
                            className={`w-3 h-3 mx-1 rounded-full ${currentIndex === index ? 'bg-blue-700' : 'bg-gray-300'}`}
                            aria-label={`View testimonial ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
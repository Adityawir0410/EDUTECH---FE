import { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const slides = [
    "https://via.placeholder.com/600x400?text=Slide+1",
    "https://via.placeholder.com/600x400?text=Slide+2",
    "https://via.placeholder.com/600x400?text=Slide+3",
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function for navigating to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  // Auto slide effect
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <div className="bg-blue-500 text-white p-6 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-6">Manual Carousel</h1>
      <div className="relative w-full max-w-2xl">
        {/* Carousel Images */}
        <div className="overflow-hidden rounded-lg">
          <div
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {slides.map((slide, index) => (
              <img
                key={index}
                src={slide}
                alt={`Slide ${index + 1}`}
                className="w-full"
              />
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          className="absolute top-1/2 -left-6 transform -translate-y-1/2 bg-gray-800 text-white rounded-full w-10 h-10 flex items-center justify-center"
          onClick={() =>
            setCurrentIndex(
              currentIndex === 0 ? slides.length - 1 : currentIndex - 1
            )
          }
        >
          &lt;
        </button>
        <button
          className="absolute top-1/2 -right-6 transform -translate-y-1/2 bg-gray-800 text-white rounded-full w-10 h-10 flex items-center justify-center"
          onClick={nextSlide}
        >
          &gt;
        </button>

        {/* Dots for Navigation */}
        <div className="flex justify-center mt-4 space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${
                currentIndex === index ? "bg-white" : "bg-gray-500"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;

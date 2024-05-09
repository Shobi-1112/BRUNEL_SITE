import React, { useState, useEffect } from "react";
import "./carousel.css";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      content: "Enhance fortune 50 company’s insights teams research capabilities",
    },
    {
      id: 2,
      content: "The secret of getting ahead is getting started",
    },
    {
      id: 3,
      content: "The only way to do great work is to love what you do",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const nextSlideIndex = (currentSlide + 1) % slides.length;
      setCurrentSlide(nextSlideIndex);
    }, 5000); 

    return () => clearInterval(interval);
  }, [currentSlide, slides.length]);

  return (
    <>
      <div className="carousel">
        <div className="carousel-content" style={{ width: "32rem", marginLeft:"6rem"}}>
          <p>{slides[currentSlide].content}</p>
        </div>
        <div className="dots">
          {slides.map((slide, index) => (
            <span
              key={slide.id}
              className={index === currentSlide ? "dot active" : "dot"}
              onClick={() => setCurrentSlide(index)}
            ></span>
          ))}
        </div>
      </div>
    </>
  );
};

export default Carousel;

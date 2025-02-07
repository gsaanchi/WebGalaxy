import React from "react";
import { useNavigate } from "react-router-dom";

const ActiveSlider = () => {
  const navigate = useNavigate(); // Navigation hook for routing
  const templateImages = [
    "image/template1.jpg",
    "image/template2.jpg",
    "image/template1.jpg",
    "image/template4.jpg",
    "image/template5.jpg",
  ];

  const handleTemplateClick = (index) => {
    navigate(`/preview/${index}`); // Navigate to the template preview page
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div className="templates-scroll-wrapper flex animate-scroll">
        {templateImages.map((imageSrc, index) => (
          <div
            key={index}
            onClick={() => handleTemplateClick(index)} // Click handler
            className="template-item flex-shrink-0 w-[100vw] h-[80vh] group transition-all duration-300 ease-in-out hover:scale-110 cursor-pointer"
          >
            <img
              src={imageSrc}
              alt={`Template ${index + 1}`}
              className="w-full h-full object-contain rounded-lg"
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        .templates-scroll-wrapper {
          display: flex;
          width: 100%;
          animation: scroll 40s linear infinite;
        }
        .template-item {
          flex-shrink: 0;
          transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out,
            background-color 0.3s ease-in-out;
        }
        .templates-scroll-wrapper:hover {
          animation-play-state: paused;
        }
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};

export default ActiveSlider;
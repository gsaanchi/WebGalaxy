import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode, Pagination, Autoplay } from "swiper/modules"; // Import Autoplay module

const ActiveSlider = () => {
  return (
    <div className="flex items-center justify-center flex-col h-[900px]">
      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 2,
            spaceBetween: 30, // Add more space between cards
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 30, // Increased space for larger screens
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet", // Apply custom class
          bulletActiveClass: "swiper-pagination-bullet-active", // Active class
        }}
        autoplay={{
          delay: 1000, // 3 seconds delay for automatic slide transition
          disableOnInteraction: true, // Keep autoplay running even when user interacts
        }}
        modules={[FreeMode, Pagination, Autoplay]} // Include Autoplay module
        className="max-w-[90%] lg:max-w-[80%] m-20"
      >
        {/* Template Cards */}
        {Array(6)
          .fill("") // You can adjust the number of cards here
          .map((_, index) => (
            <SwiperSlide key={index}>
  <div className="flex flex-col gap-6 mb-20 group relative shadow-lg text-black bg-white rounded-xl px-6 py-8 h-[50vh] w-[80vw] lg:h-[60vh] lg:w-[70vw] xl:h-[45vh] xl:w-[60vw] mx-8 overflow-hidden cursor-pointer">
    <div className="relative flex flex-col gap-3">
      <h1 className="text-xl lg:text-2xl">Template {index + 1}</h1>
      <p className="lg:text-[18px]">Start with this template</p>
    </div>
  </div>
</SwiperSlide>

          ))}
      </Swiper>

      {/* Custom Pagination Styling */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          background-color: white; /* Make dots white */
          opacity: 0.6; /* Slight transparency for the inactive dots */
        }
        .swiper-pagination-bullet-active {
          background-color: white !important; /* Make active dot fully opaque */
          opacity: 1; /* Full opacity for active dot */
        }
      `}</style>
    </div>
  );
};

export default ActiveSlider;

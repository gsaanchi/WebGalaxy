import React from "react";
import ActiveSlider from "./ActiveSlider";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="relative min-h-screen bg-[radial-gradient(ellipse_at_top,#1a1a66_15%,#000033_40%,_#000000)] text-white flex flex-col items-center before:absolute before:inset-0 before:bg-[linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.5)_1px,transparent_1px)] before:bg-[size:32px_32px] before:opacity-10 before:pointer-events-none">
      {/* Header */}
      <div className="w-full bg-black py-4 px-6 flex justify-between items-center shadow-md">
        <h1 className="text-3xl font-bold text-white">WebGalaxy</h1>
        <button className="px-6 py-3 bg-[#0049F3] hover:bg-blue-700 rounded-lg border-none text-white">
          Your Profile
        </button>
      </div>

      {/* Hero Section */}
      <div className="relative w-full flex-grow flex flex-col justify-center p-16 pr-32 text-right mt-14">
        <div className="max-w-4xl space-y-6 sm:space-y-8 md:space-y-10">
          <p className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white drop-shadow-xl ">
            Build your website in
          </p>
          <p className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white drop-shadow-xl">
            seconds with AI.
          </p>
        </div>

        <div className="flex items-center rounded-md p-2 mt-20 w-full max-w-3xl ml-auto border-white relative bg-[#1F1F1F] shadow-lg">
          <input
            className="flex-1 px-4 py-5 bg-[#1F1F1F] text-white placeholder-[#B5B5B5] border border-[#B5B5B5] focus:outline-none rounded-lg pr-16 shadow-md"
            placeholder="Provide your website name and describe it in a few words."
          />
          <Link
            to="/Page2"
            className="absolute right-4 top-2 bottom-2 px-5 py-2 mt-2 mb-2 bg-[#0049F3] hover:bg-blue-700 rounded-lg text-white font-semibold transition-all flex items-center shadow-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="white"
              className="mr-2"
            >
              <path
                d="M15 2L15.5387 4.39157C15.9957 6.42015 17.5798 8.00431 19.6084 8.46127L22 9L19.6084 9.53873C17.5798 9.99569 15.9957 11.5798 15.5387 13.6084L15 16L14.4613 13.6084C14.0043 11.5798 12.4202 9.99569 10.3916 9.53873L8 9L10.3916 8.46127C12.4201 8.00431 14.0043 6.42015 14.4613 4.39158L15 2Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <path
                d="M7 12L7.38481 13.7083C7.71121 15.1572 8.84275 16.2888 10.2917 16.6152L12 17L10.2917 17.3848C8.84275 17.7112 7.71121 18.8427 7.38481 20.2917L7 22L6.61519 20.2917C6.28879 18.8427 5.15725 17.7112 3.70827 17.3848L2 17L3.70827 16.6152C5.15725 16.2888 6.28879 15.1573 6.61519 13.7083L7 12Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
            </svg>
            Generate
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      {/* <div className="relative w-full flex-grow flex flex-col items-end justify-center p-16 pr-40 text-right">

  <div className="max-w-2xl space-y-4 sm:space-y-6 md:space-y-8">
    <p className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-white drop-shadow-xl">
      Build your website in
    </p>
    <p className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-white drop-shadow-xl">
      seconds with AI.
    </p>
  </div>

  <div className="flex items-center rounded-md p-2 mt-20 w-full max-w-3xl ml-auto border-white relative bg-[#1F1F1F] shadow-lg">
    <input
      className="flex-1 px-4 py-5 bg-[#1F1F1F] text-white placeholder-[#B5B5B5] border border-[#B5B5B5] focus:outline-none rounded-lg pr-16 shadow-md"
      placeholder="Provide your website name and describe it in a few words."
    />

    <button className="absolute right-4 top-2 bottom-2 px-5 py-2 bg-[#0049F3] hover:bg-blue-700 rounded-lg text-white font-semibold transition-all flex items-center shadow-md">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        fill="white"
        className="mr-2"
      >
        <path
          d="M15 2L15.5387 4.39157C15.9957 6.42015 17.5798 8.00431 19.6084 8.46127L22 9L19.6084 9.53873C17.5798 9.99569 15.9957 11.5798 15.5387 13.6084L15 16L14.4613 13.6084C14.0043 11.5798 12.4202 9.99569 10.3916 9.53873L8 9L10.3916 8.46127C12.4201 8.00431 14.0043 6.42015 14.4613 4.39158L15 2Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M7 12L7.38481 13.7083C7.71121 15.1572 8.84275 16.2888 10.2917 16.6152L12 17L10.2917 17.3848C8.84275 17.7112 7.71121 18.8427 7.38481 20.2917L7 22L6.61519 20.2917C6.28879 18.8427 5.15725 17.7112 3.70827 17.3848L2 17L3.70827 16.6152C5.15725 16.2888 6.28879 15.1573 6.61519 13.7083L7 12Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
      Generate
    </button>
  </div>
</div> */}

      {/* Templates Section */}
      <div className="mt-16 w-3/4">
        <h3 className="text-lg text-left">or use our templates to start</h3>
        <ActiveSlider />
      </div>
    </div>
  );
};

export default Landing;

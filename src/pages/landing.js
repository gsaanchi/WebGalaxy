import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const [prompt, setPrompt] = useState({
    prompt:"",
  }); // State to manage the input value
  const navigate = useNavigate();

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      if (prompt.prompt.trim()) {
        navigate(`/PreviewPage?prompt=${encodeURIComponent(prompt.prompt)}`);
      }
    }
  };

  const handleChange = (event) => {
    setPrompt(event.target.value);
  };

  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center p-4 bg-gray-50 shadow-md">
        <h1 className="text-2xl font-bold text-gray-800">folio</h1>
        <button className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600">
          your profile
        </button>
      </div>
      <div className="flex min-h-screen h-3/4 text-white">
        {/* Sidebar */}
        <div className="w-1/4 bg-indigo-300 p-4 m-2 border rounded-md">
          <div className="text-center text-xl font-semibold mb-6">Templates</div>
          <div className="space-y-4">
            <div className="h-20 bg-indigo-400 rounded-lg"></div>
            <div className="h-20 bg-indigo-400 rounded-lg"></div>
            <div className="h-20 bg-indigo-400 rounded-lg"></div>
            <div className="h-20 bg-indigo-400 rounded-lg"></div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col items-center justify-center bg-gradient-to-br from-indigo-800 to-purple-900 relative m-2 border rounded-md">
          <h1 className="text-center text-2xl font-bold mb-8">
            No matter who you are, this is the only thing you need to build your website
          </h1>

          {/* Circular Design */}
          <div className="relative w-[400px] h-[400px] flex items-center justify-center">
            <div className="absolute w-[100%] h-[100%] rounded-full border border-white"></div>
            <div className="absolute w-[80%] h-[80%] rounded-full border border-white"></div>
            <div className="absolute w-[60%] h-[60%] rounded-full border border-white"></div>

            {/* Central Text */}
            <div className="absolute flex items-center justify-center bg-white text-black w-32 h-32 rounded-full text-center font-bold p-2">
              Code without Coding.
            </div>
            <input
                 className="absolute h-[50px] w-4/5 z-10 pl-[5px] bg-white text-black border border-gray-400 rounded-xl bottom-0"
                 placeholder="Enter the prompt for your desired portfolio"
                type="text"
                value={prompt.prompt} // Corrected to access the nested `prompt` field
                onChange={(event) => setPrompt({ prompt: event.target.value })} // Correctly updates state
                onKeyDown={handleKeyDown} // Handle 'Enter' key press
/>

            {/* Labels */}
            <div className="absolute top-4 left-8 text-sm bg-purple-700 px-2 py-1 rounded">Painter</div>
            <div className="absolute top-4 right-8 text-sm bg-purple-700 px-2 py-1 rounded">Florist</div>
            <div className="absolute bottom-18 left-8 text-sm bg-purple-700 px-2 py-1 rounded">Lawyer</div>
            <div className="absolute bottom-16 right-8 text-sm bg-purple-700 px-2 py-1 rounded">Doctor</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;

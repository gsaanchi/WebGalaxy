import React, { useState } from 'react';

const Page2 = () => {
  const [prompt, setPrompt] = useState('');

  const handleInputChange = (event) => {
    setPrompt(event.target.value);
  };

  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Header */}
      <div className="flex justify-between items-center p-4 bg-gray-50 shadow-md">
        <h1 className="text-2xl font-bold text-gray-800">folio</h1>
        <button className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600">
          your profile
        </button>
      </div>

      {/* Content */}
      <div className="flex flex-grow overflow-hidden">
        {/* Sidebar */}
        <div className="w-1/4 bg-gradient-to-b from-indigo-900 to-indigo-700 p-6 text-white">
          <input
            type="text"
            value={prompt}
            onChange={handleInputChange}
            placeholder="Enter the prompt to edit the website"
            className="w-full p-3 rounded-lg bg-white text-black mb-6 outline-none"
          />
          <div>
            <h2 className="text-lg font-semibold mb-4">Templates</h2>
            <div className="grid grid-cols-1 gap-4">
              <div className="h-24 bg-gray-300 rounded-md"></div>
              <div className="h-24 bg-gray-300 rounded-md"></div>
              <div className="h-24 bg-gray-300 rounded-md"></div>
              <div className="h-24 bg-gray-300 rounded-md"></div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-grow bg-gradient-to-br from-purple-800 to-purple-900 text-white p-6 overflow-y-auto">
          {/* Preview Section */}
          <div className="bg-purple-600 p-6 rounded-lg shadow-md max-w-full overflow-hidden">
            <h1 className="text-5xl font-bold text-center mb-4">PORTFOLIO</h1>
            <h2 className="text-xl font-semibold text-right">Caitlin Gwyneth</h2>
          </div>

          {/* Templates Section */}
          <div className="mt-6">
            <h3 className="text-lg font-bold mb-4">Templates</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="h-40 bg-gray-300 rounded-md"></div>
              <div className="h-40 bg-gray-300 rounded-md"></div>
              <div className="h-40 bg-gray-300 rounded-md"></div>
            </div>
          </div>
        </div>

        {/* Toolbar */}
        <div className="w-16 bg-gray-100 flex flex-col items-center p-4 space-y-6">
          <button className="p-3 bg-gray-300 rounded-full hover:bg-gray-400"></button>
          <button className="p-3 bg-gray-300 rounded-full hover:bg-gray-400"></button>
          <button className="p-3 bg-gray-300 rounded-full hover:bg-gray-400"></button>
          <button className="p-3 bg-gray-300 rounded-full hover:bg-gray-400"></button>
        </div>
      </div>
    </div>
  );
};

export default Page2;

import React,{useState} from 'react';
import { useLocation } from 'react-router-dom';

const PreviewPage = () => {
  const location = useLocation();

  // Extract the query parameters
  const queryParams = new URLSearchParams(location.search);
  const prompt = queryParams.get('prompt'); // Retrieve the "prompt" parameter

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800">
      <h1 className="text-2xl font-bold mb-4">Preview Page</h1>
      <div className="p-4 border rounded shadow bg-white">
        <h2 className="text-lg font-semibold mb-2">Your Prompt:</h2>
        <p className="text-gray-600">{prompt ? prompt : 'No prompt provided'}</p>
      </div>
      <button
        className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
        onClick={() => window.history.back()}
      >
        Go Back
      </button>
    </div>
  );
};

export default PreviewPage;

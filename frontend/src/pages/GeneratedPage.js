import React from "react";
import { useLocation, Link } from "react-router-dom";

const GeneratedPage = () => {
  const location = useLocation();
  const generatedUrl = location.state?.url || "";

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">Your Website is Ready!</h1>

      {generatedUrl ? (
        <iframe
          src={generatedUrl}
          className="w-3/4 h-[500px] border-2 border-white shadow-lg"
        ></iframe>
      ) : (
        <p>No file generated yet.</p>
      )}

      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold transition-all"
      >
        Generate Another
      </Link>
    </div>
  );
};

export default GeneratedPage;

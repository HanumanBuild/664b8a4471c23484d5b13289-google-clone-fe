import React, { useState } from 'react';
import './App.css';

function App() {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      window.location.href = `https://www.google.com/search?q=${query}`;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="Google Logo" className="mb-8" />
      <form onSubmit={handleSearch} className="w-full max-w-md">
        <div className="flex items-center border border-gray-300 rounded-full shadow-sm">
          <input
            type="text"
            className="flex-grow px-4 py-2 text-lg focus:outline-none rounded-l-full"
            placeholder="Search Google"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white text-lg font-semibold rounded-r-full hover:bg-blue-600 focus:outline-none"
          >
            Google Search
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
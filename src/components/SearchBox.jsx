import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const SearchBox = () => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (username) {
      navigate(`/ProfilePage/${username}`);
    }
  };

// const SearchBox = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen text-center bg-gradient-to-r from-gray-950 to-blue-950">
      <div className="text-white mb-10">
        <h1 className="text-5xl font-bold mb-6">A simpler way to show your GitHub profile and repositories.</h1>
      </div>
      <div className="bg-gray-800 shadow-2xl p-10 rounded-xl transform hover:scale-105 transition duration-500 w-96">
        <input
          type="text"
          placeholder="Enter a GitHub username..."
          onChange={(e) => setUsername(e.target.value)}
          className="px-4 py-2 border rounded-lg w-full mb-4 focus:outline-none focus:ring-2 focus:ring-purple-600"
        />
        <button onClick={handleSearch} className="px-6 py-2 bg-purple-600 text-white rounded-lg transform hover:scale-105 transition duration-500">
          View
        </button>
      </div>
    </div>
  );
};

export default SearchBox;

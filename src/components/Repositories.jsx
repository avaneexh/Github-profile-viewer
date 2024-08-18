import React from 'react';

function Repositories({ repos }) {
  return (
    <div className="w-full md:w-2/3 p-4">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h3 className="text-xl mb-4">Repositories</h3>
        <ul className="space-y-4">
          {repos.map(repo => (
            <li key={repo.id} className="bg-gray-100 p-4 rounded-lg">
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 text-lg">{repo.name}</a>
              {repo.description && <p className="mt-2">{repo.description}</p>}
              <p className="mt-2">⭐ {repo.stargazers_count} | 🍴 {repo.forks_count}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Repositories;

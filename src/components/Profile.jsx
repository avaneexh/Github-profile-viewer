import React from 'react';

function Profile({ profile }) {
  return (
    <div className="w-full md:w-1/3 p-4">
      <div className="bg-white shadow-md rounded-lg p-6">
        <img src={profile.avatar_url} alt={profile.name} className="rounded-full w-32 h-32 mx-auto" />
        <h2 className="text-xl text-center mt-4">{profile.name}</h2>
        {profile.bio && <p className="text-center mt-2">{profile.bio}</p>}
        {profile.location && <p className="mt-2"><strong>Location:</strong> {profile.location}</p>}
        {profile.company && <p className="mt-2"><strong>Company:</strong> {profile.company}</p>}
        {profile.blog && <p className="mt-2"><strong>Website:</strong> <a href={profile.blog} target="_blank" rel="noopener noreferrer" className="text-blue-500">{profile.blog}</a></p>}
        {profile.twitter_username && <p className="mt-2"><strong>Twitter:</strong> <a href={`https://twitter.com/${profile.twitter_username}`} target="_blank" rel="noopener noreferrer" className="text-blue-500">@{profile.twitter_username}</a></p>}
        <p className="mt-2"><strong>Followers:</strong> {profile.followers}</p>
        <p className="mt-2"><strong>Following:</strong> {profile.following}</p>
        <p className="mt-2"><strong>Repositories:</strong> {profile.public_repos}</p>
      </div>
    </div>
  );
}

export default Profile;

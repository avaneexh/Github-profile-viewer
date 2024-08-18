import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Profile from './Profile';
import Repositories from './Repositories';
import Navbar from './Navbar';

function ProfilePage() {
  const username = "avaneexh"
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const profileResponse = await axios.get(`https://api.github.com/users/${username}`);
        setProfile(profileResponse.data);

        const reposResponse = await axios.get(`https://api.github.com/users/${username}/repos`);
        setRepos(reposResponse.data);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };

    fetchProfile();
  }, [username]);

  if (!profile) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }

  return (

    <>
      <Navbar />
      <div className="flex flex-col items-center md:flex-row md:items-start md:justify-between p-6">
        <Profile profile={profile} />
        <Repositories repos={repos} />
      </div>
    </>
  );
}

export default ProfilePage;

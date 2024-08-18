import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchPage from './components/SearchPage';
import ProfilePage from './components/ProfilePage';
import Contact from './components/Contact';


function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<SearchPage />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/ProfilePage/:username" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
}

export default App;
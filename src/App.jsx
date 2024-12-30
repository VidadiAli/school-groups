import React from 'react';
import { Route, Routes, Router } from 'react-router-dom';
import Girish from './Components/Girish/Girish';
import User from './Components/User/User';

const App = () => {
  return (
    <Router basename="/school-groups"> {/* Basename əlavə edildi */}
      <Routes>
        <Route path="/" element={<Girish />} />
        <Route path="/:user" element={<User />} />
      </Routes>
    </Router>
  );
};

export default App;

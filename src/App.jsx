import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Girish from './Components/Girish/Girish';
import User from './Components/User/User';

const App = () => {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Girish />} />
          <Route path="/:user" element={<User />} />
        </Routes>
    </div>
  );
};

export default App;

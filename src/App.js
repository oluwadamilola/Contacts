import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from './component/Navbar'
import User from './component/ContactList'
import UserCreate from './component/CreateContact'
import UserUpdate from './component/UpdateContact'
import CreateContact from './component/CreateContact';


export default function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<User />} />
          <Route  path='/create' element={<UserCreate />} />
          <Route  path='/update/:id' element={<UserUpdate/>} />
        </Routes>
      </div>
    </Router>
  );
}
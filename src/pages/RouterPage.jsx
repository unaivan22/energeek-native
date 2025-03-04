import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Home from './Home'
import Admin from './cpanel/Admin'
import AddProject from './cpanel/project/AddProject';
import AddTeam from './cpanel/team/AddTeam';
import Login from './cpanel/Login';
import Daftar from './cpanel/Signup';
import ProjectDetail from './cpanel/project/ProjectDetail';

export default function RouterPage() {
  const isAuthenticated = sessionStorage.getItem('adminAuth');
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route 
              path="/admin" 
              element={isAuthenticated ? <Admin /> : <Navigate to="/login" />} 
            />
            <Route path="/Login" element={<Login />} />
            {/* <Route path='/admin' element={<Admin/>} /> */}

            <Route path='/project/add' element={<AddProject/>} />
            <Route path="/project/:id" element={<ProjectDetail />} />


            <Route path='/team/add' element={<AddTeam/>} />
            {/* <Route path='*' element={<NotFound/>} /> */}

            <Route path='/login' element={<Login/>} />
            <Route path='/signup' element={<Daftar/>} />
        </Routes>
     </Router>
  )
}
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './Home'
import Admin from './cpanel/Admin'

export default function RouterPage() {

  return (
    <Router>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/admin' element={<Admin/>} />
            {/* <Route path='*' element={<NotFound/>} /> */}
        </Routes>
     </Router>
  )
}
import React from 'react';
import Login from './layout/authentication/login/index';
import Signup from './layout/authentication/sign-up/index';
import Dashboard from './layout/dashboard/index';
import Main from './layout/dashboard/main';
import ListItem from './layout/dashboard/listItem';
import Side from './layout/dashboard/sidevarList';
import DialIcon from './layout/dashboard/conponent/dialIcon';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Review from './layout/reviewPage/review';
function App() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/signup" element={<Signup />}></Route>
    //     <Route path="/login" element={<Login />}></Route>
    //     <Route path="/" element={<Dashboard />}></Route>
    //   </Routes>
    // </BrowserRouter>
    <Review />
  );
}

export default App;

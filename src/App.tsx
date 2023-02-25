import React from 'react';
import { Route, Routes } from "react-router-dom";
import { Basket } from './pages/Basket';
import { Main } from './pages/Main';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Main/>} />
      <Route path='/Basket' element={<Basket/>} />
    </Routes>
  );
};

export default App;

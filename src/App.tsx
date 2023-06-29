import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';
import Counter from './pages/Counter';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route path="/" index element={<Home />} />
          <Route path="counter" element={<Counter />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

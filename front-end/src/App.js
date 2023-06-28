import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./layout/Header";
import Home from "./home/Home";
import './App.css';

function App() {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
          <Route path ="/" element={<Home />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;

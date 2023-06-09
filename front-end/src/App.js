import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./layout/Header";
import Layout from "./layout/Layout";
import './App.css';

function App() {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
          <Route path ="/" element={<Layout />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;

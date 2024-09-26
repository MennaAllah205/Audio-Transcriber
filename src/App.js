// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Transcriber from "./components/Transcriber";
import About from "./components/About";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Css/Style.css";
import HowToUse from "./components/HowToUse";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/transcriber" element={<Transcriber />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <About />
        <HowToUse />
        <Footer />
      </div>
    </Router>
  );
};

export default App;

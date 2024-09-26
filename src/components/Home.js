// Home.js
import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="container text-center mt-5">
      <h2>Welcome to MoonTranscriber</h2>
      <p>Your one-stop solution for converting audio to text.</p>
      <Link to="/transcriber" className="btn btn-primary mt-3">
        Get Started
      </Link>
    </div>
  );
};

export default Home;

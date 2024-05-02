import { useState } from "react";
import "./App.css";
import Navbar from "./navbar/Navbar";
import Hero from "./components/Hero";

function App() {
  return <div>
    <Navbar />
      <Hero />
  </div>
}

export default App;

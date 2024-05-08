import { useState } from "react";
import "./App.css";
import Navbar from "./navbar/Navbar";
import Hero from "./components/Hero";
import Test from "./components/Test";
import Vision from "./components/Vision";
import WhyDhiyodhha from "./components/WhyDhiyodhha";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import CurveyLine from "./components/CurveyLine";

function App() {
  return <div>
    <Navbar />
      <Hero />
      <Test />
      <CurveyLine />
      <Vision />
      <WhyDhiyodhha />
      <Testimonials />
      <Footer />
  </div>
}

export default App;

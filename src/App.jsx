import { useState } from "react";
import "./App.css";
import Hero from "./components/Hero";
import Test from "./components/Test";
import Vision from "./components/Vision";
import WhyDhiyodhha from "./components/WhyDhiyodhha";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import IgFeed from "./components/IgFeed";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Test />
      <Vision />
      <AboutUs />
      <WhyDhiyodhha />
      <Testimonials />
      <IgFeed />
      <Footer />
    </div>
  );
}

export default App;

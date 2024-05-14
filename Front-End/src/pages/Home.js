import React from "react";
import Footer from "../components/footer/Footer";
import HomeContent from "../components/homeContent/HomeContent";
import Banner from "../components/banner/Banner";
import "../style/style.css";
import Navigation from "../components/navigation/Navigation";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Banner />
      <HomeContent />
      <Footer />
    </div>
  );
};

export default Home;

import React from "react";
import Article from "../components/Article.jsx";
import Benefits from "../components/Benefits";
import EverlaneFavourites from "../components/EverlaneFavourites";
import Heading from "../components/Heading";
import Landing from "../components/Landing";
import OutfitSection from "../components/OutfitSection";
import PhotoGallery from "../components/PhotoGallery";
import ProgressReport from "../components/ProgressReport";
import Review from "../components/Review";
import ShopByCategory from "../components/ShopByCategory";
import Footer from "../components/Footer.jsx";
const LandingPage = () => {
  return (
    <div className="relative">
      <Heading />
      <Landing />
      <ShopByCategory />
      <OutfitSection />
      <ProgressReport />
      <EverlaneFavourites />
      <Review />
      <Article />
      <PhotoGallery />
      <Benefits />
      <Footer/>
      
    </div>
  );
};

export default LandingPage;

import React from "react";
import Tabber from "./compnents/Tabber/Tabber";
import Layout from "./compnents/Layout/Layout";
import Hero from "./compnents/HeroSection/Hero";
import FeaturedProject from "./compnents/FeaturedProject/FeaturedProject";
import ScrollHeadings from "./compnents/Scroll/ScrollHeadings";
import Video from "../public/assets/video/DipixelsAllServices.mp4";
import HeroContactus from "./compnents/HeroSection/HeroContactus";
import ThemesTabs from "./compnents/ThemesTabs/ThemesTabs";

const Themes = () => {
  return (
    <>
 <Layout>
        <Hero
          title="our"
          company="Featured themes"
          description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat."
          videoLink={Video}
        />
        
        <ThemesTabs/>
   
    
      </Layout>
    </>
  )
}

export default Themes

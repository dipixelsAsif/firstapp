// pages/ThemeTabDetails.js
import React from 'react';
import Layout from './compnents/Layout/Layout';
import Hero from './compnents/HeroSection/Hero';

import Video from '../public/assets/video/Aboutus.mp4';

const ThemeTabDetails = () => {

  return (
    <Layout>
      <Hero
        title='Barbecue Monster Indie Rock Flyer'
        description='This vector art illustrated flyer is designed to promote your creative business like music (indie rock / alternative / underground concert), or other creative fields like art and community poster.'
        company='dipixels'
        videoLink={Video}
      />
      
      <div className='container'>
        <div className='row'>
            <div className='main-image'>
            <img src='/assets/WebPortfolio1.png' alt='' />
            </div>
        </div>
      </div>
    </Layout>
  );
};

export default ThemeTabDetails;

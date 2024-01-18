import React, { useState } from 'react'
import PortfolioContent from '../Portfolio/PortfolioContent'
import styles from '../../../styles/PackagesTabber.module.css'

const AllThemesData = [
    {
      image: '/assets/WebPortfolio1.png',
      ispaid:true
    },
    {
      image: '/assets/WebPortfolio2.png',
      ispaid:true
    },
    {
      image: '/assets/WebPortfolio3.png',
      ispaid:true
    },
    {
      image: '/assets/MobilePortfolio1.png',
      ispaid:true
    },
    {
      image: '/assets/MobilePortfolio2.png',
      ispaid:true
    },
    {
      image: '/assets/MobilePortfolio3.png',
      ispaid:true
    },
    {
      image: '/assets/VideoPortfolio1.png',
      ispaid:true
    },
    {
      image: '/assets/VideoPortfolio2.png',
      ispaid:true
    },
    {
      image: '/assets/VideoPortfolio3.png',
      ispaid:true
    },
  ]


  const PharmacyData = [
    {
      image: '/assets/WebPortfolio1.png',
      ispaid:true
    },
    {
      image: '/assets/WebPortfolio2.png',
      ispaid:true
    },
    {
      image: '/assets/WebPortfolio3.png',
      ispaid:false
    },
    {
      image: '/assets/WebPortfolio4.png',
      ispaid:false
    },
    {
      image: '/assets/WebPortfolio5.png',
      ispaid:false
    },
    {
      image: '/assets/WebPortfolio6.png',
      ispaid:false
    },
    {
      image: '/assets/VideoPortfolio1.png',
      ispaid:false
    },
    {
      image: '/assets/VideoPortfolio2.png',
      ispaid:false
    },
    {
      image: '/assets/VideoPortfolio3.png',
      ispaid:false
    },
  ]

  const ChurchData = [
    {
      image: '/assets/MobilePortfolio1.png',
      ispaid:true
    },
    {
      image: '/assets/MobilePortfolio2.png',
      ispaid:true
    },
    {
      image: '/assets/MobilePortfolio3.png',
      ispaid:true
    },
    {
      image: '/assets/MobilePortfolio4.png',
      ispaid:true
    },
    // {
    //   image: '/assets/MobilePortfolio5.png',
    // },
  ]


  const DentalClinicsData = [
    {
      image: '/assets/LogoPortfolio1.png',
      ispaid:false
    },
    {
      image: '/assets/LogoPortfolio2.png',
      ispaid:false
    },
    {
      image: '/assets/LogoPortfolio3.png',
      ispaid:false
    },
    {
      image: '/assets/LogoPortfolio4.png',
      ispaid:false
    },
    {
      image: '/assets/LogoPortfolio5.png',
      ispaid:false
    },
    {
      image: '/assets/LogoPortfolio6.png',
      ispaid:true
    },
  ]

  const BarbersSaloonsData = [
    {
      image: '/assets/VideoPortfolio1.png',
      ispaid:true
    },
    {
      image: '/assets/VideoPortfolio2.png',
      ispaid:true
    },
    {
      image: '/assets/VideoPortfolio3.png',
      ispaid:true
    },
    {
      image: '/assets/VideoPortfolio4.png',
      ispaid:true
    },
    {
      image: '/assets/VideoPortfolio5.png',
      ispaid:true
    },
    {
      image: '/assets/VideoPortfolio6.png',
      ispaid:true
    },
  ]


  
  const GroceryStoresData = [
    {
      image: '/assets/VideoPortfolio1.png',
      ispaid:true
    },
    {
      image: '/assets/VideoPortfolio2.png',
      ispaid:true
    },
    {
      image: '/assets/VideoPortfolio3.png',
      ispaid:true
    },
    {
      image: '/assets/VideoPortfolio4.png',
      ispaid:true
    },
    {
      image: '/assets/VideoPortfolio5.png',
      ispaid:true
    },
    {
      image: '/assets/VideoPortfolio6.png',
      ispaid:true
    },
  ]






  function ThemesTabs () {

    const[isActive, setIsActive] = useState(0);
    
    const tabs = [
       {
        label:'All',
        content: (
            <div className='All-container' style={{ marginTop: '1em' }}>
              <PortfolioContent PortfolioData={DentalClinicsData} />
            </div>
          ),
       },
       {
        label: 'Pharmacy',
        content: (
          <div className='web-design-container'>
            <PortfolioContent PortfolioData={PharmacyData} />
          </div>
        ),
      },
      {
        label: 'Church',
        content: (
          <div className='mobile-apps-container' style={{ marginTop: '1em' }}>
            <PortfolioContent PortfolioData={ChurchData} />
          </div>
        ),
      },
      {
        label: 'Dental Clinics',
        content: (
          <div className='mobile-apps-container' style={{ marginTop: '1em' }}>
            <PortfolioContent PortfolioData={DentalClinicsData} />
          </div>
        ),
      },
      {
        label: 'Barbers/ Saloons',
        content: (
          <div className='mobile-apps-container' style={{ marginTop: '1em' }}>
            <PortfolioContent PortfolioData={BarbersSaloonsData} />
          </div>
        ),
      },
      {
        label: 'Grocery Stores',
        content: (
          <div className='mobile-apps-container' style={{ marginTop: '1em' }}>
            <PortfolioContent PortfolioData={GroceryStoresData} />
          </div>
        ),
      },




    ];


    return(
<>
<div className={styles.tabber_section}>
      <div className={styles.tabber_warpper}>
        <div className={styles.tab_buttons}>
       
          {tabs.map((tab, index) => (
            
            <div
              style={{
                color: isActive === index ? '#00F3F4' : '',
                // fontFamily: 'Monument Extended Regula',
              }}
              key={index}
              onClick={() => {
                setIsActive(index)
              }}
              className={`${styles.tab_button} ${
                isActive === index ? 'active' : ''
              }`}
            >
              {tab.label}
            </div>
          ))}
        </div>
        <div className={styles.tab_content}>{tabs[isActive].content}</div>
      
      </div>
    </div>
  

</>
    )


  }

  export default ThemesTabs


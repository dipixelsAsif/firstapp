import React from 'react'
import Button from '../Buttons/Button/Button'
import styles from '../../../styles/portfolio.module.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Link from 'next/link';


const PortfolioContent = ({ PortfolioData }) => {

  return (
    <>
      <div
        data-aos='slide-up'
        className={styles.portfolio_section_content_images}
      >
        {PortfolioData?.map((item) => {
      
        
          return (
            <>
              <div
                data-aos='flip-right'
                className={styles.portfolio_section_content_images_img}
              >
    
   {/* 
       <Link href={`/testpage/${encodeURIComponent(item.image)}`}>
             
                  <img src={item.image} alt='' />
               
     </Link>
   
   */}

    <Link href={`/tabs-detail`}>
             
                  <img src={item.image} alt='' />
               
     </Link>


      
             <p className='conditioaldata' style={{ position:'absolute',backgroundColor:'#fff',color:'#000',padding:'7px 15px',top:'5%',right:'8%' }}>{item.ispaid ? 'Paid' : 'Free'}</p> 
            
         
              </div>
            </>
          )
        })}
      </div>
      <div
        style={{
          marginTop: '8em',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        {/* <Button>view more</Button> */}
      </div>
    </>
  )
}

export default PortfolioContent

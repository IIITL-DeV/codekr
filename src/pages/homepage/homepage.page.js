import React, {useEffect,useState} from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import "./homepage.styles.css";
import AOS from 'aos';
import Navbar from '../../components/Header/Navbar';
import Footer from '../../components/Footer/footer';

import Typewriter from 'typewriter-effect';
import '../../../node_modules/reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';
import {Bee} from '@carbon/icons-react';
import FriendSVG from '../../assets/homepage/images/FriendSVG.js';
import ProfileFeature from '../../assets/homepage/images/ProfileFeature';
import ThirdIcon from '../../assets/homepage/images/ThirdIcon';
import UpsolveIcon from '../../assets/homepage/images/UpsolveIcon';
import LadderIcon from '../../assets/homepage/images/LadderIcon';
import PlaylistIcon from '../../assets/homepage/images/PlaylistIcon';
import Saly10 from '../../assets/homepage/images/Saly10.png'



const Homepage = () => {
  AOS.init();
  let err=localStorage.getItem("err");
  localStorage.removeItem("err");
  

  return ( 
    <>
    <Navbar />
    {
     err?
      
      
     <Popup open={true}>
      <div style={{color:'white',backgroundColor:'black',padding:'4px'}}>{err}</div>
   </Popup>
     
    :<></>
     
   }

    
    <Container className="maincon" >
   
      <Row className="bannerContainer bigRow" id="LandingBanner">
        <Col className="first heading1" lg={12} md={12} sm={12}>   
        <div className="headinBanner" 
          style={{
            display:'flex',
            justifyContent:'center',
            marginTop:'100px',
            paddingTop:'100px',
            fontSize:'50px'
          }}
        > 
          <div className="headingText">
            <h5 className="text-white heading2" style={{fontSize:'5rem'}}>Code-kr</h5>
            <br></br><br></br>
            <h5 className="text-white heading2">
              {/* <Typewriter
                options={{
                  strings: ['Dig Deeper Into Coding'],
                  autoStart: true,
                  loop: true,
                }}
                style={{fontSize:"40px"}}/> */}
            </h5>
          </div>     
          {/* <div className="headingImage"><img src={image} className="floating"></img></div> */}
        </div>
        </Col>
        
      </Row>

 

        
          
          
          {/* videos section
          <Row className="bigRow">
            <h1 style={{
              textAlign:"center",
              marginBottom:"30px"
            }}>Resources</h1>
            <Row className="vids">
              <Col className="video" lg={4} md={6} sm={12}  data-aos="slide-up"><iframe width="350" height="300" className="vidframe"
  src="https://www.youtube.com/embed/VbMtwluH980">
  </iframe></Col>
              <Col className="video" lg={4} md={6} sm={12} data-aos="slide-up"><iframe width="350" height="300"className="vidframe"
  src="https://www.youtube.com/embed/ExNBNpCXwAo">
  </iframe></Col>
              <Col className="video" lg={4} md={6} sm={12} data-aos="slide-up"><iframe width="350" height="300"className="vidframe"
  src="https://www.youtube.com/embed/qHBhRoDkIm4">
  </iframe></Col>
            </Row>
          </Row> */}

          
       
      {/*Footer*/}
      {/* <Row data-aos="slide-up" className="fixed-bottom  footer"> */}

      
      {/* <footer>
  <p className="text-warning">Copyright@Code-kr | Help/Issue :
  <a className="text-warning" href="mailto:hege@example.com">Code-kr@example.com</a></p>
</footer> */}
      
     
       </Container>
       {/* <Testimonial/> */}
       {/* <Footer /> */}

     
    </>
  );
};

export default Homepage;

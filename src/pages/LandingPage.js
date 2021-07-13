import { useEffect } from 'react';

// styled 
import styled from 'styled-components';

// section components
import AboutSection from '../components/AboutSection';
import MissionSection from '../components/MissionSection';

// images
import LandingImage from '../images/landingImage.png';
import Icon6 from '../images/icon6.svg';
import Icon7 from '../images/icon7.svg';
import Icon8 from '../images/icon8.svg';
import Icon9 from '../images/icon9.svg';
import Icon10 from '../images/icon10.svg';

// animations
import { motion } from 'framer-motion';
import {pageAnimations}  from '../Animations.js';


const LandingPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <>
            <StyledLandingPage  variants={pageAnimations} initial="hidden" animate='show' exit="exit">
                <div className="floatingImages" >
                    <img className='image1' id="image" src={Icon6} alt=""/>
                    <img className='image2' id="image" src={Icon7} alt="" />
                    <img className='image3' id="image" src={Icon8} alt="" />
                    <img className='image4' id="image" src={Icon9} alt="" />
                    <img className='image5' id="image" src={Icon10} alt="" />
                </div>
                <div className="textContainer">
                    <h2>Volskya Pharmacutical</h2>
                    <h3>Creating pharmacutical solutions for the greater good.</h3>
                    <a href="#about">Learn More</a>
                </div>
                <img src={LandingImage} alt="" />
            </StyledLandingPage>
            <AboutSection />
            <MissionSection />
        </>
    )
}

const StyledLandingPage = styled(motion.div)`
height: 70vh;
background: #00334E;
display: flex;
@media (max-width: 1250px){
        height: 50vh;
        }
@media (max-width: 750px){
       flex-direction: column;
  }
.floatingImages {
    display: block;
    position: absolute;
    width: 70%;
    height: 80%;
    z-index: 1;
    img {
        position: absolute;
        width: 150px;
        height: 150px;
    }
    .image1{
        top: 30%;
        right: 20%;
        transition: 0.3s;
        animation: float1 150s infinite;
    }
    .image2{
        top: 30%;
        right: 20%;
        transition: 0.3s;
        animation: float2 141s infinite;
    }
    .image3{
        top: 30%;
        right: 20%;
        transition: 0.3s;
        animation: float3 142s infinite;
    }
    .image4{
        top: 30%;
        right: 20%;
        transition: 0.3s;
        animation: float4 143s infinite;
    }
    .image5{
        top: 30%;
        right: 20%;
        transition: 0.3s;
        animation: float5 142s infinite;
    }
}

@keyframes float1 {
  0% {
    top: 30%;
        left: 70%;
}
20% {
    top: -10%;
    left: 50%;
} 
40% {
   top: 20%;
     left: -40%
}
60% {
    top: 70%;
    left: -30%;
}
80% {
    top: 90%;
    left: 50%;
}
100% {
    top: 30%;
    left: 70%;
    }
}
@keyframes float2 {
  0% {
    top: 30%;
        left: 70%;
}
20% {
    top: -10%;
    left: -60%;
} 
40% {
   top: 90%;
     left: 90%
}
60% {
    top: -10%;
    left: 90%;
}
80% {
    top: 90%;
    left: -60%;
}
100% {
    top: 30%;
    left: 70%;
    }
}
@keyframes float3 {
  0% {
    top: 30%;
        left: 70%;
}
20% {
    top: 89%;
    left: 89%;
} 
40% {
   top: -4%;
     left: -54%
}
60% {
    top: 89%;
    left: -54%;
}
80% {
    top: 4%;
    left: 54%;
}
100% {
    top: 30%;
    left: 70%;
    }
}
@keyframes float4 {
  0% {
    top: 30%;
        left: 70%;
}
20% {
    top: -11%;
    left: 91%;
} 
40% {
   top: 81%;
     left: -61%
}
60% {
    top: -11%;
    left: -61%;
}
80% {
    top: 91%;
    left: 91%;
}
100% {
    top: 30%;
    left: 70%;
    }
}
@keyframes float5 {
    0% {
    top: 30%;
        left: 70%;
}
20% {
    top: 82%;
     left: -62%;
} 
40% {
    top: -12%;
    left: 92%;
}
60% {
    top: 92%;
    left: 92%;
}
80% {
    top: -12%;
    left: -62%;
}
100% {
    top: 30%;
    left: 70%;
    }
}

.textContainer {
    display: flex;
    flex-direction: column;
    width: 40%;
    margin: auto;
    margin-left: 3em;
    z-index: 2;
    @media (max-width: 750px){
       width: 100%;
       
  }
    h2 {
        font-size: 2em;
        color: #cfcfcf;
        margin: 12px 0;
        letter-spacing: 1px;
    }
    h3 {
        font-size: 1.5em;
        color: #cfcfcf;
        margin: 10px 0;
        letter-spacing: 1px;
    }
    a {
        width: 40%;
        padding: 12px 0;
        text-align: center;
        font-size: 1.5em;
        color: black;
        background: white;
        border-radius: 8px;
        margin: 12px 0;
        letter-spacing: 1px;
        box-shadow: 2px 2px 10px black;
        &:hover{
            background: #ffffff75;
            transform: scale(1.2);
        }
    }
}
img {
    width: 50%;
    height: 70%;
    margin: auto;
    z-index: 2;
    border-radius: 12px;
    @media (max-width: 750px){
      height: 50%;
      width: 90%;
  }
}
`;


export default LandingPage;
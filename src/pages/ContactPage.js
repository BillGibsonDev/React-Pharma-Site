import { useEffect } from 'react';

// styled 
import styled from 'styled-components';

//images
import ContactImage from '../images/undraw2.png';
import emailIcon from '../images/emailIcon.png';
import mailIcon from '../images/mailIcon.png';
import phoneIcon from '../images/phoneIcon.png';

// animations
import { motion } from 'framer-motion';
import {pageAnimations}  from '../Animations.js';


const ContactPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <StyledContactPage variants={pageAnimations} initial="hidden" animate='show' exit="exit">
            <h1>Contact Us Today</h1>
            <div className="contactWrapper">
                <div className="textContainer">
                    <h3><img src={phoneIcon} />Phone: 666-777-9999</h3>
                    <h3><img src={emailIcon} />Email: Email@Volskya.com</h3>
                    <h3><img src={mailIcon} />P.O Box: 444 San Diego, CA 99990 </h3>
                </div>
                <img id='contactImage' src={ContactImage} alt="" />
            </div>
        </StyledContactPage>
    )
}

const StyledContactPage = styled(motion.div)`
height: 70vh;
background: #00334E;
display: flex;
justify-content: center;
flex-direction: column;
text-align: left;
    @media (max-width: 850px){
        height: 90vh;
    }
h1 {
    font-size: 4em;
    color: white;
    border-bottom: 4px solid white;
    width: 60%;
    margin-left: 1em;
}
.contactWrapper {
    display: flex;
    width: 100%;
    margin: auto;
    align-items: center;
    justify-content: center;
    @media (max-width: 850px){
        flex-direction: column;
    }
.textContainer {
display: flex;
flex-direction: column;
justify-content: center;
width: 40%;
text-align: left;
    @media (max-width: 850px){
    width: 90%;
    }
h3 {
    color: white;
    font-size: 1.5em;
    letter-spacing: 1px;
    margin: 1em 0;
    display: flex;
    align-items: center;
    border-bottom: 2px solid lightgray;
    width: 90%;
    img {
        width: 40px;
        margin-right: 1em;
        }
    }
    
}
#contactImage {
    width: 40%;
    border-radius: 12px;
    @media (max-width: 850px){
        width: 100%;
        margin: 1em auto;
    }
}
}
`;


export default ContactPage;
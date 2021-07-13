import { useEffect } from 'react';

// styled 
import styled from 'styled-components';

// images
import News1 from '../images/borpaHeader2.jpg';
import News2 from '../images/section2.jpg';
import News3 from '../images/section3.jpg';

// animations
import { motion } from 'framer-motion';
import {pageAnimations}  from '../Animations.js';

const NewsPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <StyledNews variants={pageAnimations} initial="hidden" animate='show' exit="exit">
            <h1>Latest News..</h1>
        <article>
            <img src={News1} alt="trials image" />
            <div className="articleTextWrapper">
                <h3>Clincial Trials</h3>
                <p>Borpa Pharma Solutions continues to advance clinical trials following the guidence of the FDA and our partners. CEO and Chief Research Officers are working continuesly to ensure a timely and efficent trial process...
                    <a href="#about">Learn More</a></p>
            </div>
        </article>
        <article>
            <div className="articleTextWrapper">
                <h3>Press Releases</h3>
                <p>Borpa Pharma Solutions continues to advance clinical trials following the guidence of the FDA and our partners. CEO and Chief Research Officers are working continuesly to ensure a timely and efficent trial process...
                    <a href="#news">Learn More</a></p>
            </div>
            <img src={News2} alt="news image" />
        </article>
        <article id="lastArticle">
            <img src={News3} alt="our team image" />
            <div className="articleTextWrapper">
                <h3>Our Team</h3>
                <p>Borpa Pharma Solutions continues to advance clinical trials following the guidence of the FDA and our partners. CEO and Chief Research Officers are working continuesly to ensure a timely and efficent trial process...
                    <a href="#contact">Learn More</a></p>
            </div>
        </article>
    </StyledNews>
    )
}

const StyledNews = styled(motion.div)`
height: 100%;
background: #00334E;
display: flex;
flex-direction: column;
justify-content: center;
h1 {
    font-size: 4em;
    color: white;
    width: 60%;
    margin: 1em 0;
    border-bottom: 4px solid white;
    margin-left: 1em;
}
article {
        width: 80%;
        background: $blue;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 2em auto;
        position: relative;
        border-radius: 8px;
        background: black;
        box-shadow: 8px 8px 10px #ffffff1a;
        img {
        width: 320px;
        border-radius: 8px;
        @media (max-width: 750px){
            display: none;
            }
        }
    .articleTextWrapper {
        width: 90%;
        margin: 0 1em;
    
    h3 {
        font-size: 3em;
        color: #b6b6b6;
        text-decoration: underline $orange;
        text-underline-position: under;
    }
    p {
        font-size: 1.5em;
        color: white;
        padding: .5em;
        letter-spacing: 1px;
        font-weight: 300;
    }
    a {
        color: lightblue;
        font-weight: 700;
        letter-spacing: 1px;
        text-decoration: underline lightblue;
        text-underline-position: under;
        margin-left: 6px;
    }
    a:hover {
        color: white;
        
    }
}
    #lastArticle {
        border-bottom: 5%;
    }
}
`;


export default NewsPage;

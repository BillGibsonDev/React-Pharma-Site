// styled 
import styled from 'styled-components';

// images
import About1 from '../images/aboutIcon1.png';
import About2 from '../images/aboutIcon2.png';
import About3 from '../images/aboutIcon3.png';
import About4 from '../images/aboutIcon4.png';
import About5 from '../images/aboutIcon5.png';

const AboutSection = () => {
    return (
        <StyledAboutSection id="about">
            <h1>About Volskya</h1>
            <div className="aboutTextContainer">
                <article>
                    <div className="articleTitleWrapper">
                        <img src={About4} alt="" />
                        <h3>Ethical</h3>
                    </div>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur excepturi ad a ipsa est minus adipisci illo odio ducimus facilis! Nam maxime in id!</p>
                </article>
                <article>
                    <div className="articleTitleWrapper">
                        <img src={About5} alt="" />
                        <h3>Reliable</h3>
                    </div>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur excepturi ad a ipsa est minus adipisci illo odio ducimus facilis! Nam maxime in id!</p>
                </article>
                <article>
                    <div className="articleTitleWrapper">
                        <img src={About3} alt="" />
                        <h3>Leading Edge</h3>
                    </div>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur excepturi ad a ipsa est minus adipisci illo odio ducimus facilis! Nam maxime in id!</p>
                </article>
                <article>
                    <div className="articleTitleWrapper">
                        <img src={About2} alt="" />
                        <h3>Responsive</h3>
                    </div>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur excepturi ad a ipsa est minus adipisci illo odio ducimus facilis! Nam maxime in id!</p>
                </article>
            </div>
        </StyledAboutSection>
    )
}

const StyledAboutSection = styled.div`
height: 70vh;
background: #00334E;
display: flex;
flex-direction: column;
justify-content: center;
@media (max-width: 1250px){
        height: 50vh;
        }
@media (max-width: 750px){
       flex-direction: column;
       height: 70vh;
  }
h1 {
    font-size: 4em;
    color: white;
    border-bottom: 4px solid white;
    width: 60%;
    margin-left: 1em;
    margin-bottom: 1em;
}
.aboutTextContainer {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 2em;
    grid-column-gap: 1em;
    width: 90%;
    margin:  0 auto;
    article{
        width: 100%;
        display: flex;
        flex-direction: column;
    .articleTitleWrapper{
        display: flex;
        align-items: center;
        img {
            width: 50px;
            margin-right: 10px;
        }
        h3 {
            color: #d6d6d6;
            font-size: 1.6em;
            letter-spacing: 1px;
        }
    }
    p {
        font-size: 1.2em;
        color: white;
        letter-spacing: 1px;
    }
}
}
`;


export default AboutSection;
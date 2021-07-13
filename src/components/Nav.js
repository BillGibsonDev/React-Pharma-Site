
// styled 
import styled from 'styled-components';

// router
import { HashLink as Link } from 'react-router-hash-link';

// images
import Volskya from '../images/volskya.png';
import Hamburger from '../images/hamburgerWhite.png';

const Nav = () => {

function toggleNav() {
  var x = document.getElementById("mobileNav");
    if (x.style.width === "100%") {
        x.style.width = "0%";
      } else {
        x.style.width = "100%";
      }
    }

return (
        <StyledNav>
            <h2 id="logo"><img src={Volskya} />Volskya</h2>
            <nav>
                <Link to="/" exact>Home</Link>
                <a href="/#about" >About</a>
                <a href="/#mission" >Our Mission</a>
                <Link to="/NewsPage" exact>News</Link>
                <Link id="button" to="/ContactPage" exact>Contact Us</Link>
            </nav>
            <div id="mobileNav" className="overlay">
              <button id="closeNavButton" onClick={toggleNav}>&times;</button>
              <div className="overlay-content" onClick={toggleNav}>
              <Link to="/" exact>Home</Link>
                <a href="/#about" >About</a>
                <a href="/#mission" >Our Mission</a>
                <Link to="/NewsPage" exact>News</Link>
                <Link id="button" to="/ContactPage" exact>Contact Us</Link>
              </div>
            </div>
            <button id="openNavButton" onClick={toggleNav}><img src={Hamburger} alt="menu" id="hamburgerIcon" /></button>
        </StyledNav>
    )
}

const StyledNav = styled.div`
height: 20vh;
width: 100%;
display: flex;
align-items: center;
justify-content: space-between;
background: #00334E;
#logo {
    font-size: 3em;
    color: white;
    margin-left: 1em;
    text-shadow: 2px 2px black;
    img {
        width: 50px;
    }
}
nav {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 45%;
    margin-right: 1em;
    @media (max-width: 920px){
    display: none;
    width: 50%;
  }
    a {
        font-size: 1.5em;
        color: #cfcfcf;
        &:hover {
            color: white;
            transform: scale(1.2);
        }
    }
    #button {
        color: black;
        background: white;
        border-radius: 8px;
        padding: 6px 10px;
        box-shadow: 2px 2px 10px black;
        &:hover{
            background: #ffffff75;
        }
    }
}
//
/* Slide out menu */
//
.overlay {  
  height: 100%;
  width: 0;
  position: fixed; 
  z-index: 99; 
  left: 0;
  top: 0;
  background-color: rgb(0,0,0); 
  background-color: rgba(0,0,0, 0.9); 
  overflow-x: hidden; 
  transition: 0.5s;
}


.overlay-content {
  position: relative;
  top: 25%; 
  width: 100%; 
  text-align: center; 
  margin-top: 30px; 
}

.overlay a {
  padding: 8px;
  text-decoration: none;
  font-size: 36px;
  color: #818181;
  display: block; 
  transition: 0.3s; 
}


.overlay a:hover, .overlay a:focus {
  color: #f1f1f1;
  transform: scale(1.2);
}

@media screen and (max-height: 450px) {
  .overlay a {font-size: 20px}
  .overlay .closebtn {
    font-size: 40px;
    top: 15px;
    right: 35px;
  }
}

#openNavButton, #closeNavButton {
  background: none;
  border: none;
  cursor: pointer;
}
#closeNavButton {
  font-size: 10rem;
  color: white;
  position: absolute;
  top: 20px;
  right: 45px;
  &:hover{
    transform: scale(1.2);
  }
}
#openNavButton {
  display: none;
  margin-right: 3em;
  width: 100px;
  @media (max-width: 920px){
    display: flex;
    margin-right: 10px;
}
}
#openNavButton img{
  width: 50px;
  @media (max-width: 750px){
    width: 40px;
  }
  &:hover{
    transform: scale(1.2);
  }
}
`;


export default Nav;
// styled 
import styled from 'styled-components';


const MissionSection = () => {
    return (
        <StyledMissionSection id="mission">
            <h1>Our Mission</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis non laudantium ullam placeat iusto quod, sit laborum assumenda amet ad magni vitae officiis dolorem veniam deleniti, animi perspiciatis? Autem, mollitia!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, doloremque consectetur? Sit fugit esse id, soluta quaerat quos repudiandae quis commodi fugiat. Vitae architecto sit quam alias quaerat, repellendus eum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur magni ipsa sunt perspiciatis, quaerat facere obcaecati aut dolorem modi excepturi error assumenda! Ducimus recusandae, adipisci eveniet voluptates quod dolore tenetur? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo officia obcaecati aspernatur tempora pariatur eum itaque dolorum aliquid ducimus a ipsum nostrum laudantium consequuntur, beatae officiis perferendis qui reiciendis repellendus!
            </p>
        </StyledMissionSection>
    )
}

const StyledMissionSection = styled.div`
height: 80vh;
background: #00334E;
display: flex;
justify-content: center;
text-align: left;
flex-direction: column;
@media (max-width: 1250px){
        height: 50vh;
        }
@media (max-width: 750px){
    height: 70vh;
  }
h1 {
    font-size: 4em;
    margin-left: 1em;
    color: white;
    border-bottom: 4px solid white;
    width: 60%;
}
p {
    font-size: 1.5em;
    width: 80%;
    margin: 1em auto;
    color: #bebebe;
    letter-spacing: 1px;
}
`;


export default MissionSection;
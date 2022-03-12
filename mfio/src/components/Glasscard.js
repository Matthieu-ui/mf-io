import React from 'react';
import profile from '../images/mattavi.jpg';
import styled from 'styled-components';
import { useSpring, animated, config } from 'react-spring';

const Container = styled(animated.div)`
display: inline-block;
border-radius: 3px;
padding: 3px;
z-index: 1;
background-color: #dbebff10;
position: relative;
backdrop-filter: blur(10px);
border: 2px solid transparent;
background-clip: border-box;
cursor: pointer;

`;

const StyledImg = styled.img`
width: 100%;
height: 100%;
max-width: 100%;
max-height: 100%;
border-radius: 100%;
display: block;
margin-bottom: 1em;
border: 1px solid #ccc;


`;


const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const GlassCard = () => {
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1] , config: config.default}))
    return (
        <Container
            onMouseMove={({clientX: x, clientY: y}) => (set({xys: calc(x, y)}))}
            onMouseLeave={() => set({xys:[1,0,1]})}
            style={{
                transform: props.xys.interpolate(trans)
            }}
        >
            <StyledImg src={profile} />
            <div className="name-plate">
          <p>
            <strong>Matthieu</strong> Felker
          </p>
        </div>
      
        </Container>
    );
}

export default GlassCard;
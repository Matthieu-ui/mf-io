import React from 'react';
import profile from '../images/facegif.gif';
import styled from 'styled-components';
import { useSpring, animated, config } from 'react-spring';

const Container = styled(animated.div)`
display: inline-block;
border-radius: 3px;
filter: brightness(20);
z-index: 1;

transition: box-shadow 0.5s;
will-change: transform;
margin-top:2em;
vertical-align: middle;
}

`;

const StyledImg = styled.img`
display: block;
margin: auto;
max-width: 90%;

border-radius:100%;
border: 1px solid white; 
vertical-align: middle;



  


`;


const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1];
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;


const GlassCard = () => {
    const [props, set] = useSpring(() => ({
        xys: [0, 0, 1],
        config: { mass: 5, tension: 350, friction: 40 }
      }));
    return (

        
        <Container
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.to(trans) }}
        >
            <StyledImg className='mattAvitar' src={profile} />
          

        </Container>
    );
}

export default GlassCard;
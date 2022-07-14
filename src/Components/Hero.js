import React from 'react';
import styled from 'styled-components';
import landingImage from '../assets/landing-image.jpg';

const ParentDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 60vh;
`;

const Banner = styled.div`
  background-image: url(${landingImage});
  background-size: cover;
  background-position: center;
  width: 90%;
  max-width: 1700px;
  height: 60vh;
`;

const Hero = () => {
  return (
    <ParentDiv>
      <Banner />
    </ParentDiv>
  );
};

export default Hero;

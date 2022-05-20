import styled from 'styled-components';
const deviceMobile = 3;
const widthContainer = '9vw';
const heightContainer = '9vw';
export const Container = styled.div`
  width: ${widthContainer};
  height: ${heightContainer};
  border: solid 3px;
  border-radius: 100%;
  position: absolute; 
  top: -4.5vw;
  left: .5vw;
  border-color: RGBA(116,136,214, .1);
  overflow: hidden;
  cursor: pointer;
  @media (max-width: 767px){
    width: calc(${widthContainer} * ${deviceMobile});
    height: calc(${heightContainer} * ${deviceMobile});
    top: calc( -4.5vw * ${deviceMobile});
    left: calc( .5vw * ${deviceMobile});
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: fill;
`;

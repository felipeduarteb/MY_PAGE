import styled from 'styled-components';
const deviceMobile = 3;
const widthContainer = '19.5vw';
const heightContainer = '6.6vw';
const paddingContainer = '.1vw';
export const Container = styled.div`
  width: ${widthContainer};
  height: ${heightContainer};
  border: solid 1.5px;
  border-radius: 5px;
  border-color: RGBA(116,136,214, .1);
  overflow: hidden;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${paddingContainer};
  cursor: pointer;
  @media (max-width: 767px){
    width: calc(${widthContainer} * ${deviceMobile});
    height: calc(${heightContainer} * ${deviceMobile});
    padding: calc(${paddingContainer} * ${deviceMobile});
  }

`;
export const Title = styled.h1`
  font-size: 2vw;
  padding-bottom: .5vw;
  @media (max-width: 767px){
    font-size: calc(2vw * ${deviceMobile});
    padding-bottom: calc(.5vw * ${deviceMobile});
  }
  
`;
export const SubTitle = styled.h3`
    font-size: .9vw;
    line-height: 1vw;
  @media (max-width: 767px){
    font-size: calc(.9vw * ${deviceMobile});
    line-height: calc(1vw * ${deviceMobile});
  }
`;

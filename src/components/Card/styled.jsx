import styled from 'styled-components';
const deviceMobile = 3;
const widthContainer = '25vw';
const heightContainer = '27.5vw';
const gapContainer = '.5vw';
export const Container = styled.div`
  width: ${widthContainer};
  height: ${heightContainer};
  border: solid 3px;
  border-color: RGBA(116,136,214, .05);
  border-radius: 10px;
  background-color: rgba(240, 245, 233, .05); 
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: ${gapContainer};
  padding: 5vw .5vw .5vw .5vw;
  @media (max-width: 767px){
    width: calc(${widthContainer} * ${deviceMobile});
    height: calc(${heightContainer} * ${deviceMobile});
    gap: calc(${gapContainer} * ${deviceMobile});
    padding: 15vw 1.5vw 1.5vw 1.5vw;
  }
`;

export const ContainerBtnsAndMedias = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .5vw;
  @media (max-width: 767px){
    gap: calc(.5vw * ${deviceMobile});
  }
`;
export const ContainerBtns = styled.div`
  align-self: flex-start;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: .5vw;
  @media (max-width: 767px){
    gap: calc(.5vw * ${deviceMobile});
  }
`;
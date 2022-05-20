import styled from 'styled-components';

const deviceMobile = 3;
const widthContainer = '4vw';
const heightContainer = '13.5vw';
const gapContainer = '.2vw';
const sizeLinkIcon = '2.5vw';
const paddingLinkIcon = '.26vw'
export const Container = styled.div`
  width: ${widthContainer};
  height: ${heightContainer};
  border: solid 1.5px;
  border-radius: 5px;
  border-color: RGBA(116,136,214, .1);
  display: flex; 
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: ${gapContainer};
  @media (max-width: 767px){
    width: calc(${widthContainer} * ${deviceMobile});
    height: calc(${heightContainer} * ${deviceMobile});
    gap: calc(${gapContainer} * ${deviceMobile});
  }
`;
export const LinkContainerIcon = styled.a`
    width: 2.5vw;
    height: 2.5vw;
    border: solid .15vw;
    border-radius: 5px;
    border-color: #e5e5e5;
    border-radius: 100%;
    overflow: hidden;
    padding: .26vw;
    cursor: pointer;
    :hover {
        background: #bbc3e618;
    }
    @media (max-width: 767px){
      width: calc(${sizeLinkIcon} * ${deviceMobile});
      height: calc(${sizeLinkIcon} * ${deviceMobile});
      padding: calc(${paddingLinkIcon} * ${deviceMobile});
      border: solid calc(.15vw * ${deviceMobile});
    }
    `;
export const Icon = styled.img`
    width: 100%;
    height: 100%;
`;


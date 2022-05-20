import styled from 'styled-components';
const deviceMobile = 3;
const widthContainer = '15vw';
const heightContainer = '3vw';

export const ButtonSlyle = styled.button`
    width: ${widthContainer};
    height: ${heightContainer};
    border: solid 1.5px;
    border-radius: 5px;
    background: none;
    border-color: RGBA(116,136,214, .1);
    cursor: pointer;
    :hover {
        background: #bbc3e618;
    }
    :disabled {
        background: #2e32432b;
        cursor: not-allowed;
    }
    @media (max-width: 767px){
        width: calc(${widthContainer} * ${deviceMobile});
        height: calc(${heightContainer} * ${deviceMobile});
    }
`;

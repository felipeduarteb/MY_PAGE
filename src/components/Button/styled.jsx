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
    animation: myAnim 1s cubic-bezier(0.87, 0, 0.13, 1) 0s infinite normal forwards;
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
    @keyframes myAnim {
	0% {
		opacity: 1;
		transform: translateX(0);
	}

	100% {
		opacity: 0;
		transform: translateX(100px);
	}
}
`;

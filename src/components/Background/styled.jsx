import styled from 'styled-components';

export const Container = styled.div`
  z-index: -1;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  bottom: 0;
  background: rgb(0,0,0);
  background: -moz-radial-gradient(circle, rgba(0,0,0,1) 22%, rgba(58,120,145,0.9472163865546218) 64%, rgba(26,22,31,0.9416141456582633) 75%);
  background: -webkit-radial-gradient(circle, rgba(0,0,0,1) 22%, rgba(58,120,145,0.9472163865546218) 64%, rgba(26,22,31,0.9416141456582633) 75%);
  background: radial-gradient(circle, rgba(0,0,0,1) 22%, rgba(58,120,145,0.9472163865546218) 64%, rgba(26,22,31,0.9416141456582633) 75%);
filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#000000",endColorstr="#1a161f",GradientType=1);
`;

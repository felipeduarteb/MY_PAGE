import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Container } from './global/Style/App-styled';
import { GlobalStyle } from './global/Style/global-styled';
import RouterNavigation from './routes';

function src() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Container>
        <RouterNavigation />
      </Container>
    </BrowserRouter>
  );
}

export default src;
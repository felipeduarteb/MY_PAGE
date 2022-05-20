import React from 'react';

import { Container, LinkContainerIcon, Icon } from './styled';
import linkedinLogo from '../../assets/img/linkedin-logo.png'
import gitHubLogo from '../../assets/img/github-logo.png'
import instagramLogo from '../../assets/img/instagram-logo.png'

function SocialMedias() {
  return (
      <Container>
          <LinkContainerIcon href="https://www.linkedin.com/in/felipe-duarte-bispo/" target="_blank" rel="noopener noreferrer"><Icon src={linkedinLogo}/></LinkContainerIcon>
          <LinkContainerIcon href="https://github.com/felipeduarteb" target="_blank" rel="noopener noreferrer"><Icon src={gitHubLogo}/></LinkContainerIcon>
          <LinkContainerIcon href="https://www.instagram.com/f_lipe.b/" target="_blank" rel="noopener noreferrer"><Icon src={instagramLogo}/></LinkContainerIcon>
      </Container>
  );
}

export default SocialMedias;
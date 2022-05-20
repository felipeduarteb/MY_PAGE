import React from 'react';
import { ButtonSlyle } from './styled';

function Button({ name, id, link, disable }) {
  const handleClick = (idClick, linkClick) => {
    window.open(linkClick, '_blank');
  }

  return (
    <ButtonSlyle
      disabled={disable ? 'disabled' : ''}
      onClick={() => handleClick(id, link)}
    >
      {name}
    </ButtonSlyle>
  );
}

export default Button;
import React from 'react';

import { Container, Image } from './styled';
import  perfil_image  from '../../assets/img/perfil-image.jpeg';

function Avatar() {
    return (
        <Container>
            <Image src={perfil_image}/>
        </Container>
    );
}

export default Avatar;
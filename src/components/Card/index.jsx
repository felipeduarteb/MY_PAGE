import React from 'react';
import Apresentation from '../Apresentation';
import Avatar from '../Avatar';
import Button from '../Button';
import SocialMedias from '../SocialMedias';

import { Container, ContainerBtnsAndMedias, ContainerBtns } from './styled';

function Card() {
    return (
        <Container>
            <Avatar />
            <Apresentation />
            <ContainerBtnsAndMedias>
                <SocialMedias />
                <ContainerBtns>
                    <Button target='_blank' id='projetos' name='Projetos' link='https://felipedb.com/projetos/targetflix'/>
                    <Button id='contato' name='Contato' link='https://api.whatsapp.com/send?phone=5551998920747'/>
                    <Button id='curriculo' name='Currículo' link='https://drive.google.com/file/d/1GHcucymii6z7aN30EdNV2BvAj3mQ04SE/view?usp=sharing'/>
                    <Button disable={true} id='sobremim' name='Sobre mim' link=''/>
                </ContainerBtns>
            </ContainerBtnsAndMedias>
        </Container>
    );
}

export default Card;
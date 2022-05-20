import React from 'react';
import Background from '../../components/Background';
import Card from '../../components/Card'
import { Container } from './styled';

function Home() {
    return (
        <Container>
            <Background />
            <Card />
        </Container>
    );
}

export default Home;
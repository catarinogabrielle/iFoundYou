import React from 'react';
import { Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import { Container, TextLogo } from './styles';

export default function Header() {

    const color = ['#7504b6', '#6824fb'];

    return (
        <LinearGradient colors={color}>
            <Container>

                <Image
                    style={{
                        width: 37,
                        height: 31,
                        marginRight: 8
                    }}
                    source={require('../../assets/coração.png')}
                />
                <TextLogo>I Found You</TextLogo>

            </Container>
        </LinearGradient >
    );
}
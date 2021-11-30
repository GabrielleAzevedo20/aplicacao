import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Image } from 'react-native';

import hand2 from '../../assets/hand2.png';
import { ButtonIcon } from '../../components/ButtonIcon'
import { Container, Title, SubTitle, Content } from './styles';

export function SignIn() {
    const navigation = useNavigation();

    function handleSignIn() {
        navigation.navigate('Home');
    }

    return(
        <Container>
            <Image source={hand2} />
            <Content>
            <Title>
                Buscando mais tranquilidade {'\n'}
                para seu futuro
            </Title>
            <SubTitle>
                Os beneficios da Previdência {'\n'}
                Santander vão muito além {'\n'}
                da aposentadoria
            </SubTitle>
            <ButtonIcon title="Invista já"
                activeOpacity={0.7}
                disabled={false}
                onPress={handleSignIn}
            />
            </Content>
        </Container>
    )
}
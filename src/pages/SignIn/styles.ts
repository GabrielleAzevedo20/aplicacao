import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.background}; 
`;

export const Menu = styled(Feather)`
    color: #fff;
    font-size: 40px;
    display: flex;
    position: relative;
    margin-left: -85%;
    margin-top: -32px;
`;

export const Content = styled.View`
    margin-top: -40px;
    padding: 50px;
`;

export const Title = styled.Text`
    color: ${({ theme }) => theme.colors.heading};
    text-align: center;
    font-size: 40px;
    margin-bottom: 16px;
`;

export const SubTitle = styled.Text`
    color: ${({ theme }) => theme.colors.heading};
    font-size: 15px;
    text-align: center;
    margin-bottom: 64px;

`;

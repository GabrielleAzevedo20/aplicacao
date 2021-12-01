import styled from 'styled-components/native' 


export const Container = styled.View`
    flex-direction: row;
    align-items: center;

`;

export const Content = styled.View`
    margin-top: 5px;
    `;

export const User = styled.View`
    flex-direction: row;
`;

export const Input = styled.TextInput`

`;

export const Message = styled.Text`
    font-family: ${({ theme }) => theme.fonts.title500};
    color: ${({ theme }) => theme.colors.overlay};
`;
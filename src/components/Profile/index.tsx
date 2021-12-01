import React from 'react'
import { Container, Content, Input, Message } from './styles'


export function Profile() {
    return(
        <Container>
            <Content>
                <Message>
                    Coloque seu CPF
                </Message>
                <Input type="text" placeholder="CPF"/>
            </Content>
        </Container>
    )
}
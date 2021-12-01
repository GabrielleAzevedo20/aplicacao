import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 
import { Container, Content, Input } from './styles'


export function Profile() {
    return(
        <Container>
            <Content>
                <Input type="text" placeholder="CPF"/>
            </Content>
        </Container>
    )
}
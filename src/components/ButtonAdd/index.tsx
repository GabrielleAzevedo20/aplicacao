import React from 'react'
import { TouchableOpacityProps } from 'react-native'
import { Container, Icon } from './styles'


export function ButtonAdd({ ...rest}: TouchableOpacityProps) {
    return (
        <Container {...rest}>
            <Icon name='toggle-on' />
        </Container>
    )
}

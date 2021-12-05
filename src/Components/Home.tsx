import React from 'react'
import styled from '@emotion/styled'
import { ScreenHelmet, useNavigator } from 'karrotframe'

const Home: React.FC = () => {

    const {push} = useNavigator()

    const onButtonClick = () => {
        push('/detail')
    }

    return (
        <Container>
            <ScreenHelmet title='홈' />
            <Main />
            <Bottom>밑부분</Bottom>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`

const Main = styled.div`
    flex: 1;
    background-color: red;
    overflow-y: scroll;
`

const Bottom = styled.div``


export default Home

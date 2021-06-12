import styled from '@emotion/styled'
import React, { useEffect, useState } from 'react'
import { NavBar } from '../../styles/nav/NavStyled'

const Title = styled.h1`
      color: ${({ active }) => active ? 'white' : 'black'};
`
const Svg = styled.svg`
      path{
         fill: ${({ active }) => active ? 'white' : 'black'};
      }
`
export const Nav = ({ mode, setMode }) => {

    const handleMode = (event) => {
        const mode = event.target.value
          setMode(mode)
          localStorage.setItem('mode',mode)
    }
    return (
        <NavBar active={mode === 'dark'}>
            <Svg active={mode === 'dark'} width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M27.5 4.58333C14.8637 4.58333 4.58333 14.8637 4.58333 27.5C4.58333 40.1362 14.8637 50.4167 27.5 50.4167C40.1362 50.4167 50.4167 40.1362 50.4167 27.5C50.4167 14.8637 40.1362 4.58333 27.5 4.58333ZM9.16666 27.5C9.16666 25.4398 9.52416 23.4621 10.1544 21.6127L13.75 25.2083L18.3333 29.7917V34.375L22.9167 38.9583L25.2083 41.25V45.6752C16.1815 44.5408 9.16666 36.8317 9.16666 27.5ZM42.0062 38.6673C40.5098 37.4619 38.241 36.6667 36.6667 36.6667V34.375C36.6667 33.1594 36.1838 31.9936 35.3242 31.1341C34.4647 30.2745 33.2989 29.7917 32.0833 29.7917H22.9167V22.9167C24.1322 22.9167 25.298 22.4338 26.1576 21.5742C27.0171 20.7147 27.5 19.5489 27.5 18.3333V16.0417H29.7917C31.0072 16.0417 32.173 15.5588 33.0326 14.6992C33.8921 13.8397 34.375 12.6739 34.375 11.4583V10.5165C41.085 13.2412 45.8333 19.8229 45.8333 27.5C45.8329 31.5441 44.4865 35.473 42.0062 38.6673Z" fill="none" />
            </Svg>
            <Title active={mode === 'dark'}>Country</Title>
            <input type="button" value='dark' onClick={handleMode} />
            <input type="button" value='light' onClick={handleMode} />
        </NavBar>
    )
}

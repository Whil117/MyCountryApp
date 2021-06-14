import React from 'react'
import { DivLabels, LabelsMode, NavBar } from '../../styles/nav/NavStyled'
import { motion } from "framer-motion"
import Link from 'next/link'
import styled from '@emotion/styled'

const DivTitle = styled.div`
      display: flex;
      align-items: center;
      h1{
        color: ${({ active }) => active ? 'white' : 'black'};
      }
      svg{
        path{
         fill: ${({ active }) => active ? 'white' : 'black'};
      }
      }
`
export const Nav = ({ mode, setMode }) => {

    const handleMode = (event) => {
        const mode = event.target.value
        setMode(mode)
        localStorage.setItem('mode', mode)
    }
    return (
        <NavBar active={mode === 'dark'}>
            <DivTitle active={mode === 'dark'}>
                <Link href="/">
                    <motion.a whileHover={{ scale: 1.1}} whileTap={{ scale: 0.9 }}>
                        <motion.svg animate={{ scale: [1, 1], rotate: [0, 270, 0], }} width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M27.5 4.58333C14.8637 4.58333 4.58333 14.8637 4.58333 27.5C4.58333 40.1362 14.8637 50.4167 27.5 50.4167C40.1362 50.4167 50.4167 40.1362 50.4167 27.5C50.4167 14.8637 40.1362 4.58333 27.5 4.58333ZM9.16666 27.5C9.16666 25.4398 9.52416 23.4621 10.1544 21.6127L13.75 25.2083L18.3333 29.7917V34.375L22.9167 38.9583L25.2083 41.25V45.6752C16.1815 44.5408 9.16666 36.8317 9.16666 27.5ZM42.0062 38.6673C40.5098 37.4619 38.241 36.6667 36.6667 36.6667V34.375C36.6667 33.1594 36.1838 31.9936 35.3242 31.1341C34.4647 30.2745 33.2989 29.7917 32.0833 29.7917H22.9167V22.9167C24.1322 22.9167 25.298 22.4338 26.1576 21.5742C27.0171 20.7147 27.5 19.5489 27.5 18.3333V16.0417H29.7917C31.0072 16.0417 32.173 15.5588 33.0326 14.6992C33.8921 13.8397 34.375 12.6739 34.375 11.4583V10.5165C41.085 13.2412 45.8333 19.8229 45.8333 27.5C45.8329 31.5441 44.4865 35.473 42.0062 38.6673Z" fill="none" />
                        </motion.svg>
                        <motion.h1 animate={{ scale: [0.5, 1,], x: 0, y: 1 }} >Country</motion.h1>
                    </motion.a>
                </Link>
            </DivTitle>
            <DivLabels active={mode === 'dark'}>
                <LabelsMode htmlFor="dark" active={mode === 'dark'}>
                    <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0)">
                            <path d="M8.75 0.881989C8.88422 1.04508 8.96645 1.24468 8.98605 1.45498C9.00566 1.66529 8.96175 1.87664 8.86 2.06174C8.06506 3.52127 7.64991 5.15727 7.65275 6.81924C7.65275 12.3481 12.16 16.8251 17.715 16.8251C18.4396 16.8251 19.145 16.7495 19.8229 16.6051C20.0307 16.5601 20.2471 16.5773 20.4452 16.6546C20.6433 16.7319 20.8142 16.8658 20.9366 17.0396C21.0659 17.2204 21.1317 17.4387 21.124 17.6608C21.1163 17.8829 21.0355 18.0961 20.894 18.2675C19.8156 19.5922 18.4551 20.6596 16.9118 21.3917C15.3685 22.1239 13.6812 22.5024 11.973 22.4997C5.63425 22.4997 0.5 17.393 0.5 11.101C0.5 6.36549 3.40675 2.30374 7.5455 0.582239C7.75166 0.495108 7.98054 0.477225 8.19773 0.531276C8.41493 0.585327 8.60872 0.708393 8.75 0.881989V0.881989Z" fill="#2E2BB5" />
                        </g>
                        <defs>
                            <clipPath id="clip0">
                                <rect width="22" height="22" fill="white" transform="translate(0.5 0.5)" />
                            </clipPath>
                        </defs>
                    </svg>
                </LabelsMode>
                <input id="dark" type="button" value='dark' onClick={handleMode} />
                <LabelsMode htmlFor="light" active={mode === 'light'}>
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.5 17.7083C15.3765 17.7083 17.7084 15.3765 17.7084 12.5C17.7084 9.62351 15.3765 7.29166 12.5 7.29166C9.62354 7.29166 7.29169 9.62351 7.29169 12.5C7.29169 15.3765 9.62354 17.7083 12.5 17.7083Z" stroke="#E4DD26" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12.5 1.04166V3.12499" stroke="#E4DD26" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12.5 21.875V23.9583" stroke="#E4DD26" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M4.39587 4.39581L5.87504 5.87498" stroke="#E4DD26" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M19.1251 19.125L20.6042 20.6042" stroke="#E4DD26" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M1.04169 12.5H3.12502" stroke="#E4DD26" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M21.875 12.5H23.9583" stroke="#E4DD26" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M4.39587 20.6042L5.87504 19.125" stroke="#E4DD26" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M19.1251 5.87498L20.6042 4.39581" stroke="#E4DD26" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </LabelsMode>
                <input id="light" type="button" value='light' onClick={handleMode} />
            </DivLabels>
        </NavBar>
    )
}

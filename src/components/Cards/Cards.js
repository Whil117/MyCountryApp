import React from 'react'
import Link from 'next/link'
import { motion } from "framer-motion"
import { CardDiv } from '../../styles/cards/CardStyled'
export const Cards = ({ data, mode }) => {
    return (
        <Link href={`/country/${data.name}`}>
            <motion.a whileHover={{ scale: 1.1}} whileTap={{ scale: 0.9 }}>
                <CardDiv active={mode === 'dark'}>
                    <img src={data.flag} alt={data.name} loading="lazy" />
                    <h3>{data.name}</h3>
                </CardDiv>
            </motion.a>
        </Link>
    )
}

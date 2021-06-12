import React from 'react'
import Link from 'next/link'
import { CardDiv } from '../../styles/cards/CardStyled'
export const Cards = ({ data, mode }) => {
    return (
        <Link href={`/country/${data.name}`}>
            <CardDiv active={mode === 'dark'}>
                <img src={data.flag} alt={data.name} loading="lazy" />
                <h3>{data.name}</h3>
            </CardDiv>
        </Link>
    )
}

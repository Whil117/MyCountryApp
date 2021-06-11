import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { CardDiv } from '../../styles/cards/CardStyled'
import styled from '@emotion/styled'

const Flag = styled(Image)`
      border-radius: 10px 10px 0 0;
`
export const Cards = ({ data }) => {
    return (
        <Link href={`/country/${data.name}`}>
            <CardDiv>
                <img src={data.flag} alt={data.name} loading="lazy" />
                <h3>{data.name}</h3>
            </CardDiv>
        </Link>
    )
}

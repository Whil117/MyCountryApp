import React from 'react'
import { SearchBar, SearchNav, SearchRegion } from '../../styles/Search/SearchStyled'

export const Search = ({ nameCountry, setNameCountry, handleRegion, mode }) => {

    const handleChange = (event) => {
        const name = event.target.value
        function capitalizaPrimeraLetra(str) {
            return str.charAt(0).toUpperCase() + str.slice(1)
        }
        setNameCountry(capitalizaPrimeraLetra(name))
    }
    return (
        <SearchNav>
            <SearchBar active={mode === 'dark'} >
                <input value={nameCountry} onChange={handleChange} id="search" type="text" placeholder="Search a country..." />
            </SearchBar>
            <SearchRegion active={mode === 'dark'}>
                <select onChange={handleRegion}>
                    <option value="Americas">America</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                    <option value="Africa">Africa</option>
                    <option value="Asia">Asia</option>
                </select>
            </SearchRegion>
        </SearchNav >
    )
}

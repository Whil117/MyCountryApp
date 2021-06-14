import React from 'react'
import { DeleteNameCountry, SearchBar, SearchNav, SearchRegion } from '../../styles/Search/SearchStyled'
import { motion } from "framer-motion"


export const Search = ({ nameCountry, setNameCountry, handleRegion, mode }) => {

    const handleChange = (event) => {
        const name = event.target.value
        function capitalizaPrimeraLetra(str) {
            return str.charAt(0).toUpperCase() + str.slice(1)
        }
        setNameCountry(capitalizaPrimeraLetra(name))
    }
    const handleDeleteNameCountry = () => {
        setNameCountry('')
    }
    return (
        <SearchNav active={mode === 'dark'}>
            <SearchBar active={mode === 'dark'} >
                <motion.input animate={{ scale: [0.8, 1], }} transition={{ duration: 0.5 }} value={nameCountry} onChange={handleChange} id="search" type="text" placeholder="Search a country..." />
            </SearchBar>
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={handleDeleteNameCountry} active={mode === 'dark'}>
                <svg width="38" height="40" viewBox="0 0 28 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M14.0015 19.9308L22.7405 29.287C23.6171 30.2328 24.1875 30.2425 25.0802 29.287L26.8336 27.4094C27.6925 26.49 27.7508 25.8865 26.8336 24.9045L17.5816 15.0004L26.8344 5.09629C27.701 4.16544 27.7179 3.53723 26.8344 2.59049L25.0811 0.713789C24.1715 -0.260296 23.6095 -0.215298 22.7413 0.713789L14.0015 10.07L5.2626 0.714672C4.39436 -0.214415 3.83241 -0.259414 2.92283 0.714672L1.16947 2.59137C0.285203 3.53811 0.301235 4.16632 1.16947 5.09717L10.4214 15.0004L1.16947 24.9045C0.252296 25.8865 0.301235 26.49 1.16947 27.4094L2.92198 29.287C3.8071 30.2425 4.37749 30.2328 5.26176 29.287L14.0015 19.9308Z" fill="black" />
                </svg>
            </motion.button>
            <SearchRegion active={mode === 'dark'}>
                <motion.select whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onChange={handleRegion}>
                    <option value="Americas">America</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                    <option value="Africa">Africa</option>
                    <option value="Asia">Asia</option>
                </motion.select>
            </SearchRegion>
        </SearchNav >
    )
}



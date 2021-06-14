import { useEffect, useState } from "react";
import { Search } from "../components/BarSearch/Search";
import { Nav } from "../components/nav/Nav";
import { Cards } from "../components/Cards/Cards";
import { useFetch } from "../hooks/useFetch";
import styled from "@emotion/styled";

const MainApp = styled.main`
      height: 100vh;
      background-color: ${({ active }) => active ? ' #1B1B1B' : '#F3F3F3'};
`
const CardsDiv = styled.div`
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      background-color: ${({ active }) => active ? ' #1B1B1B' : '#F3F3F3'};
`
export default function Home() {
  const [nameCountry, setNameCountry] = useState('');
  const [mode, setMode] = useState('');
  const [region, setRegion] = useState('Americas');
  const data = useFetch('https://restcountries.eu/rest/v2/all')

  useEffect(() => {
    const getMode = localStorage.getItem('mode')
    setMode(getMode)
  }, []);

  const handleRegion = (event) => {
    setRegion(event.target.value)
  }
  const list = { hidden: { opacity: 0 } }
  const item = { hidden: { x: -10, opacity: 0 } }
  return (
    <>
      <MainApp active={mode === 'dark'}>
        <Nav mode={mode} setMode={setMode} />
        <Search mode={mode} setNameCountry={setNameCountry} nameCountry={nameCountry} handleRegion={handleRegion} />

        <CardsDiv active={mode === 'dark'}>
          {data.filter(item => nameCountry === '' ? true : item.name.includes(nameCountry)
          ).filter(item => region === '' ? true : item.region.includes(region)).map(item => (
            <Cards mode={mode} key={item.name} data={item} />
          ))}
        </CardsDiv>
      </MainApp>
    </>
  )
}

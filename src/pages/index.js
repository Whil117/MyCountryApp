import { useState } from "react";
import { Search } from "../components/BarSearch/Search";
import { Nav } from "../components/nav/Nav";
import styled from "@emotion/styled";
import { Cards } from "../components/Cards/Cards";
import { useFetch } from "../hooks/useFetch";

const MainApp = styled.main`
      background: #F3F3F3;
      height: 100vh;
`
const CardsDiv = styled.div`
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
`
export default function Home() {
  const [nameCountry, setNameCountry] = useState('');
  const [region, setRegion] = useState('Americas');

  const data = useFetch('https://restcountries.eu/rest/v2/all')

  const handleRegion = (event) => {
    setRegion(event.target.value)
  }
  console.log(data)

  return (
    <MainApp>
      <Nav />
      <Search setNameCountry={setNameCountry} nameCountry={nameCountry} handleRegion={handleRegion} />
      <CardsDiv>
        {data.filter(item => nameCountry === '' ? true : item.name.includes(nameCountry)
        ).filter(item=> region === '' ? true : item.region.includes(region)).map(item => (
            <Cards key={item.name} data={item} />
          ))}
      </CardsDiv>
    </MainApp>
  )
}

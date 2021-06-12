import styled from '@emotion/styled';
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Nav } from '../../components/nav/Nav';
import { ButtonCard, Card } from '../../styles/CardInfoCountry/CountryInfoStyled';

const MainApp = styled.main`
      height: 100vh;
      background-color: ${({ active }) => active ? ' #1B1B1B' : '#F3F3F3'};
      @media (max-width:665px){
        height: auto;
      }
`
const CardDisplayDiv = styled.div`
      display: flex;
      align-items: center;
      justify-content: center;

`
const Post = () => {
  const [data, setData] = useState([]);
  const [mode, setMode] = useState('');
  const router = useRouter()
  const { pid } = router.query


  const myUseFetch = async (value) => {
    const url = `https://restcountries.eu/rest/v2/name/${value}?fullText=true`
    const resp = await fetch(url);
    const data = await resp.json();
    console.log(data)
    const country = data.map((item) => {
      return {
        name: item.name,
        capital: item.capital,
        region: item.region,
        subregion: item.subregion,
        latLng: item.latlng,
        demonym: item.demonym,
        nativeName: item.nativeName,
        numbercode: item.numericCode,
        language: item.languages.map((item) => item.nativeName),
        traslations: item.translations.de,
        flag: item.flag,
      };
    });
    setData(country)
  }

  useEffect(() => {
    const hasNameCountry = pid ? (myUseFetch(pid)) : (null)
    return hasNameCountry
  }, [pid])

  useEffect(() => {
    const getMode = localStorage.getItem('mode')
    setMode(getMode)
  }, []);

  return (
    <MainApp active={mode === 'dark'}>
      <Nav mode={mode} setMode={setMode} />
      <CardDisplayDiv>
        {data.map(item => (
          <Card active={mode === 'dark'}>
            <div>
              <img src={item.flag} alt={item.name} />
            </div>
            <div>
              <h2>{item.name}</h2>
              <ul>
                <li><b>Capital: </b>{item?.capital}</li>
                <li><b>Region: </b>{item?.region}</li>
                <li><b>Sub-region: </b>{item?.subregion}</li>
                <li><b>Lat: </b>{item?.latLng[0]} <b>Lng: </b>{item?.latLng[1]}</li>
                <li><b>Demonym: </b>{item?.demonym}</li>
                <li><b>NativeName: </b>{item?.nativeName}</li>
                <li><b>NumberCode: </b>{item?.numbercode}</li>
                <li><b>Language: </b>{item?.language}</li>
                <li><b>Traslations: </b>{item?.traslations}</li>
              </ul>
              <ButtonCard active={mode === 'dark'} type="button" onClick={() => router.back()}>Back</ButtonCard>
            </div>
          </Card>
        ))}
      </CardDisplayDiv>
    </MainApp>
  )
}

export default Post
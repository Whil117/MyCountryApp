import styled from '@emotion/styled';
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Nav } from '../../components/nav/Nav';
import { Card } from '../../styles/CardInfoCountry/CountryInfoStyled';


const CardDisplayDiv = styled.div`
      display: flex;
      align-items: center;
      justify-content: center;

`
const Post = () => {
  const [data, setData] = useState([]);
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


  console.log(data)
  return (
    <main>
      <Nav />
      <CardDisplayDiv>
        {data.map(item => (
          <Card>
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
            </div>
          </Card>
        ))}
      </CardDisplayDiv>
    </main>
  )
}

export default Post
import { useEffect, useState } from 'react'

export const useFetch = (link) => {

    const [data, setData] = useState([]);

    const myUseFetch = async (url) => {
        const resp = await fetch(url);
        const data = await resp.json();
        const country = data.map((item) => {
            return {
                name: item.name,
                region: item.region,
                flag: item.flag,
            };
        });
        setData(country)
    }

    useEffect(() => {
        const hasNameCountry = link ? (myUseFetch(link)) : (null)
        return hasNameCountry
    }, [link])

    return data
}
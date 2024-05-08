import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'

export const AllFunc = createContext();
export default function Store({ children }) {

    const [searchButton, setSearchButton] = useState(false);
    const [AllPoke,setAllPoke] = useState([])
    const [load, setLoad] = useState(false)
    const [ApiData, setApiData] = useState([]);



    async function OnclickSearchButton() {
        setLoad(true)
        setSearchButton(true);
        setTimeout(async () => {
            const data = await FetchData()
            setLoad(false);
            setSearchButton(false)
            console.log(data);
        }, 2000);

    }


    async function FetchData(url) {
        try {
            const data = await axios.get(url);
            return data.data
        } catch (error) {
            return error
        }
    }

    useEffect(() => {
        async function InitialData() {
            try {
                setLoad(true)
                const fetch = await FetchData('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0');
                console.log(fetch);
                const AllPokeList = await Promise.all(fetch.results.map(async (ele) =>{
                     const da = await FetchData(ele.url);
                     return da
                    
                }));
                setAllPoke(AllPokeList)
                setLoad(false)
            } catch (error) {
                console.log(error);

            }
        }
        InitialData()
    }, [])

    const contextValue = {
        OnclickSearchButton,
        searchButton,
        load,
        AllPoke,
        FetchData
    }
    return (
        <AllFunc.Provider value={contextValue}>
            {children}
        </AllFunc.Provider>
    )
}

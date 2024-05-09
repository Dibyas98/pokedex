import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'

export const AllFunc = createContext();
export default function Store({ children }) {
let offset = 10;
    const [searchButton, setSearchButton] = useState(false);
    const [AllPoke,setAllPoke] = useState([])
    const [load, setLoad] = useState(false)
    const [ApiData, setApiData] = useState(false);
    const [limit,setLimit] = useState(0)
    const[error,setError] = useState("fdg")




    async function OnclickSearchButton() {
        if(search.length == 0){
            return
        }
        setPokemon(false)
        setLoad(true)
        setSearchButton(true);
        setTimeout(async () => {
            const data = await handelSinglePageApiData(search)
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
    async function FilterPokeMon (url){
        try {
            setLoad(true);
            const fetch = await FetchData(`https://pokeapi.co/api/v2/${url}/`);
            const AllPokeList = await Promise.all(fetch.results.map(async (ele) =>{
                const da = await FetchData(ele.url);
                return da
               
           }));
           setAllPoke(AllPokeList)
           setError(false)
        } catch (error) {
            setError(error)
        }
    }
    async function InitialData(url) {
        try {
            setLoad(true)
            
            setTimeout(async () => {
                const fetch = await FetchData(url);
            setApiData(fetch)
            const AllPokeList = await Promise.all(fetch.results.map(async (ele) =>{
                 const da = await FetchData(ele.url);
                 return da
                
            }));
        
            if(AllPoke.length<1){
                setAllPoke(AllPokeList)
            }else{
                setAllPoke(prev => [...prev,...AllPokeList])
            }
            setLoad(false)
            }, 2000);
            setError(false)
        } catch (error) {
            setError(error)
        }
    }
    useEffect(() => {
        InitialData(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${limit}`)
    }, [limit])

    async function handelInfiniteScroll(){
        // console.log('scroltp',document.documentElement.scrollTop);
        // console.log('winhw',window.innerHeight);
        // console.log("docst",document.documentElement.scrollHeight);
        if(window.innerHeight +document.documentElement.scrollTop +1 >= document.documentElement.scrollHeight){
            setLimit((prev) => prev+10)
        }
        try {
            setError(false)
        } catch (error) {
            setError(error)
        }
    }
    


    const[Tab,setTab] = useState('about')
    const[Pokemon,setPokemon] = useState(false)
    const handelSinglePageApiData= async(name)=>{
        // setLoad(true)
        setPokemon(false)
        try {
            const pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
            setPokemon(pokemon.data)
            setTab('about')
            setLoad(false)
            setError(false)
        } catch (error) {
            setError(error)
        }
    }
    const handelTabs = (arg)=>{
        const tab = arg.toLowerCase()
        setTab(tab)
    }

    const [search, setSearch] = useState('')
  function handelSearch(e) {
    setSearch(e.target.value)
  }

  const[bookmark,setBookMark] = useState(()=> {
    const storebook = localStorage.getItem('bookmark');
    return storebook ? JSON.parse(storebook):[];
  });
  const handelBookMarkList= (arg,book)=>{
    if(!book){
        setBookMark(prev => [...prev,arg])
        

    }else if(book){
        console.log(book);
        const fil = bookmark.filter((ele) => arg.id!= ele.id);
        setBookMark(fil)
        
    }
    
  }
  useEffect(()=>{
    localStorage.setItem('bookmark',JSON.stringify(bookmark))
  },[bookmark])

  const[compareData,setCompareData] =useState()

    const contextValue = {
        OnclickSearchButton,
        searchButton,
        load,
        AllPoke,
        FetchData,
        handelInfiniteScroll,
        ApiData,
        Pokemon,
        handelSinglePageApiData,
        Tab,
        handelTabs,handelSearch,search,
        handelBookMarkList,
        bookmark,
        FilterPokeMon,
        error
    }
    return (
        <AllFunc.Provider value={contextValue}>
            {children}
        </AllFunc.Provider>
    )
}

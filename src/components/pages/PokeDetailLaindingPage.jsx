import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react'
import PokeDetail from '../ui/PokeDetail'
import { useParams } from 'react-router-dom'
import Button from '../ui/Button'
import { ImCross } from "react-icons/im";
import Input from '../ui/Input';
import { AllFunc } from '../Context/Store';
import axios from 'axios';
import Loading from '../ui/Loading';

function PokeDetailLaindingPage() {
  const[compare,setCompare] = useState(false)
  const[compareData,setCompareData] =useState()
  const { handelSinglePageApiData, Pokemon,Tab, load,handelBookMarkList, bookmark,search,setError } = useContext(AllFunc)
  const handelompare= async()=>{
    try {
      if(search.length ==0){
        return
      }
      const pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${search}`)
      setCompare(!compare)
      setCompareData(pokemon.data)
      setError(false)
    } catch (error) {
      setError(error.response.data)
      console.log(error);
    }
  }
  const param = useParams()
    useEffect(() => {
        handelSinglePageApiData(param.name)
    }, [load])
    useEffect(() =>{
      setCompareData()
      setCompare(false)
    },[Pokemon])
    
    
  return (
    <div className='w-full flex justify-center items-center flex-col md:flex-row xl:flex-row min-h-fit relative p-2 '>
      {!compare && <div className='flex md:hidden xl:hidden pb-2  gap-2 items-center ' onClick={handelompare}>
      <button className={'button-3 '}>Compare</button>
        </div>}
       {Pokemon && <div className='w-full md:w-3/5 xl:w-1/3 flex min-h-screen md:min-h-fit  xl:min-h-fit'>
            <PokeDetail Pokemon={Pokemon}></PokeDetail>
        </div>}
        {!compare && Pokemon && <div className='hidden md:flex xl:flex  gap-2 items-center absolute top-0 md:-top-[3.2rem] md:right-24 xl:-top-[3.2rem] xl:right-1/4' onClick={handelompare}>
              {/* <p className='font-bold text-2xl text-red-700'>Or</p> */}
        <button className={'button-3 '}>Compare</button>
        </div>}
        {compare && <div className='w-full md:w-3/5 xl:w-1/3 flex  min-h-fit flex-row-reverse'>
          <ImCross className='' onClick={handelompare}></ImCross>
        {compareData?<PokeDetail Pokemon={compareData}></PokeDetail>:<Loading></Loading>}
        </div>}
    </div>
  )
}

export default PokeDetailLaindingPage

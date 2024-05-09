import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react'
import PokeDetail from '../ui/PokeDetail'
import { useParams } from 'react-router-dom'
import Button from '../ui/Button'
import { ImCross } from "react-icons/im";
import Input from '../ui/Input';
import { AllFunc } from '../Context/Store';
import axios from 'axios';

function PokeDetailLaindingPage() {
  const[compare,setCompare] = useState(false)
  const[compareData,setCompareData] =useState()
  const { handelSinglePageApiData, Pokemon,Tab, load,handelBookMarkList, bookmark,search } = useContext(AllFunc)
  const handelompare= async()=>{
    try {
      if(search.length ==0){
        return
      }
      const pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${search}`)
      setCompareData(pokemon.data)
      console.log(pokemon.data);
      setCompare(!compare)
    } catch (error) {
      console.log(error);
    }
  }
  const param = useParams()
    useEffect(() => {
        handelSinglePageApiData(param.name)
    }, [])
    useEffect(() =>{
      setCompareData()
      setCompare(false)
    },[Pokemon])
    
    
  return (
    <div className='w-full flex justify-center items-center flex-col md:flex-row xl:flex-row min-h-fit relative p-2 '>
      {!compare && <div className='flex md:hidden xl:hidden pb-2  gap-2 items-center ' onClick={handelompare}>
        <Button name={'Compare'} className={'button-3 '}></Button>
        </div>}
        <div className='w-full md:w-3/5 xl:w-1/3 flex min-h-screen md:min-h-fit  xl:min-h-fit'>
            <PokeDetail Pokemon={Pokemon}></PokeDetail>
        </div>
        {!compare && <div className='hidden md:flex xl:flex  gap-2 items-center absolute top-0 md:-top-[3.2rem] md:right-20 xl:-top-[3.2rem] xl:right-1/4' onClick={handelompare}>
              <p className='font-bold text-2xl text-red-700'>Or</p>
        <Button name={'Compare'} className={'button-3 '}></Button>
        </div>}
        {compare && compareData &&  <div className='w-full md:w-3/5 xl:w-1/3 flex  min-h-fit flex-row-reverse'>
          <ImCross className='' onClick={handelompare}></ImCross>
        <PokeDetail Pokemon={compareData}></PokeDetail>
        </div>}
    </div>
  )
}

export default PokeDetailLaindingPage

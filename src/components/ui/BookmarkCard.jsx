import React, { useContext, useState } from 'react'
import { Bookmark } from 'lucide-react';
import PokeBall from '../ui/PokeBall'
import { AllFunc } from '../Context/Store';
const backColor = {
    grass: "#48D0B0",
    fire: '#FB6C6C',
    water: '#76BDFE',
    bug: 'grey',
    electric:'#FFD86F',
    poison:'#a77997',
    normal:'#c0be97',
    ground:'#772b29'
}
const borderCol = {
    grass: "#4caf98",
    fire: '#f05757',
    water: '#6ba2d4',
    bug: '#a99c9c',
    electric:'#f5c952',
    poison:'#f397d3c2',
    normal:'#fffbb1',
    ground:"#be4a47",
    
}

function BookmarkCard({ele}) {
    const [book,setbook] = useState(true)
    const {handelBookMarkList} = useContext(AllFunc)
    const handel = ()=>{
        handelBookMarkList(ele,book)
    }
  return (
    <div className='border w-full h-full flex rounded-xl p-2 bg-rose-400' style={ele ? { backgroundColor: backColor[ele.types[0].type.name] } : null}>
            <div className='w-1/2'>
                <h1 className='capitalize font-bold text-2xl text-white'>
                    {ele.name}
                </h1>
                <div className='flex gap-2 p-3'>
                    {Object.keys(ele).length > 0 ?
                        ele.types.map((ele) => {
                            return <div key={ele.type.name} className='border-2 rounded-md w-fit px-2 capitalize font-semibold text-sm text-white'>{ele.type.name}</div>;
                        })
                        : <></>}
                </div>
            </div>
            <div className='w-1/2 h-full relative overflow-hidden b'>
            <div className='mt-4 mr-5 h-6 w-full rounded p-0  text-4xl text-white  focus:fill-yellow-500 flex justify-end items-center' onClick={()=> handel()}>
                            <Bookmark className='' style={{fill: book?'yellow':null}}></Bookmark>
                        </div>
                <img src={ele.sprites.other['official-artwork'].front_default} alt="" className='top-1/2 absolute w-full h-1/2 z-10' />
               
                {ele?<PokeBall name={ele.types[0].type.name}></PokeBall>:<></>}
            </div>
        </div>
  )
}

export default BookmarkCard

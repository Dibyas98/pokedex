import React, { useContext, useEffect, useState } from 'react'
import { AllFunc } from '../Context/Store'
import PokeBall from './PokeBall'
import { Bookmark } from 'lucide-react';
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

function PokeCard({ form, img }) {
    const { FetchData,bookmark } = useContext(AllFunc)
    const [pokeData, setPokeData] = useState(false)
    const [book,setbook] = useState(false)
    useEffect(() => {
        async function apicall() {
            const api = await FetchData(form.url);
            setPokeData(api)
            
        }
        apicall()
    }, [])
    useEffect(() =>{
        const fin = bookmark.find((ele) => ele.id == pokeData.id);
            if(fin){
                setbook(true)
            }
    })
    return (
        <div className='border w-full h-full flex rounded-xl p-2 bg-rose-400' style={pokeData ? { backgroundColor: backColor[pokeData.types[0].type.name] } : null}>
            <div className='w-1/2'>
                <h1 className='capitalize font-bold text-2xl text-white'>
                    {form.name}
                </h1>
                <div className='flex gap-2 p-3'>
                    {Object.keys(pokeData).length > 0 ?
                        pokeData.types.map((ele) => {
                            return <div key={ele.type.name} className='border-2 rounded-md w-fit px-2 capitalize font-semibold text-sm text-white'>{ele.type.name}</div>;
                        })
                        : <></>}
                </div>
            </div>
            <div className='w-1/2 h-full relative overflow-hidden b'>
            <div className='mt-4 mr-5 h-6 w-full rounded p-0  text-4xl text-white  focus:fill-yellow-500 flex justify-end items-center' onClick={()=> handelbook()}>
                            <Bookmark className='' style={{fill: book?'yellow':null}}></Bookmark>
                        </div>
                <img src={img} alt="" className='top-1/2 absolute w-full h-1/2 z-10' />
                {/* <div className='absolute  rounded-full w-[110px] h-[110px] top-20 BorderWi p-3 border-[#e86e6e]' style={pokeData ? { borderColor: borderCol[pokeData.types[0].type.name] } : null}>

                    <div className=' w-full h-full rounded-full bg-[#e86e6e]' style={pokeData ? { backgroundColor: borderCol[pokeData.types[0].type.name] } : null}>


                    </div>
                    <div className= ' absolute top-6 w-[35px] h-3 -right-8 bg-rose-400' style={pokeData ? { backgroundColor: backColor[pokeData.types[0].type.name] } : null}>
                        

                    </div> <div className= ' absolute top-6 w-[35px] h-3 -left-8 bg-rose-400' style={pokeData ? { backgroundColor: backColor[pokeData.types[0].type.name] } : null}>
                        

                        </div>
                </div> */}
                {pokeData?<PokeBall name={pokeData.types[0].type.name}></PokeBall>:<></>}
            </div>
        </div>
    )
}

export default React.memo(PokeCard)

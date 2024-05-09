import React, { useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AllFunc } from '../Context/Store';
import { backColor, borderCol } from '../data/color'
import PokeBall from './PokeBall';
import Tabs from './Tabs';
import About from '../pages/About'
import BaseStats from '../pages/BaseStats'
import MOves from '../pages/MOves'
import Evolution from '../pages/Evolution'
import Loading from './Loading';
import SearchContainer from './SearchContainer';
import BookmarkStar from './BookmarkStar';
import { Bookmark } from 'lucide-react';

function PokeDetail({Pokemon}) {
    const { handelSinglePageApiData,Tab, load,handelBookMarkList, bookmark } = useContext(AllFunc)
    const [book,setbook] = useState(false)
    useEffect(() =>{
        function initial(){
            const fin = bookmark.find((ele) => ele.name == Pokemon.name);
            if(fin){
                setbook(true)
            }
        }   
        initial()
    },[Pokemon])
    const handelbook = ()=>{
        setbook((prev) => !prev);
        handelBookMarkList(Pokemon,book)
    }
    return (
        <>
        <div className='w-full  flex items-center flex-col px-5 xl:p-0 '>
        {load? <div className='flex justify-center'><Loading className='w-full  '></Loading></div>:<></>}
            {
                Pokemon && <div className='w-full  md:w-full xl:w-3/5  h-80  flex  items-center flex-col relative rounded-t-2xl ' >
                    <div className='w-full  xl:w-full h-full border-2  flex justify-end rounded-t-2xl' style={Pokemon ? { backgroundColor: backColor[Pokemon.types[0].type.name] } : null}>
                        <div className='mt-4 mr-5 h-10 w-10 rounded p-0 z-20 text-5xl text-white  focus:fill-yellow-500 flex justify-center items-center ' >
                            <Bookmark className='' style={{fill: book?'yellow':null}} onClick={()=> handelbook()}></Bookmark>
                        </div>
                        <img src={Pokemon.sprites.other['official-artwork'].front_default} alt={Pokemon.name} className='w-full h-60 md:w-3/5 xl:w-3/5 absolute top-0 md:left-36 md:top-16 xl:left-24 z-10' />
                    </div>
                    <div className='w-full xl:w-full  absolute bg-white rounded-t-2xl top-64 border-2 h-auto'>
                        <Tabs></Tabs>
                        {
                            Pokemon && <div className=' w-full h-72'>
                            {
                                Tab==='about'&& <About height={Pokemon.height} weight={Pokemon.weight} ability={Pokemon.abilities}></About>
                                
                            }
                            {
                                Tab==='base stats'&& <BaseStats stats ={Pokemon.stats}></BaseStats>
                                
                            }
                            {
                                Tab==='evolution'&& <Evolution></Evolution>
                                
                            }
                            {
                                Tab==='moves'&& <MOves moves={Pokemon.moves}></MOves>
                                
                            }
                            </div>
                        }
                    </div>
                    
                </div>

            }
        </div >
        
        </>
    )
}

export default React.memo(PokeDetail)

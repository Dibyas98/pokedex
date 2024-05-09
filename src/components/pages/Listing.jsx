import React, { useContext, useEffect } from 'react'
import { AllFunc } from '../Context/Store'
import PokeCard from '../ui/PokeCard'
import Loading from '../ui/Loading'
import { nanoid } from 'nanoid'
import { Link } from 'react-router-dom'
import { FaFilter } from "react-icons/fa";

function Listing() {
    const { handelInfiniteScroll, load } = useContext(AllFunc)
    useEffect(() =>{
        window.addEventListener("scroll",handelInfiniteScroll);
    },[])


    const { AllPoke } = useContext(AllFunc)
    return (
        <>
        <div className='w-full h-fit b flex flex-wrap px-5 gap-5 md:gap-10 justify-center xl:px-8 xl:flex-row xl:pt-4 '>
            {
                AllPoke.map((ele, ind) => {
                    return <Link to={`${ele.forms[0].name}`} className='w-full md:w-2/6 xl:w-1/6 h-72 ' key={ele.id}><div className='w-full h-full' >
                        <PokeCard form={ele.forms[0]} img={ele.sprites.other['official-artwork'].front_default}></PokeCard>
                    </div></Link>
                })
            }
            {
                load && <div className='py-14'><Loading color={'blue'}></Loading></div>
            }
            
        </div>
        
    </>
    )
}

export default React.memo(Listing)

import React, { useContext } from 'react'
import { AllFunc } from '../Context/Store'
import PokeCard from '../ui/PokeCard'

function Listing() {
    const { AllPoke } = useContext(AllFunc)
    return (
        <div className='w-full h-fit flex flex-wrap px-5 gap-5 md:gap-10 justify-center xl:px-8 xl:flex-row'>
            {
                AllPoke.map((ele) => {
                    return <div className='w-full md:w-2/6 xl:w-1/6 h-72'>
                        <PokeCard form={ele.forms[0]} img={ele.sprites.other['official-artwork'].front_default}></PokeCard>
                    </div>
                })
            }
        </div>
    )
}

export default React.memo(Listing)

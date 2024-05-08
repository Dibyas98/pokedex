import React, { useContext, useEffect, useState } from 'react'
import { AllFunc } from '../Context/Store'
const backColor = {
    grass: "#48D0B0",
    fire: '#FB6C6C',
    water: '#76BDFE',
    bug: 'grey'
}
const borderCol = {
    grass: "#4caf98",
    fire: '#f05757',
    water: '#6ba2d4',
    bug: 'grey'
}

function PokeCard({ form, img }) {
    const { FetchData } = useContext(AllFunc)
    const [pokeData, setPokeData] = useState(false)
    useEffect(() => {
        async function apicall() {
            const api = await FetchData(form.url);
            setPokeData(api)

        }
        apicall()
    }, [])
    return (
        <div className='border w-full h-full flex rounded-xl p-2' style={pokeData ? { backgroundColor: backColor[pokeData.types[0].type.name] } : null}>
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

                <img src={img} alt="" className='top-1/2 absolute w-full h-1/2 z-10' />
                <div className='absolute  rounded-full w-[110px] h-[110px] top-20 BorderWi p-3 ' style={pokeData ? { borderColor: borderCol[pokeData.types[0].type.name] } : null}>

                    <div className=' w-full h-full rounded-full' style={pokeData ? { backgroundColor: borderCol[pokeData.types[0].type.name] } : null}>


                    </div>
                    <div className= ' absolute top-6 w-[35px] h-3 -right-8' style={pokeData ? { backgroundColor: backColor[pokeData.types[0].type.name] } : null}>
                        

                    </div> <div className= ' absolute top-6 w-[35px] h-3 -left-8' style={pokeData ? { backgroundColor: backColor[pokeData.types[0].type.name] } : null}>
                        

                        </div>
                </div>
            </div>
        </div>
    )
}

export default React.memo(PokeCard)

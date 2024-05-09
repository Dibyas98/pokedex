import { nanoid } from 'nanoid'
import React from 'react'

function About(props) {
    return (
        <div className='px-5 flex gap-5 flex-col'>
            <div className='flex gap-5'>
                <div className='font-semibold flex flex-col gap-2'>
                    {/* <h1 >Species</h1> */}
                    <h1>Height</h1>
                    <h1>Weight</h1>
                    <h1>Abilities</h1>
                </div>
                <div className='font-normal  flex flex-col gap-2'>
                    {/* <p>{''}</p> */}
                    <p>{props.height}</p>
                    <p>{props.weight}</p>
                    <p className='flex gap-1'>{
                        props.ability.map((ele) => <span key={nanoid()}>{ele.ability.name}, </span>)
                    }</p>
                    {/* <p>{props.ability.}</p> */}
                </div>
            </div>
            {/* <h1 className='font-bold text-xl'>Breeding</h1>
            <div>
                <div>
                    Egg Group
                </div>
                <div>
                    
                </div>
            </div> */}
        </div>
    )
}

export default React.memo(About)

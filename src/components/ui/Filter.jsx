import React, { useContext } from 'react'
import { AllFunc } from '../Context/Store'
const list=['ability',,'location','pokemon-species']
function Filter() {
    const {FilterPokeMon} = useContext(AllFunc)
    const handelFilter= (e)=>{
        // FilterPokeMon(e)
    }
  return (
    <ul className='text-base text-[#13106a] font-bold'>
        {list.map((ele) =>{
            return <li className='capitalize cursor-pointer' onClick={(e)=>handelFilter(ele)}>{ele}</li>
        })}
    </ul>
  )
}

export default React.memo(Filter)

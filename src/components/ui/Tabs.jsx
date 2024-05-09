import React, { useContext } from 'react'
import { AllFunc } from '../Context/Store'

function Tabs() {
    const {handelTabs,Tab} = useContext(AllFunc )
  return (
    <ul className='flex w-full  justify-between px-2 pt-8 border-b pb-2 font-semibold' >
        <li className='cursor-pointer relative' onClick={(e) => handelTabs(e.currentTarget.innerText)}>
            About
            {Tab==='about'&& <div className='absolute h-[2px] w-full bg-blue-500 -bottom-2'></div>}
        </li >
        <li className='cursor-pointer relative'  onClick={(e) => handelTabs(e.currentTarget.innerText)}>
            Base Stats
            {Tab==='base stats'&& <div className='absolute h-[2px] w-full bg-blue-500 -bottom-2'></div>}

        </li>
        {/* <li className='cursor-pointer relative'  onClick={(e) => handelTabs(e.currentTarget.innerText)}>
            Evolution
            {Tab==='evolution'&& <div className='absolute h-[2px] w-full bg-blue-500 -bottom-2'></div>}

        </li > */}
        <li className='cursor-pointer relative'  onClick={(e) => handelTabs(e.currentTarget.innerText)}>
            Moves
            {Tab==='moves'&& <div className='absolute h-[2px] w-full bg-blue-500 -bottom-2'></div>}

        </li>
    </ul>
  )
}

export default React.memo(Tabs)

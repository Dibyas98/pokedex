import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import SearchContainer from '../ui/SearchContainer'
import { AllFunc } from '../Context/Store'

export default function Layour() {
    const{error} =useContext(AllFunc)
    return (
        <>
            <div className='w-full h-full flex  flex-col items-center'>
                <SearchContainer></SearchContainer>
            <div className='w-full flex justify-center text-red-600 font-semibold text-xl'>
                <h1>{error}</h1>
            </div>
            </div>
            <Outlet></Outlet>
        </>
    )
}

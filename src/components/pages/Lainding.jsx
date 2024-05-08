import React, { useContext } from 'react'
import { AllFunc } from '../Context/Store'
import SearchContainer from '../ui/SearchContainer'
import Loading from '../ui/Loading'

function Lainding() {
    const {OnclickSearchButton,load} = useContext(AllFunc)
    return (
        <div className='w-full h-full flex  flex-col items-center'>
            <SearchContainer></SearchContainer>
            {
                load && <Loading color={'blue'}></Loading>
            }
            
        </div>
    )
}

export default React.memo(Lainding)

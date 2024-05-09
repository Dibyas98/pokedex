import React, { useContext, useState } from 'react'
import { AllFunc } from '../Context/Store'
import SearchContainer from '../ui/SearchContainer'
import Loading from '../ui/Loading'
import { LazyListing } from '../Lazy/LazyLoading'
import { FaFilter } from "react-icons/fa";
import Filter from '../ui/Filter'

function Lainding() {
    const { OnclickSearchButton, load ,AllPoke} = useContext(AllFunc)
    const [filter,setFilter] = useState(false);
    const handelFilter= ()=>{
        setFilter(!filter)
    }
    return (
        <div className='w-full h-full flex  flex-col items-center  '>
            <div className='fixed z-20  text-3xl bottom-5 right-5 flex items-end text-gray-500'>
                {
                    filter && <Filter></Filter>
                }
                <FaFilter  onClick={handelFilter}></FaFilter>
            </div>
            {AllPoke.length>0?<LazyListing></LazyListing>:<></>}
        </div>
    )
}

export default React.memo(Lainding)

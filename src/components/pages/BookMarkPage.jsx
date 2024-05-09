import React, { useContext } from 'react'
import { AllFunc } from '../Context/Store'
import PokeCard from '../ui/PokeCard'
import BookmarkCard from '../ui/BookmarkCard';
import { Link } from 'react-router-dom';

function BookMarkPage() {
    const{bookmark} = useContext(AllFunc)
    console.log(bookmark);
  return (
    <div className='flex  px-10 flex-wrap gap-2 justify-center'>
      <div className='flex gap-5 w-4/5 flex-col xl:flex-row justify-center xl:justify-normal'>
      {
        bookmark.map((ele) => <Link to={`/${ele.name}`} className='w-full xl:w-1/4 h-56'><div className='w-full h-full'><BookmarkCard ele={ele}></BookmarkCard></div></Link>)
      }
      </div>
    </div>
  )
}

export default React.memo(BookMarkPage)

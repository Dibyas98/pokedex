import React from 'react'
import { Bookmark } from 'lucide-react';

function BookmarkStar() {
  return (
    <Bookmark className='fill-red-900 focus:fill-yellow-400'></Bookmark>
  )
}

export default React.memo(BookmarkStar)

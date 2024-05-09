import React from 'react'

function MOves(props) {
  return (
    <div className='w-full flex flex-wrap gap-2 font-medium p-5 overflow-y-scroll h-72'>
      {
        props.moves.map((ele) => <p className='bg-gray-300 px-2 rounded'>{ele.move.name}</p>)
      }
    </div>
  )
}

export default React.memo(MOves)

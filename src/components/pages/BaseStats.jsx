import React from 'react'
import Meter from '../ui/Meter'
import { nanoid } from 'nanoid'

function BaseStats(props) {
  return (
    <div className='w-full'>
      {
        props.stats.map((ele) => <Meter key={nanoid()} value={ele.base_stat} name={ele.stat.name}></Meter>)
      }
    </div>
  )
}

export default React.memo(BaseStats)

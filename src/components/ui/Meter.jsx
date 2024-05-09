import React from 'react';

function Meter(props) {
  return (
    <div className='w-full h-10 flex items-center gap-10 px-5'>
      <p className='font-semibold capitalize w-2/5 flex'>{props.name}</p>
      <div className='w-2/5 h-2 bg-gray-200 rounded-lg '>
        <div className=' h-full rounded-lg' style={{
            backgroundColor: props.value > 60 ? '#53cb53' : '#fbc561 ',
            width: `${props.value}%`
          }}
        >
            
        </div>
      </div>
        <p className='font-semibold' style={{
            color: props.value > 60 ? '#53cb53' : '#fbc561 '
          }}>{props.value}</p>
    </div>
  );
}

export default React.memo(Meter);

import React from 'react'
const backColor = {
    grass: "#48D0B0",
    fire: '#FB6C6C',
    water: '#76BDFE',
    bug: 'grey',
    electric:'#FFD86F',
    poison:'#a77997',
    normal:'#c0be97',
    ground:'#772b29'
}
const borderCol = {
    grass: "#4caf98",
    fire: '#f05757',
    water: '#6ba2d4',
    bug: '#a99c9c',
    electric:'#f5c952',
    poison:'#f397d3c2',
    normal:'#fffbb1',
    ground:"#be4a47",
    
}

function PokeBall({name}) {
    return (
        <div className='absolute  rounded-full w-[110px] h-[110px] top-20 BorderWi p-3 border-[#e86e6e]' style={name ? { borderColor: borderCol[name] } : null}>

            <div className=' w-full h-full rounded-full bg-[#e86e6e]' style={name ? { backgroundColor: borderCol[name] } : null}>


            </div>
            <div className=' absolute top-6 w-[35px] h-3 -right-8 bg-rose-400' style={name ? { backgroundColor: backColor[name] } : null}>


            </div> <div className=' absolute top-6 w-[35px] h-3 -left-8 bg-rose-400' style={name ? { backgroundColor: backColor[name] } : null}>


            </div>
        </div>
    )
}

export default React.memo(PokeBall)

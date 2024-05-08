import React, { useContext } from 'react'
import { AllFunc } from '../Context/Store'

function Button(props) {
    const {searchButton} = useContext(AllFunc)
  return (
    <button className={` w-24 p-1 ${props.className}`} disabled={searchButton} onClick={props.event}>{props.name}</button>
  )
}

export default React.memo(Button)

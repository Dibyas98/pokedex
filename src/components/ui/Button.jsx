import React, { useContext } from 'react'
import { AllFunc } from '../Context/Store'
import { useNavigate } from 'react-router-dom'

function Button(props) {
  const navigate = useNavigate()
    const {searchButton,Pokemon,search} = useContext(AllFunc)
  return (
    <button className={` w-24 p-1 ${props.className}`} disabled={searchButton} onClick={()=>{
      props.event
      return navigate(`/${search}`)}
    }>{props.name}</button>
  )
}

export default React.memo(Button)

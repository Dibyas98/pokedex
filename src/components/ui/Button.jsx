import React, { useContext } from 'react'
import { AllFunc } from '../Context/Store'
import { Link, useNavigate } from 'react-router-dom'

function Button(props) {
  const navigate = useNavigate()
  const calle = ()=>{
    props.event()
  }
    const {searchButton,Pokemon,search} = useContext(AllFunc)
  return (
    <Link to={`/${search}`}><button className={` w-24 p-1 ${props.className}`} disabled={searchButton} onClick={calle}>{props.name}</button></Link>
  )
}

export default React.memo(Button)

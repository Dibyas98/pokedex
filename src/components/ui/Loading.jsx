import React from 'react'
import { Oval } from 'react-loader-spinner'

function Loading(props) {
  return (
    <Oval
  visible={true}
  height="80"
  width="80"
  color={props.color}
  ariaLabel="oval-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />
  )
}

export default React.memo(Loading)

import React, { useContext, useState } from 'react';
import { AllFunc } from '../Context/Store';

const Input = React.memo((props) => {
  const {handelSearch, search} =useContext(AllFunc)
  return (
    <input type={props.type} placeholder={props.placeholder} value={search} className={`w-full h-full focus:outline-none border p-1 rounded ${props.className}`} onChange={(e)=>handelSearch(e)} />
  );
});

export default Input;

import React from 'react';

const Input = React.memo((props) => {
  return (
    <input type={props.type} placeholder={props.placeholder} className={`w-full h-full focus:outline-none border p-1 rounded ${props.className}`}/>
  );
});

export default Input;

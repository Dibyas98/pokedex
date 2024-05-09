import React, { useContext, useState } from 'react'
import Input from '../ui/Input'
import Button from '../ui/Button'
import { IoMdSearch } from "react-icons/io";
import { AllFunc } from '../Context/Store'
import { Search } from 'lucide-react';


function SearchContainer() {
  const { OnclickSearchButton } = useContext(AllFunc)
    
  return (
    <div className=' w-full flex gap-2 justify-center py-5 px-3 md:w-1/2 xl:1/2'>
      <div className='w-full px-1 xl:w-1/2'>
        <Input type={'text'} placeholder={'PokeMon Name'} ></Input>
      </div>
      <div className='hidden xl:block'>
        <Button name={'Search'} className={'border button-7 '} event={OnclickSearchButton}></Button>
      </div>
      <div className='xl:hidden w-8 border flex justify-center items-center' onClick={OnclickSearchButton}>
        <button onClick={OnclickSearchButton} >
          <Search></Search>
        </button>
      </div>
    </div>
  )
}

export default React.memo(SearchContainer)

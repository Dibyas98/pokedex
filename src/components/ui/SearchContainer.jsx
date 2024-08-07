import React, { useContext, useState } from 'react'
import Input from '../ui/Input'
import Button from '../ui/Button'
import { IoMdSearch } from "react-icons/io";
import { AllFunc } from '../Context/Store'
import { Search } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';


function SearchContainer() {
  const { OnclickSearchButton,search } = useContext(AllFunc)
  const navigate = useNavigate()
    
  return (
    <div className=' w-full flex gap-2 justify-center py-5 px-3 md:w-1/2 xl:1/2'>
      <div>
        <Link to={'/poke/bookmark'}>
        <button className='button-3'>Bookmark List</button>
        </Link>
      </div>
      <div className='w-full px-1 xl:w-1/2'>
        <Input type={'text'} placeholder={'PokeMon Name'} ></Input>
      </div>
      <div className='hidden xl:block'>
        <Button name={'Search'} className={'border button-7 '} event={OnclickSearchButton}></Button>
      </div>
      <div className='xl:hidden w-8 border flex justify-center items-center' >
        <Link to={`/${search}`}><button  >
          <Search></Search>
        </button></Link>
      </div>
    </div>
  )
}

export default React.memo(SearchContainer)

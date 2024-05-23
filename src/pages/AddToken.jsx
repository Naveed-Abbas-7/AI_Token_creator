import React from 'react'
import SideBar from '../components/SideBar'
import { Flex } from '@chakra-ui/react'
import SaitaVhain from '../components/SaitaVhain'

const AddToken = () => {
  return (
    <div className='h-screen flex'>
        <div className=''>
      <SideBar/>
        </div>
        <div className='w-full bg-[#f8fafc]'>
      <SaitaVhain/>
        </div>
   
    </div>
  )
}

export default AddToken
import React from 'react'
import { NavbarWithMegaMenu } from './nave'
import Image from 'next/image'
import evit_logo from '../../Image/evitamin_logo.svg'
import Tabs from './NavigationTabs'
import { useSelector } from 'react-redux';

export default function Layout_headder() {
  const user_link = useSelector((state) => state.myReducer.user_link);
  console.log(user_link,"desh2")
  return (
    <>
    <div className='px-32 grid grid-cols-5 gap-4 p-10'>
        <Image className='w-28' src={evit_logo} />
        <div className='w-full col-span-4'>
        <NavbarWithMegaMenu tabs={user_link} />
        </div>
    </div>
    </>
    
  )
}

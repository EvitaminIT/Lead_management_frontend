import React from 'react'
import { NavbarWithMegaMenu } from './nave'
import Image from 'next/image'
import evit_logo from '../../Image/evitamin_logo.svg'

export default function Layout_headder() {
  return (
    <>
    <div className='grid grid-cols-6 gap-4 p-10'>
        <Image className='w-28' src={evit_logo} />
        <div className='w-full col-span-4'>
        <NavbarWithMegaMenu/>
        </div>
    </div>
    </>
    
  )
}

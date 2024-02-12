import React from 'react'
import { NavbarWithMegaMenu } from './nave'
import Image from 'next/image'
import evit_logo from '../../Image/evitamin_logo.svg'
import { useSelector } from 'react-redux';
import Link from 'next/link';

export default function Layout_headder() {
 
  return (
    <>
    <div className='px-32 grid grid-cols-5 gap-4 p-10'>
      <Link href={"/dashboard"}>
        <Image className='w-28' src={evit_logo} />
      </Link>
        <div className='w-full col-span-4'>
        <NavbarWithMegaMenu />
        </div>
    </div>
    </>
    
  )
}

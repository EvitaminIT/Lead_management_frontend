import React from 'react'
import Index from '@/material_component/client_component'
import { useSelector } from 'react-redux';
import dynamic from 'next/dynamic';

function Wellcome_bnr() {
    const data = useSelector((state) => state.myReducer.data);
    return (
        <>
            <div className='col-span-4 px-6'>
                <Index.Typography className='text-2xl text-[#67B037]'>{`Welcome Back, ${data? data.name:""} !`}</Index.Typography>
                <Index.Typography>You have 45 new leads to update in 5 days.</Index.Typography>
            </div>
        </>
    )
}

export default dynamic (() => Promise.resolve(Wellcome_bnr), {ssr: false})
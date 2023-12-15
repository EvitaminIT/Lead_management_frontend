import React from 'react'
import Create_lead from './Create_lead'
import index from '@/material_component/client_component'

export default function  Update_lead_popup() {
  return (
    <>
    <index.Typography className='text-center text-2xl font-semibold'>Update Lead</index.Typography>
    <Create_lead Btn={"Update Lead"}/>
    </>
  )
}

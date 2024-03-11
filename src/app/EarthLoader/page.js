"use client"
import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber';
import { Sky, Stars } from '@react-three/drei';
import Earth2 from './EarthModel';
import { useControls } from 'leva';
import Camrapostions from './Camrapostions';


export default function Page() {
    const { cameara,fov,near,far }=useControls({
        cameara:[
            25,10,25
        ],
        fov:10,
        near:1,
        // far:100,

    })
    return (
        <div className='h-[82vh]'>
            <Canvas camera={{fov:fov,near:near,far:far,position:cameara}} className='bg-black rounded-lg'>
                <Suspense fallback={null}>
                    <Earth2 />
                    <Stars depth={60} count={4000} factor={7} saturation={0} fade={true} />
                    <Camrapostions event='mousedown'/>
                </Suspense>
            </Canvas>
        </div>
    )
}

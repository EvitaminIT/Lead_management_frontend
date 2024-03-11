import React, { useRef } from 'react'
import { events, useThree } from '@react-three/fiber'

export default function Camrapostions() {
    const Camera=useThree();
    const camearaRef=useRef(Camera)

    React.useEffect(()=>{
        const CameraLogPostion=()=>{
            const{x,y,z}=camearaRef.current.position
            const roundedx=Math.round(x*100)/100
            const roundedy=Math.round(y*100)/100
            const roundedz=Math.round(z*100)/100
            console.log(`Camera Posion X:${roundedx}, y:${roundedy}, Z:${roundedz}`)
        }

        camearaRef.current=Camera
        window.addEventListener(event,CameraLogPostion)
    },[])
  

  return null
}

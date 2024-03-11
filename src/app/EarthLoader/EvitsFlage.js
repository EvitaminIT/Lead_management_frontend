import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useControls } from 'leva';


export const Flag = ({ }) => {
    const { nodes, materials } = useGLTF('/Evitamin_Flag.glb');
    const { scaleflag, flgPosition } = useControls({
        scaleflag: [0.02,0.02,0.02],
        flgPosition: [0,0.05,0],
      });
    return (
        <group dispose={null} scale={scaleflag} position={flgPosition}>
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <mesh  geometry={nodes.Object_3.geometry} material={materials.FlagBrown} />
            <mesh geometry={nodes.Object_4.geometry} material={materials['Material.001']} />
          </group>
          <group position={[0.383, -0.264, 0]} scale={[1.391, 0.794, 0.038]}>
            <mesh geometry={nodes.Cube001.geometry} material={materials['Material.002']} />
            <mesh geometry={nodes.Cube001_1.geometry} material={materials['Material.003']} />
          </group>
        </group>
    );
  };

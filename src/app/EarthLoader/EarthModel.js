import React, { useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import EarthDayMap from '../../assets/8k_earth_daymap.jpg';
import EarthNormalMap from '../../assets/8k_earth_normal_map.jpg';
import EarthSpecularMap from '../../assets/8k_earth_specular_map.jpg';
import EarthCloudMap from '../../assets/8k_earth_clouds.jpg';
import EarthnightMap from '../../assets/8k_earth_nightmap.jpg';
import { useControls } from 'leva';
import { Flag } from './EvitsFlage';



const citiesData = [
  { name: 'New York', coordinates: { latitude: 40.7128, longitude: -74.0060 } },
  { name: 'UK', coordinates: { latitude: 51.5074, longitude: -2.607438644337975 } },
  { name: 'Maxico', coordinates: { latitude:19.432608, longitude: -99.133209 }},
  { name:'canada', coordinates:{ latitude:62.393303,longitude:-96.8181455 } },
  { name:'USA', coordinates:{ latitude:36.966428,longitude:-95.844032 } },
  { name:'India', coordinates:{ latitude:22.817535109070345,longitude:79.79642908743432 } },
  { name:'germany', coordinates:{ latitude:51.1657065,longitude:10.452764000000002} },
  { name:'sapin', coordinates:{ latitude:39.47854832637753,longitude:-3.4202906039606176} },
  { name:'France', coordinates:{ latitude:46.55090771526627,longitude:2.3422277140306207} },
  { name:'UAE', coordinates:{ latitude:23.80554047686701,longitude:54.04598202683864} },
  { name:'Japan', coordinates:{ latitude:36.440570203272166,longitude:138.1477486767903} },
  { name:'Australia', coordinates:{ latitude:-25.12647734214392,longitude:133.7387492855348} },
  { name:'Türkiye', coordinates:{ latitude:38.98533666431164,longitude:35.33778040829687} },

];


const Earth2 = () => {
  const [colorMap, normalMap, specularMap, cloudMap, nightMap] = useLoader(TextureLoader, [
    EarthDayMap.src,
    EarthNormalMap.src,
    EarthSpecularMap.src,
    EarthCloudMap.src,
    EarthnightMap.src,
  ]);

  const { position, scale } = useControls({
    position: [0, 0, 0],
    scale: [3, 3, 3],
  });

  const earthRef = useRef();
  const cloudRef = useRef();

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    earthRef.current.rotation.y = elapsedTime / 6;
    cloudRef.current.rotation.y = elapsedTime / 6;
  });


  return (
    <>
      
      <ambientLight intensity={5} />
      <mesh ref={cloudRef} scale={scale} position={position} >
        <sphereGeometry args={[1.005, 32, 32]} />
        <meshPhongMaterial map={cloudMap} opacity={0.4} depthWrite transparent side={THREE.DoubleSide} />
      </mesh>
      <mesh ref={earthRef} scale={scale} position={position}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshPhongMaterial specularMap={specularMap} />
        <meshStandardMaterial map={colorMap} normalMap={normalMap} metalness={0.5} roughness={1} />
        {citiesData.map((city, index) => (
          <CityPoint key={index} name={city.name} coordinates={city.coordinates} />
        ))}
        <OrbitControls enableZoom={false} enablePan={true} enableRotate={false} zoomSpeed={0.5} panSpeed={0.5} rotateSpeed={0.5} />
      </mesh>
    </>
  );
};



const CityPoint = ({ name, coordinates }) => {
  // Convert latitude and longitude to 3D space coordinates
  const phi = ((90 - coordinates.latitude) * Math.PI) / 180;
  const theta = ((coordinates.longitude + 180) * Math.PI) / 180;

  const x = -((1 * Math.sin(phi) * Math.cos(theta)) * 1.001);
  const y = (1 * Math.cos(phi)) * 1.001;
  const z = (1 * Math.sin(phi) * Math.sin(theta)) * 1.001;

  const { flage } = useControls({
    flage: [0.005, 8, 8],
  });

  

  return (
    <mesh position={[x, y, z]}>
      <sphereGeometry args={flage} />
      {/* <cylinderGeometry args={[0.5, 1, 2, 16]} /> */}
      <meshBasicMaterial color={"#39FF14"} />
      {name!="Australia"?
      <mesh >
      <Flag/>
      </mesh>
      :""
    }
    </mesh>
  );
};

export default Earth2;

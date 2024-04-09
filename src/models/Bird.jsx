import React, { useRef } from 'react';

import birdScene from '../assets/3d/bird.glb';
import { useGLTF } from '@react-three/drei';

const Bird = () => {
  const birdRef = useRef();
  const {scene, animations} = useGLTF(birdScene);
  return (
   <mesh position={[-5,2,1]}
   scale={[0.003, 0.003, 0.003]}
   >
    
    <primitive object={scene}  />
   </mesh>
   
  )
}

export default Bird;
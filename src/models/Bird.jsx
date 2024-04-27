import React, { useEffect, useRef } from 'react';

import birdScene from '../assets/3d/bird.glb';
import { useGLTF,useAnimations } from '@react-three/drei';

const Bird = () => {
  const ref = useRef();

  const {scene, animations} = useGLTF(birdScene);

  const { actions } = useAnimations(animations, ref);

useEffect(()=>{
  actions["Take 001"].play();
})


  return (
   <mesh position={[-5,2,1] }
   scale={[0.003, 0.003, 0.003]}
   ref={ref}
   >
    
    <primitive object={scene}  />
   </mesh>
   
  )
}

export default Bird;
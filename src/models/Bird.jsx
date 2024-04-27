import React, { useEffect, useRef } from 'react';

import birdScene from '../assets/3d/bird.glb';
import { useGLTF,useAnimations } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const Bird = () => {
  const ref = useRef();

  const {scene, animations} = useGLTF(birdScene);

  const { actions } = useAnimations(animations, ref);


useEffect(()=>{
  actions["Take 001"].play();
});

useFrame(({clock, camera})=>{
  ref.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;

  if(ref.current.position.x > camera.position.x + 10){
    //this is going to make the bird come backward and rotate 180*

    ref.current.rotation.y=Math.PI;

  }else if(ref.current.position.x < camera.position.x -10){
    //now this is the oppostie, it moves the bird forward and resets the bird rotation
    ref.current.rotation.y=0;

  }

  if(ref.current.rotation.y === 0){
    // move forward
    ref.current.position.x+= 0.01;
    ref.current.position.z-= 0.01;
  }else{
    ref.current.position.x-= 0.01;
    ref.current.position.z+= 0.01;
  }
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
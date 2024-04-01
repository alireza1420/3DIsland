
import React, { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { events, useFrame, useThree } from '@react-three/fiber';
import {a} from '@react-spring/three';

import islandScene from '../assets/3d/island.glb';
const Island = ({isRotating, setIsRotating, ...props})=> {
    const islandRef=useRef()
  const  { nodes, materials } = useGLTF(islandScene);
  const {gl, viewport} = useThree();

  const lastX = useRef(0);
  const rotationSpeed=useRef(0);
  const dampingFactor = 0.95;



const handelPointerDown = (e) => {
    e.stopProgation();
    e.preventDefault();
    e.setIsRotating(true);

    const clientX = event.touches ?
 event.touches[0].clientX 
: event.clientX;

lastX.current = clientX;

}
const handelPointerUp = (e) => {
    e.stopProgation();
    e.preventDefault();
    e.setIsRotating(false);

    const clientX = event.touches ?
    event.touches[0].clientX 
   : event.clientX;

   const delta = (clientX - lastX.current)  / viewport.width;

   islandRef.current.rotation.y += delta * 0.01 * Math.PI;

   lastX.current = clientX;

   rotationSpeed.current = delta * 0.01 * Math.PI;

    
}
const handelPointerMove = (e) => {
    e.stopProgation();
    e.preventDefault();

    if(isRotating){
        handelPointerUp(e);
    }
}
const handelKeyDown = (e) => {
    if (e.key === 'ArrowLeft'){
        if (!isRotating) setIsRotating (true);
    }

}



useEffect(()=>{
document.addEventListener('pointerdown',handelPointerDown)
document.addEventListener('pointerup',handelPointerUp)
document.addEventListener('pointermove',handelPointerMove)

return () => {

document.removeEventListener('pointerdown',handelPointerDown)
document.removeEventListener('pointerup',handelPointerUp)
document.removeEventListener('pointermove',handelPointerMove)

}

}, [gl, handelPointerDown, handelPointerUp, handelPointerMove])

  return (
    <a.group ref={islandRef} {...props}>
      <mesh

        geometry={nodes.polySurface944_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh

        geometry={nodes.polySurface945_tree1_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh

        geometry={nodes.polySurface946_tree2_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        
        
        geometry={nodes.polySurface947_tree1_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        
        
        geometry={nodes.polySurface948_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        
        
        geometry={nodes.polySurface949_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        
        
        geometry={nodes.pCube11_rocks1_0.geometry}
        material={materials.PaletteMaterial001}
      />
    </a.group>
  )
}


export default Island;


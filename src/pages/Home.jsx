import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from './Loader'
import Island from '../models/Island';

const Home = () => {
  const addjustIslandForScreenSize=()=>{

    let screenScale=null;
    let screenPosition= [0, -6.5, -43];
    let rotation=[0.1, 4.7, 0.0];

    if(window.innerWidth<768){
      screenScale = [0.9, 0.9, 0.9];
   
    }else{
      screenScale = [1, 1, 1];
    
    }

    return [screenScale,screenPosition, rotation];
  }

  const [islandScale, islandPosition, islandRotation] = addjustIslandForScreenSize();
  return (
    /*
       <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        POPUP
          
      </div>

    */ 
    <section className='w-full h-screen relative'>
        <Canvas className='w-full h-screen bg-transparent'
        camera={{near:0.1, far:1000}}
        >
          <Suspense fallback={<Loader />}>
            <directionalLight
            position={[1,5,1]}
            intensity={1}
            />
            <ambientLight
            intensity={0.5}
            />
            <pointLight/>
            <spotLight/>
            <hemisphereLight/>

            <Island
            
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
            />
          </Suspense>
          
        </Canvas>
   
    </section>
 
  )
}

export default Home
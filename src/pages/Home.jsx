import React, { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from './Loader'
import Island from '../models/Island';
import Sky from '../models/Sky';
import Bird from '../models/Bird';
import Plane from '../models/Plane';


const Home = () => {
  const [isRotating, setIsRotating] = useState(false)
  const [currentStage,setCurrentStage]=useState(1);
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

  const addjustPlaneForScreenSize=()=>{

    let screenScale, screenPosition;
   

    if(window.innerWidth<768){
      screenScale = [1.5, 1.5, 1.5];
      screenPosition=[0, -1.5,0];
   
    }else{
      screenScale = [3, 3, 3];
      screenPosition=[0, -4,-4];

    
    }

    return [screenScale,screenPosition];
  }

  const [islandScale, islandPosition, islandRotation] = addjustIslandForScreenSize();
  const [PlaneScale, PlanePosition, PlaneRotation] = addjustPlaneForScreenSize();
  return (
    /*
       <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        POPUP
          
      </div>

    */
    <section className='w-full h-screen relative'>
        <Canvas className ={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
        camera={{near:0.1, far:1000}}
        >
          <Bird 
        
          />
           <Sky
           isRotating={isRotating}
           />
          <Suspense fallback={<Loader />}>
            <directionalLight
            position={[1,5,1]}
            intensity={1}
            />
            <ambientLight
            intensity={0.5}
            />
            <hemisphereLight
            skyColor={'#b1e1ff'} groundColor={'#000000'} intensity={1}
            />

            <Island
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
            />

            <Plane
            isRotating={isRotating}
            PlaneScale={PlaneScale}
            PlanePosition={PlanePosition}
            rotation={[0,20,0]}
            />
          </Suspense>
          
        </Canvas>
   
    </section>
 
  )
}

export default Home
import { PerspectiveCamera, Ring } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import HackerRoom from '../components/HackerRoom.jsx'
import CanvasLoader from '../components/CanvasLoader.jsx'
import { useMediaQuery } from 'react-responsive'
import { calculateSizes } from '../constants/index.js'
import Target from '../components/Target.jsx'
import ReactLogo from '../components/ReactLogo.jsx'
import Cube from '../components/Cube.jsx'
import Rings from '../components/Rings.jsx'
import HeroCamera from '../components/HeroCamera.jsx'



const Hero = () => {
    const isSmall = useMediaQuery({ maxWidth: 440 });
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
    const isVeryLarge = useMediaQuery({ minWidth: 1440 , maxWidth : 2560});

    const sizes = calculateSizes(isSmall, isMobile, isTablet, isVeryLarge);
    return (
        <section className="min-h-screen w-full flex flex-col relative" id="home">
        <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
                        <p className='sm:text-3xl text-2xl font-medium text-orange-300 text-center font-generalsans'>Hello!<span className='glow'>🌞</span> I'm Sunny  <span className='waving-hand'>👋</span></p>
                        <h1 className="hero_title text-xl sm:text-xl text-center font-bold text-white">Front End Developer</h1>
            </div>
            <div className="w-full h-full absolute inset-0">
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>


          <PerspectiveCamera makeDefault position={[0, 0, 30]} />
          <HeroCamera isMobile={isMobile}>
              <HackerRoom scale={sizes.deskScale} position={sizes.deskPosition} rotation={[0.1, -Math.PI, 0]} />
            </HeroCamera>
                        <group>
                            <Target position={sizes.targetPosition} />
                            <ReactLogo position={sizes.reactLogoPosition} />
                            <Cube position={sizes.cubePosition} />
                            <Rings position={sizes.ringPosition} />
                            
                                                   </group>
                        <ambientLight intensity={1} />
                        <directionalLight intensity={0.5} position={[10, 10, 10]} />
                    </Suspense>
                </Canvas>

            </div>
        </section>
    )
}

export default Hero

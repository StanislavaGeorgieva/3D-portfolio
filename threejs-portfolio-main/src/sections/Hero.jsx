import { PerspectiveCamera, Ring } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import HackerRoom from '../components/HackerRoom.jsx'
import CanvasLoader from '../components/CanvasLoader.jsx'
import { useMediaQuery } from 'react-responsive'
import { calculateSizes } from '../constants/index.js'
import HeroCamera from '../components/HeroCamera.jsx'
import Button from '../components/Button.jsx'



const Hero = () => {
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const isVeryLarge = useMediaQuery({ minWidth: 1440, maxWidth: 2560 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet, isVeryLarge);
  return (
    <section className="min-h-screen w-full flex flex-col relative" id="home">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-5xl text-xl text-bold font-medium text-white text-center font-generalsans">
          Hello!
          <span className='waving-hand'>👋</span> I'm Sunny
          <span className='glow'>🌞</span>
        </p>
        <h1 className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">Front End Developer</h1>
      </div>
      <div className="w-full h-full absolute inset-0">
        
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />
            <HeroCamera isMobile={isMobile}>
              <HackerRoom scale={sizes.deskScale} position={sizes.deskPosition} rotation={[0.1, -Math.PI, 0]} />
            </HeroCamera>
            <ambientLight intensity={3} />
            <directionalLight intensity={0.5} position={[10, 10, 10]} />
          </Suspense>
        </Canvas>

      </div>

      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <a href="#about" className="w-fit">
          <Button name="About me" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
        </a>
      </div>
    </section>
  )
}

export default Hero

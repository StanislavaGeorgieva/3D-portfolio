import { PerspectiveCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import HackerRoom from '../components/HackerRoom.jsx'
import CanvasLoader from '../components/CanvasLoader.jsx'
import { useMediaQuery } from 'react-responsive'
import { calculateSizes } from '../constants/index.js'
import Target from '../components/Target.jsx'
import ReactLogo from '../components/ReactLogo.jsx'

const Hero = () => {
    const isSmall = useMediaQuery({ query: '(max-width: 440px)' })
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
    const isTablet = useMediaQuery({ query: '(min-widht: 768px ,max-width: 1024px)' })

    const sizes = calculateSizes(isSmall, isMobile, isTablet)
    return (
        <section className='min-h-screen w-full flex flex-col relative'>
            <div className='w-full mx-auto flex flex-col sm:mt-36 nt-20 c-space gap-3'>
                <p className='sm:text-3xl text-2xl font-medium text-orange-300 text-center font-generalsans'>Hi,<span className='glow'>🌞</span> I'm Sunny  <span className='waving-hand'>👋</span></p>
                className='glowing-sun'
                <p className='hero_tag text-gray_gradient'>My project</p>
            </div>
            <div className='w-full h-full absolute inset-0'>
                {/* <Leva /> */}
                <Canvas className='w-full h-full'>
                    <Suspense fallback={CanvasLoader}>


                        <PerspectiveCamera makeDefault position={[0, 0, 20]} />
                        <HackerRoom
                            position={sizes.deskPosition}
                            rotation={[0, -Math.PI, 0]}
                            scale={sizes.deskScale}
                        />
                        <group>
                            <Target position={sizes.targetPosition} />
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

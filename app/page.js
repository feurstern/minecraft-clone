'use client'
// import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Sky } from '@react-three/drei'
import { Physics } from '@react-three/cannon'
import Ground from './components/Ground'

const page = () => {
  return (
    <>
      <h1>

      </h1>
      <Canvas>
        <Sky sunPosition={[100, 100, 20]}></Sky>
        <ambientLight intensity={0.5}/>
        <Physics>
          <Ground/>
        </Physics>
      </Canvas>
    </>
  )
}

export default page 
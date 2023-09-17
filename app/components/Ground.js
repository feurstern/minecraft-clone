'use client'
import { usePlane } from "@react-three/cannon"
import { groundTexture } from "./images/texture"
// extend({planeBufferGeometry, meshStandardMaterial})

const Ground = () => {
    const [ref] = usePlane(()=>({
        rotation: [0,0,0],
        position: [0,0,0]
    }))

  return (
     <mesh ref={ref}>
       <planeGeometry attach='geometry' args={[100,100]} />
        <meshStandardMaterial attach='material' map={groundTexture} />

     </mesh>
  )
}

export default Ground
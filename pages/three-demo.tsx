import React, { useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'

const Box = () => {
  const ref = useRef()

  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)

  return (
    <mesh
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

const ThreeDemoPage = () => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box />
    </Canvas>
  )
}

export default ThreeDemoPage;
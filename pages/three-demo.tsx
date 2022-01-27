import React, { useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import styles from '../styles/Home.module.css'

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
    <main className={styles.main}>
      <header>
        <h1 className={styles.title}>
          Three.js Demo Page
        </h1>
      </header>
      <section className={styles.card}>
        <h2>demo01</h2>
        <Canvas>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Box />
        </Canvas>
      </section>
    </main>
  )
}

export default ThreeDemoPage;
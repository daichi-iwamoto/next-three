import { Canvas } from '@react-three/fiber'
import styles from '../../../styles/Home.module.css'

const AnbientLight = () => {
  return (
    <Canvas>
      <ambientLight color='lightblue' intensity={0.1} />
      <mesh
        scale={1}
      >
        <torusGeometry args={[3, 1, 30, 30]}/>
      </mesh>
    </Canvas>
  )
}

export const AnbientLightComponent = () => {
  return (
    <section className={styles.card}>
      <h2>AnbientLight</h2>
      <AnbientLight />
    </section>
  )
}
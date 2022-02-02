import { Canvas } from '@react-three/fiber'
import styles from '../../../styles/Home.module.css'

const MeshBasicMaterial = () => {
  return (
    <Canvas>
      <mesh
        scale={1}
      >
        <torusGeometry args={[3, 1, 30, 30]}/>
        <meshBasicMaterial color='#00cec9' />
      </mesh>
    </Canvas>
  )
}

export const MeshBasicMaterialComponent = () => {
  return (
    <section className={styles.card}>
      <h2>MeshBasic Material</h2>
      <MeshBasicMaterial />
    </section>
  )
}
import { Canvas } from '@react-three/fiber'
import styles from '../../../styles/Home.module.css'

const MeshNormalMaterial = () => {
  return (
    <Canvas>
      <mesh
        scale={1}
      >
        <torusGeometry args={[3, 1, 30, 30]}/>
        <meshNormalMaterial flatShading />
      </mesh>
    </Canvas>
  )
}

export const MeshNormalMaterialComponent = () => {
  return (
    <section className={styles.card}>
      <h2>MeshNormal Material</h2>
      <MeshNormalMaterial />
    </section>
  )
}
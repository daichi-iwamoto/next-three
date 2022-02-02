import { Canvas } from '@react-three/fiber'
import styles from '../../../styles/Home.module.css'

const MeshStandardMaterial = () => {
  return (
    <Canvas>
      {/* color, intensity, distance, decay */}
      <pointLight position={[1, 10, 10]} />
      <mesh
        scale={1}
      >
        <torusGeometry args={[3, 1, 30, 30]}/>
        <meshStandardMaterial
          flatShading
          roughness={0}
          metalness={1}
        />
      </mesh>
    </Canvas>
  )
}

export const MeshStandardMaterialComponent = () => {
  return (
    <section className={styles.card}>
      <h2>MeshStandard Material</h2>
      <MeshStandardMaterial />
    </section>
  )
}
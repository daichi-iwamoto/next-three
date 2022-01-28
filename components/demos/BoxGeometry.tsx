import { Canvas } from '@react-three/fiber'
import styles from '../../styles/Home.module.css'

const BoxGeometry = () => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <mesh
        scale={1}
      >
        {/* boxGeometry args={[width, height, depth, widthSegments, heightSegments, depthSegments]} */}
        <boxGeometry args={[3, 3, 3]}/>
        <meshNormalMaterial />
      </mesh>
    </Canvas>
  )
}

export const BoxGeometryComponent = () => {
  return (
    <section className={styles.card}>
      <h2>Box Geometry</h2>
      <BoxGeometry />
    </section>
  )
}
import { Canvas } from '@react-three/fiber'
import styles from '../../styles/Home.module.css'

const PlaneGeometry = () => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <mesh
        scale={1}
      >
        {/* width, height, widthSegments, heightSegments */}
        <planeGeometry args={[3, 100, 100]} />
        <meshNormalMaterial />
      </mesh>
    </Canvas>
  )
}

export const PlaneGeometryComponent = () => {
  return (
    <section className={styles.card}>
      <h2>Plane Geometry</h2>
      <PlaneGeometry />
    </section>
  )
}
import { Canvas } from '@react-three/fiber'
import styles from '../../styles/Home.module.css'

const TorusGeometry = () => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <mesh
        scale={1}
      >
        {/* radius, tube, radialSegments, tubularSegments, arc) */}
        <torusGeometry args={[3, 1, 30, 30]}/>
        <meshNormalMaterial />
      </mesh>
    </Canvas>
  )
}

export const TorusGeometryComponent = () => {
  return (
    <section className={styles.card}>
      <h2>Torus Geometry</h2>
      <TorusGeometry />
    </section>
  )
}
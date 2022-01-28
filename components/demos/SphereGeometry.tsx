import { Canvas } from '@react-three/fiber'
import styles from '../../styles/Home.module.css'

const SphereGeometry = () => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <mesh
        scale={1}
      >
        {/* radius, widthSegments, heightSegments, phiStart, phiLength, thetaStart, thetaLength */}
        <sphereGeometry args={[3, 100, 100]} />
        <meshNormalMaterial />
      </mesh>
    </Canvas>
  )
}

export const SphereGeometryComponent = () => {
  return (
    <section className={styles.card}>
      <h2>Sphere Geometry</h2>
      <SphereGeometry />
    </section>
  )
}
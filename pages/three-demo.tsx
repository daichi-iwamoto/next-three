import styles from '../styles/Home.module.css'
import { BoxGeometryComponent } from '../components/demos/BoxGeometry'
import { SphereGeometryComponent } from '../components/demos/SphereGeometry'
import { PlaneGeometryComponent } from '../components/demos/PlaneGeometry'
import { TorusGeometryComponent } from '../components/demos/TorusGeometry'

const ThreeDemoPage = () => {
  return (
    <main className={styles.main}>
      <header>
        <h1 className={styles.title}>
          Three.js Demo Page
        </h1>
      </header>
        <BoxGeometryComponent />
        <SphereGeometryComponent />
        <PlaneGeometryComponent />
        <TorusGeometryComponent />
    </main>
  )
}

export default ThreeDemoPage;
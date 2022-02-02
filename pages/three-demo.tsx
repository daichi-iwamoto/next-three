import styles from '../styles/Home.module.css'
import { BoxGeometryComponent } from '../components/demos/geometry/BoxGeometry'
import { SphereGeometryComponent } from '../components/demos/geometry/SphereGeometry'
import { PlaneGeometryComponent } from '../components/demos/geometry/PlaneGeometry'
import { TorusGeometryComponent } from '../components/demos/geometry/TorusGeometry'

import { MeshBasicMaterialComponent } from '../components/demos/material/MeshBasicMaterial'
import { MeshNormalMaterialComponent } from '../components/demos/material/MeshNormalMaterial'
import { MeshStandardMaterialComponent } from '../components/demos/material/MeshStandardMaterial'

import { AnbientLightComponent } from '../components/demos/light/AnbientLight'

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

        <MeshBasicMaterialComponent />
        <MeshNormalMaterialComponent />
        <MeshStandardMaterialComponent />

        <AnbientLightComponent />
    </main>
  )
}

export default ThreeDemoPage;
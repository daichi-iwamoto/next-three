import { styles } from 'components/styles'
import { BoxGeometryComponent } from 'components/demos/geometry/BoxGeometry'
import { SphereGeometryComponent } from 'components/demos/geometry/SphereGeometry'
import { PlaneGeometryComponent } from 'components/demos/geometry/PlaneGeometry'
import { TorusGeometryComponent } from 'components/demos/geometry/TorusGeometry'

const ThreeDemoPage = () => {
  return (
    <main className={styles.main}>
      <header>
        <h1 className={styles.title}>
          Geomety Demo Page
        </h1>
      </header>
      <div className={styles.demosSec}>
        <BoxGeometryComponent />
        <SphereGeometryComponent />
        <PlaneGeometryComponent />
        <TorusGeometryComponent />
      </div>
    </main>
  )
}

export default ThreeDemoPage;
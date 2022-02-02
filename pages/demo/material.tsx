import { styles } from 'components/styles'
import { MeshBasicMaterialComponent } from 'components/demos/material/MeshBasicMaterial'
import { MeshNormalMaterialComponent } from 'components/demos/material/MeshNormalMaterial'
import { MeshStandardMaterialComponent } from 'components/demos/material/MeshStandardMaterial'

const ThreeDemoPage = () => {
  return (
    <main className={styles.main}>
      <header>
        <h1 className={styles.title}>
          Geomety Demo Page
        </h1>
      </header>
      <div className={styles.demosSec}>
        <MeshBasicMaterialComponent />
        <MeshNormalMaterialComponent />
        <MeshStandardMaterialComponent />
      </div>
    </main>
  )
}

export default ThreeDemoPage;
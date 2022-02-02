import { styles } from 'components/styles'
import { AnbientLightComponent } from 'components/demos/light/AnbientLight'
import { DirectionalLightComponent } from 'components/demos/light/DirectionalLight'
import { HemisphereLightComponent } from 'components/demos/light/HemisphereLight'
import { PointLightComponent } from 'components/demos/light/PointLight'
import { RectAreaLightComponent } from 'components/demos/light/RectAreaLight'
import { SpotLightComponent } from 'components/demos/light/SpotLight'

const ThreeDemoPage = () => {
  return (
    <main className={styles.main}>
      <header>
        <h1 className={styles.title}>
          Light Demo Page
        </h1>
      </header>
      <div className={styles.demosSec}>
        <AnbientLightComponent />
        <DirectionalLightComponent />
        <HemisphereLightComponent />
        <PointLightComponent />
        <RectAreaLightComponent />
        <SpotLightComponent />
      </div>
    </main>
  )
}

export default ThreeDemoPage;
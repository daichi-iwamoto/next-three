import Link from 'next/link'

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
        <Link　href="/">
          <a>&larr; 戻る</a>
        </Link>
        <h1 className={styles.title}>
          Light Demo Page
        </h1>
        <p>
          描画するオブジェクトを照らす<code>Light</code>のデモページです<br />
          ここで紹介している以外にも沢山のライトが指定できるので<br />
          そちらはThree.jsの<a href="https://threejs.org/docs/index.html#api/en/lights/AmbientLight">公式ドキュメント</a>で見てみて下さい
        </p>
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
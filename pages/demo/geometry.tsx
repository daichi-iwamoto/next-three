import Link from 'next/link'

import { styles } from 'components/styles'
import { BoxGeometryComponent } from 'components/demos/geometry/BoxGeometry'
import { SphereGeometryComponent } from 'components/demos/geometry/SphereGeometry'
import { PlaneGeometryComponent } from 'components/demos/geometry/PlaneGeometry'
import { TorusGeometryComponent } from 'components/demos/geometry/TorusGeometry'

const ThreeDemoPage = () => {
  return (
    <main className={styles.main}>
      <header>
        <Link　href="/">
          <a>&larr; 戻る</a>
        </Link>
        <h1 className={styles.title}>
          Geomety Demo Page
        </h1>
        <p>
          描画するオブジェクトの形を指定できる<code>Geometry</code>のデモページです<br />
          ここで紹介している以外にも沢山の形状が指定できるので<br />
          そちらはThree.jsの<a href="https://threejs.org/docs/index.html#api/en/geometries/BoxGeometry">公式ドキュメント</a>で見てみて下さい
        </p>
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
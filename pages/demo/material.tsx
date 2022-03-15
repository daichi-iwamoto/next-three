import Link from 'next/link'

import { styles } from 'components/styles'
import { MeshBasicMaterialComponent } from 'components/demos/material/MeshBasicMaterial'
import { MeshNormalMaterialComponent } from 'components/demos/material/MeshNormalMaterial'
import { MeshStandardMaterialComponent } from 'components/demos/material/MeshStandardMaterial'
import { MeshPhongMaterialComponent } from 'components/demos/material/MeshPhongMaterial'

const ThreeDemoPage = () => {
  return (
    <main className={styles.main}>
      <header>
        <Link　href="/">
          <a>&larr; 戻る</a>
        </Link>
        <h1 className={styles.title}>
          Material Demo Page
        </h1>
        <p>
          描画するオブジェクトの材質を指定できる<code>Material</code>のデモページです<br />
          ここで紹介している以外にも沢山の材質が指定できるので<br />
          そちらはThree.jsの<a href="https://threejs.org/docs/index.html#api/en/materials/MeshNormalMaterial">公式ドキュメント</a>で見てみて下さい
        </p>
      </header>
      <div className={styles.demosSec}>
        <MeshBasicMaterialComponent />
        <MeshNormalMaterialComponent />
        <MeshStandardMaterialComponent />
        <MeshPhongMaterialComponent />
      </div>
    </main>
  )
}

export default ThreeDemoPage;
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atelierCaveDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs'
import { Canvas } from '@react-three/fiber'
import { CameraController } from 'components/utils/orbit-controls'
import { Ground } from 'components/utils/ground'
import { styles } from 'components/styles'

const PointLight = () => {  
  return (
    <Canvas>
      <CameraController />
      <pointLight
        args={[
          '#6c5ce7',    // color: 光の色
          1,            // intensity: 光の強さ
          10,           // distance: 光の届く距離
          1,            // decay: 光の減衰量
        ]}
        position={[0, 5, 5]}
      />
      <mesh scale={1}>
        <torusGeometry args={[3, 1, 16, 100]}/>
        <meshPhongMaterial flatShading shininess={100} specular='#d63031' emissive='#000000' />
      </mesh>
      <Ground />
    </Canvas>
  )
}

export const PointLightComponent = () => {
  const codeString = `
  const PointLight = () => {  
    return (
      <Canvas>
        <CameraController />
        <pointLight
          args={[
            '#6c5ce7',    // color: 光の色
            1,            // intensity: 光の強さ
            10,           // distance: 光の届く距離
            1,            // decay: 光の減衰量
          ]}
          position={[0, 5, 5]}
        />
        <mesh scale={1}>
          <torusGeometry args={[3, 1, 16, 100]}/>
          <meshPhongMaterial flatShading shininess={100} specular='#d63031' emissive='#000000' />
        </mesh>
        <Ground />
      </Canvas>
    )
  }
  `

  return (
    <section className={styles.demoSec}>
      <h2>PointLight</h2>
      <div className={styles.demoContents}>
        <div className={styles.canvasBox}>
          <PointLight />
        </div>
        <SyntaxHighlighter className={styles.demoCode} language="javascript" style={atelierCaveDark}>
          {codeString}
        </SyntaxHighlighter>
      </div>
      <div className={styles.demoMemo}>
        <p>
          豆電球の様なイメージの光源<br />
          デフォルトでは原点に設置されるためポジションを変更して使用する事が多い
        </p>
      </div>
    </section>
  )
}
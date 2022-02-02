import SyntaxHighlighter from 'react-syntax-highlighter'
import { atelierCaveDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs'
import { Canvas } from '@react-three/fiber'
import { CameraController } from 'components/utils/orbit-controls'
import { Ground } from 'components/utils/ground'
import { styles } from 'components/styles'

const RectAreaLight = () => {  
  return (
    <Canvas>
      <CameraController />
      <rectAreaLight
        args={[
          '#6c5ce7',   // color: 光の色
          3,           // intensity: 光の強さ
          3,           // width: ライトの横幅
          3,           // height: ライトの縦幅
        ]}
        position={[0, -3, 3]}
      />
      <mesh scale={1}>
        <torusGeometry args={[3, 1, 16, 100]}/>
        <meshStandardMaterial flatShading />
      </mesh>
      <Ground />
    </Canvas>
  )
}

export const RectAreaLightComponent = () => {
  const codeString = `
  const RectAreaLight = () => {  
    return (
      <Canvas>
        <CameraController />
        <rectAreaLight
          args={[
            '#6c5ce7',   // color: 光の色
            3,           // intensity: 光の強さ
            3,           // width: ライトの横幅
            3,           // height: ライトの縦幅
          ]}
          position={[0, -3, 3]}
        />
        <mesh scale={1}>
          <torusGeometry args={[3, 1, 16, 100]}/>
          <meshStandardMaterial flatShading />
        </mesh>
        <Ground />
      </Canvas>
    )
  }  
  `

  return (
    <section className={styles.demoSec}>
      <h2>RectAreaLight</h2>
      <div className={styles.demoContents}>
        <div className={styles.canvasBox}>
          <RectAreaLight />
        </div>
        <SyntaxHighlighter className={styles.demoCode} language="javascript" style={atelierCaveDark}>
          {codeString}
        </SyntaxHighlighter>
      </div>
      <div className={styles.demoMemo}>
        <p>
          単一方向を照らす四角形のライト<br />
          <code>MeshStandardMaterial</code>か<code>MeshPhysicalMaterial</code>にしか使えない
        </p>
      </div>
    </section>
  )
}
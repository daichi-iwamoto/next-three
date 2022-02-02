import SyntaxHighlighter from 'react-syntax-highlighter'
import { atelierCaveDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs'
import { Canvas } from '@react-three/fiber'
import { CameraController } from 'components/utils/orbit-controls'
import { Ground } from 'components/utils/ground'
import { styles } from 'components/styles'

const SpotLight = () => {  
  return (
    <Canvas>
      <CameraController />
      <spotLight
        args={[
          '#6c5ce7',        // color: 光の色
          3,                // intensity: 光の強さ
          10,               // distance: 光の届く距離
          Math.PI * 0.35,    // angle: 光の広がり具合の角度
          0.3,              // penumbra: 光で照らしている部分の輪郭
          1,                // decay: 光の減衰量
        ]}
        position={[0, -3, 5]}
      />
      <mesh scale={1}>
        <torusGeometry args={[3, 1, 16, 100]}/>
        <meshStandardMaterial flatShading />
      </mesh>
      <Ground />
    </Canvas>
  )
}

export const SpotLightComponent = () => {
  const codeString = `
  const SpotLight = () => {  
    return (
      <Canvas>
        <CameraController />
        <spotLight
          args={[
            '#6c5ce7',        // color: 光の色
            3,                // intensity: 光の強さ
            10,               // distance: 光の届く距離
            Math.PI * 0.35,    // angle: 光の広がり具合の角度
            0.3,              // penumbra: 光で照らしている部分の輪郭
            1,                // decay: 光の減衰量
          ]}
          position={[0, -3, 5]}
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
      <h2>SpotLight</h2>
      <div className={styles.demoContents}>
        <div className={styles.canvasBox}>
          <SpotLight />
        </div>
        <SyntaxHighlighter className={styles.demoCode} language="javascript" style={atelierCaveDark}>
          {codeString}
        </SyntaxHighlighter>
      </div>
      <div className={styles.demoMemo}>
        <p>
          単一方向を照らす円形のライト<br />
          懐中電灯のイメージ
        </p>
      </div>
    </section>
  )
}
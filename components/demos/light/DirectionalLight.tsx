import SyntaxHighlighter from 'react-syntax-highlighter'
import { atelierCaveDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs'
import { Canvas } from '@react-three/fiber'
import { CameraController } from 'components/utils/orbit-controls'
import { Ground } from 'components/utils/ground'
import { styles } from 'components/styles'

const DirectionalLight = () => {  
  return (
    <Canvas>
      <CameraController />
      <ambientLight intensity={0.2} />
      <directionalLight
        intensity={1}
        color='#d63031'
      />
      <mesh scale={1}>
        <torusGeometry args={[3, 1, 16, 100]}/>
        <meshPhongMaterial flatShading shininess={100} specular='#d63031' emissive='#000000' />
      </mesh>
      <Ground />
    </Canvas>
  )
}

export const DirectionalLightComponent = () => {
  const codeString = `
  const DirectionalLight = () => {  
    return (
      <Canvas>
        <CameraController />
        <ambientLight intensity={0.2} />
        <directionalLight
          intensity={1}
          color='#d63031'
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
      <h2>DirectionalLight</h2>
      <div className={styles.demoContents}>
        <div className={styles.canvasBox}>
          <DirectionalLight />
        </div>
        <SyntaxHighlighter className={styles.demoCode} language="javascript" style={atelierCaveDark}>
          {codeString}
        </SyntaxHighlighter>
      </div>
      <div className={styles.demoMemo}>
        <p>
          平行光源<br />
          めちゃくちゃ遠くから当たっている光、現実世界での太陽のようなイメージ<br />
          デフォルトでは真上から光が当たるが、真下からみた場合真っ黒になってしまうので<br />
          <code>anbientLight</code>と併用する事が多い
        </p>
      </div>
    </section>
  )
}
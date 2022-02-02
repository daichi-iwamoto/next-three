import SyntaxHighlighter from 'react-syntax-highlighter'
import { atelierCaveDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs'
import { Canvas } from '@react-three/fiber'
import { CameraController } from 'components/utils/orbit-controls'
import { Ground } from 'components/utils/ground'
import { styles } from 'components/styles'

const HemisphereLight = () => {  
  return (
    <Canvas>
      <CameraController />
      <hemisphereLight
        args={[
          '#ffeaa7',    // 光が当たっている箇所の色
          '#6c5ce7',    // 光が当たっていない箇所の色
          1             // 光の強さ
        ]}
      />
      <mesh scale={1}>
        <torusGeometry args={[3, 1, 16, 100]}/>
        <meshPhongMaterial flatShading shininess={100} specular='#d63031' emissive='#000000' />
      </mesh>
      <Ground />
    </Canvas>
  )
}

export const HemisphereLightComponent = () => {
  const codeString = `
  const HemisphereLight = () => {  
    return (
      <Canvas>
        <CameraController />
        <hemisphereLight
          args={[
            '#ffeaa7',    // 光が当たっている箇所の色
            '#6c5ce7',    // 光が当たっていない箇所の色
            1             // 光の強さ
          ]}
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
      <h2>HemisphereLight</h2>
      <div className={styles.demoContents}>
        <div className={styles.canvasBox}>
          <HemisphereLight />
        </div>
        <SyntaxHighlighter className={styles.demoCode} language="javascript" style={atelierCaveDark}>
          {codeString}
        </SyntaxHighlighter>
      </div>
      <div className={styles.demoMemo}>
        <p>
          光が当たっている場所と当たっていない場所の色指定ができるライト
        </p>
      </div>
    </section>
  )
}
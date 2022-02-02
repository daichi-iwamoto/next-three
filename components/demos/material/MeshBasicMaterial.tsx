import SyntaxHighlighter from 'react-syntax-highlighter'
import { atelierCaveDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs'
import { Canvas } from '@react-three/fiber'

import { CameraController } from 'components/utils/orbit-controls'
import { styles } from 'components/styles'

const MeshBasicMaterial = () => {
  return (
    <Canvas>
      <CameraController />
      <mesh scale={1}>
        <torusGeometry args={[3, 1, 16, 100]}/>
        <meshBasicMaterial
          color='#049ef4'
          // wireframe
        />
      </mesh>
    </Canvas>
  )
}

export const MeshBasicMaterialComponent = () => {
  const codeString = `
  const MeshBasicMaterial = () => {
    return (
      <Canvas>
        <CameraController />
        <mesh scale={1}>
          <torusGeometry args={[3, 1, 16, 100]}/>
          <meshBasicMaterial
            color='#049ef4'
            // wireframe
          />
        </mesh>
      </Canvas>
    )
  }  
  `

  return (
    <section className={styles.demoSec}>
      <h2>MeshBasicMaterial</h2>
      <div className={styles.demoContents}>
        <div className={styles.canvasBox}>
          <MeshBasicMaterial />
        </div>
        <SyntaxHighlighter className={styles.demoCode} language="javascript" style={atelierCaveDark}>
          {codeString}
        </SyntaxHighlighter>
      </div>
      <div className={styles.demoMemo}>
        <p>
          光源を必要としないマテリアル<br />
          テクスチャをつける事ができたりワイヤーフレームを表示したりできる。
        </p>
      </div>
    </section>
  )
}
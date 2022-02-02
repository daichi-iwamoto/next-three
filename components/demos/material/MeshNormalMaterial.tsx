import SyntaxHighlighter from 'react-syntax-highlighter'
import { atelierCaveDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs'
import { Canvas } from '@react-three/fiber'

import { CameraController } from 'components/utils/orbit-controls'
import { styles } from 'components/styles'

const MeshNormalMaterial = () => {
  return (
    <Canvas>
      <CameraController />
      <mesh scale={1}>
        <torusGeometry args={[3, 1, 16, 100]}/>
        <meshNormalMaterial
          flatShading
        />
      </mesh>
    </Canvas>
  )
}

export const MeshNormalMaterialComponent = () => {
  const codeString = `
  const MeshNormalMaterial = () => {
    return (
      <Canvas>
        <CameraController />
        <mesh scale={1}>
          <torusGeometry args={[3, 1, 16, 100]}/>
          <meshNormalMaterial
            flatShading
          />
        </mesh>
      </Canvas>
    )
  }
  `

  return (
    <section className={styles.demoSec}>
      <h2>MeshNormalMaterial</h2>
      <div className={styles.demoContents}>
        <div className={styles.canvasBox}>
          <MeshNormalMaterial />
        </div>
        <SyntaxHighlighter className={styles.demoCode} language="javascript" style={atelierCaveDark}>
          {codeString}
        </SyntaxHighlighter>
      </div>
      <div className={styles.demoMemo}>
        <p>
          こちらも光源を必要としないマテリアル<br />
          面を表現したりワイヤーフレームを表示したりできる。
        </p>
      </div>
    </section>
  )
}
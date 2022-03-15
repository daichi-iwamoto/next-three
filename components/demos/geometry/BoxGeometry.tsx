import SyntaxHighlighter from 'react-syntax-highlighter'
import { atelierCaveDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs'
import { Canvas } from '@react-three/fiber'

import { styles } from 'components/styles'
import { CameraController } from 'components/utils/orbit-controls'

const BoxGeometry = () => {
  return (
    <Canvas>
      <CameraController />
      <mesh scale={1}>
        <boxGeometry
          args={[
            3,    // width
            3,    // height
            3,    // depth
            1,    // widthSegments
            1,    // heightSegments
            1     // depthSegments
          ]}
        />
        <meshNormalMaterial />
      </mesh>
    </Canvas>
  )
}

export const BoxGeometryComponent = () => {
  const codeString = `
  const BoxGeometry = () => {
    return (
      <Canvas>
        <CameraController />
        <mesh scale={1}>
          <boxGeometry
            args={[
              3,    // width
              3,    // height
              3,    // depth
              1,    // widthSegments
              1,    // heightSegments
              1     // depthSegments
            ]}
          />
          <meshNormalMaterial />
        </mesh>
      </Canvas>
    )
  }
  `

  return (
    <section className={styles.demoSec}>
      <h2>Box Geometry</h2>
      <div className={styles.demoContents}>
        <div className={styles.canvasBox}>
          <BoxGeometry />
        </div>
        <SyntaxHighlighter className={styles.demoCode} language="javascript" style={atelierCaveDark}>
          {codeString}
        </SyntaxHighlighter>
      </div>
      <div className={styles.demoMemo}>
        <p>
          その名の通り立方体を指定するジオメトリです<br />
          オプションで指定できる<code>Segments</code>は面の粒度の様なもので<br />
          <code>BoxGeometry</code>は面で構成されているので、基本的に1でOKです
        </p>
      </div>
    </section>
  )
}
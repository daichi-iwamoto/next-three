import SyntaxHighlighter from 'react-syntax-highlighter'
import { atelierCaveDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

import { styles } from 'components/styles'
import { Canvas } from '@react-three/fiber'

const BoxGeometry = () => {
  return (
    <Canvas>
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
          <code>Segments</code>は面の粒度の様なもの<br />
          BoxGeometryは面で構成されているので、基本的に1でOK
        </p>
      </div>
    </section>
  )
}
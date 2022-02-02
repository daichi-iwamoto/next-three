import SyntaxHighlighter from 'react-syntax-highlighter'
import { atelierCaveDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

import { styles } from 'components/styles'
import { Canvas } from '@react-three/fiber'

const PlaneGeometry = () => {
  return (
    <Canvas>
      <mesh scale={1}>
        <planeGeometry
          args={[
            3,    // width
            3,    // height
            1,    // widthSegments
            1,    // heightSegments
          ]}
        />
        <meshNormalMaterial />
      </mesh>
    </Canvas>
  )
}


export const PlaneGeometryComponent = () => {
  const codeString = `
  const PlaneGeometry = () => {
    return (
      <Canvas>
        <mesh scale={1}>
          <planeGeometry
            args={[
              3,    // width
              3,    // height
              1,    // widthSegments
              1,    // heightSegments
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
      <h2>Plane Geometry</h2>
      <div className={styles.demoContents}>
        <div className={styles.canvasBox}>
          <PlaneGeometry />
        </div>
        <SyntaxHighlighter className={styles.demoCode} language="javascript" style={atelierCaveDark}>
          {codeString}
        </SyntaxHighlighter>
      </div>
      <div className={styles.demoMemo}>
        <p>
          平面のジオメトリ、BoxGeometryとほぼ一緒、<code>Segments</code>は1でおk
        </p>
      </div>
    </section>
  )
}
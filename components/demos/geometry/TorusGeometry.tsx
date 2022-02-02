import SyntaxHighlighter from 'react-syntax-highlighter'
import { atelierCaveDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

import { styles } from 'components/styles'
import { Canvas } from '@react-three/fiber'

const TorusGeometry = () => {
  return (
    <Canvas>
      <mesh scale={1}>
        <torusGeometry
          args={[
            3,                    // radius
            1,                    // tube
            16,                   // radialSegments
            100,                  // tubularSegments
            6.283185307179586,    // arc
          ]}
        />
        <meshNormalMaterial />
      </mesh>
    </Canvas>
  )
}

export const TorusGeometryComponent = () => {
  const codeString = `
  const TorusGeometry = () => {
    return (
      <Canvas>
        <mesh scale={1}>
          <torusGeometry
            args={[
              3,                    // radius
              1,                    // tube
              16,                   // radialSegments
              100,                  // tubularSegments
              6.283185307179586,    // arc
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
      <h2>Torus Geometry</h2>
      <div className={styles.demoContents}>
        <div className={styles.canvasBox}>
          <TorusGeometry />
        </div>
        <SyntaxHighlighter className={styles.demoCode} language="javascript" style={atelierCaveDark}>
          {codeString}
        </SyntaxHighlighter>
      </div>
      <div className={styles.demoMemo}>
        <p>
          なんかデフォルト値で小数点つく様な値は基本触らなくてよいよ
        </p>
      </div>
    </section>
  )
}
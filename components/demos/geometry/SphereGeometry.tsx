import SyntaxHighlighter from 'react-syntax-highlighter'
import { atelierCaveDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs'
import { Canvas } from '@react-three/fiber'

import { CameraController } from 'components/utils/orbit-controls'
import { styles } from 'components/styles'

const SphereGeometry = () => {
  return (
    <Canvas>
      <CameraController />
      <mesh scale={1}>
        <sphereGeometry
          args={[
            3,                      // radius
            32,                     // widthSegments
            16,                     // heightSegments
            0,                      // phiStart
            6.283185307179586,      // phiLength
            0,                      // thetaStart
            3.141592653589793,      // thetaLength
          ]}
        />
        <meshNormalMaterial />
      </mesh>
    </Canvas>
  )
}

export const SphereGeometryComponent = () => {
  const codeString = `
  const SphereGeometry = () => {
    return (
      <Canvas>
        <CameraController />
        <mesh scale={1}>
          <sphereGeometry
            args={[
              3,                      // radius
              32,                     // widthSegments
              16,                     // heightSegments
              0,                      // phiStart
              6.283185307179586,      // phiLength
              0,                      // thetaStart
              3.141592653589793,      // thetaLength
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
      <h2>Sphere Geometry</h2>
      <div className={styles.demoContents}>
        <div className={styles.canvasBox}>
          <SphereGeometry />
        </div>
        <SyntaxHighlighter className={styles.demoCode} language="javascript" style={atelierCaveDark}>
          {codeString}
        </SyntaxHighlighter>
      </div>
      <div className={styles.demoMemo}>
        <p>
          球体を指定するジオメトリです<br />
          基本的には上3つのプロパティ以外は指定しないかもしれませんが<br />
          <code>Start</code>の位置や<code>Length</code>を変える事で、半球を指定したりもできます<br />
          面の粒度を表す<code>widthSegments</code>の最大値は<code>64</code>、<code>heightSegments</code>の最大値は<code>32</code>になっています
        </p>
      </div>
    </section>
  )
}
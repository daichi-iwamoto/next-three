import SyntaxHighlighter from 'react-syntax-highlighter'
import { atelierCaveDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs'
import { Canvas } from '@react-three/fiber'
import { CameraController } from 'components/utils/orbit-controls'
import { styles } from 'components/styles'

const MeshPhongMaterial = () => {  
  return (
    <Canvas>
      <CameraController />
      <ambientLight intensity={0.7} />
      <pointLight intensity={1} position={[5, 5, 5]} />
      <mesh scale={1}>
        <torusGeometry args={[3, 1, 16, 100]}/>
        <meshPhongMaterial
          flatShading
          shininess={100}
          specular='#d63031'    // 光の反射の色
          emissive='#000000'    // 光によってできる影の色
        />
      </mesh>
    </Canvas>
  )
}

export const MeshPhongMaterialComponent = () => {
  const codeString = `
  const MeshPhongMaterial = () => {  
    return (
      <Canvas>
        <CameraController />
        <ambientLight intensity={0.7} />
        <pointLight intensity={1} position={[5, 5, 5]} />
        <mesh scale={1}>
          <torusGeometry args={[3, 1, 16, 100]}/>
          <meshPhongMaterial
            flatShading
            shininess={100}
            specular='#d63031'    // 光の反射の色
            emissive='#000000'    // 光によってできる影の色
          />
        </mesh>
      </Canvas>
    )
  }
  `

  return (
    <section className={styles.demoSec}>
      <h2>MeshPhongMaterial</h2>
      <div className={styles.demoContents}>
        <div className={styles.canvasBox}>
          <MeshPhongMaterial />
        </div>
        <SyntaxHighlighter className={styles.demoCode} language="javascript" style={atelierCaveDark}>
          {codeString}
        </SyntaxHighlighter>
      </div>
      <div className={styles.demoMemo}>
        <p>
          物理ベースレンダリングで、光源を必要とするマテリアル<br />
          光の反射率や、反射の色等を指定することができます
        </p>
      </div>
    </section>
  )
}
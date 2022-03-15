import SyntaxHighlighter from 'react-syntax-highlighter'
import { atelierCaveDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs'
import { Canvas } from '@react-three/fiber'
import { CameraController } from 'components/utils/orbit-controls'
import { styles } from 'components/styles'

const MeshStandardMaterial = () => {  
  return (
    <Canvas>
      <CameraController />
      <ambientLight intensity={0.7} />
      <pointLight intensity={1} position={[5, 5, 5]} />
      <mesh scale={1}>
        <torusGeometry args={[3, 1, 16, 100]}/>
        <meshStandardMaterial
          color='#049ef4'     // ジオメトリの色
          roughness={0.2}     // 粗さ
          metalness={0.8}     // 金属質
        />
      </mesh>
    </Canvas>
  )
}

export const MeshStandardMaterialComponent = () => {
  const codeString = `
  const MeshStandardMaterial = () => {  
    return (
      <Canvas>
        <CameraController />
        <ambientLight intensity={0.7} />
        <pointLight intensity={1} position={[5, 5, 5]} />
        <mesh scale={1}>
          <torusGeometry args={[3, 1, 16, 100]}/>
          <meshStandardMaterial
            color='#049ef4'     // ジオメトリの色
            roughness={0.2}     // 粗さ
            metalness={0.8}     // 金属性
          />
        </mesh>
      </Canvas>
    )
  }
  `

  return (
    <section className={styles.demoSec}>
      <h2>MeshStandardMaterial</h2>
      <div className={styles.demoContents}>
        <div className={styles.canvasBox}>
          <MeshStandardMaterial />
        </div>
        <SyntaxHighlighter className={styles.demoCode} language="javascript" style={atelierCaveDark}>
          {codeString}
        </SyntaxHighlighter>
      </div>
      <div className={styles.demoMemo}>
        <p>
          物理ベースレンダリングで、光源を必要とするマテリアル<br />
          <code>roughness</code>は粗さを表し、1に近づくほどのっぺりとなります<br />
          <code>metalness</code>は金属性を表し、1に近づくほど金属っぽくなります
        </p>
      </div>
    </section>
  )
}
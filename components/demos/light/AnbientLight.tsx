import SyntaxHighlighter from 'react-syntax-highlighter'
import { atelierCaveDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs'
import { Canvas } from '@react-three/fiber'
import { CameraController } from 'components/utils/orbit-controls'
import { Ground } from 'components/utils/ground'
import { styles } from 'components/styles'

const AnbientLight = () => {  
  return (
    <Canvas>
      <CameraController />
      <ambientLight
        intensity={1}
      />
      <mesh scale={1}>
        <torusGeometry args={[3, 1, 16, 100]}/>
        <meshPhongMaterial flatShading shininess={100} specular='#d63031' emissive='#000000' />
      </mesh>
      <Ground />
    </Canvas>
  )
}

export const AnbientLightComponent = () => {
  const codeString = `
  const AnbientLight = () => {  
    return (
      <Canvas>
        <CameraController />
        <ambientLight
          intensity={1}
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
      <h2>AnbientLight</h2>
      <div className={styles.demoContents}>
        <div className={styles.canvasBox}>
          <AnbientLight />
        </div>
        <SyntaxHighlighter className={styles.demoCode} language="javascript" style={atelierCaveDark}>
          {codeString}
        </SyntaxHighlighter>
      </div>
      <div className={styles.demoMemo}>
        <p>
          均一にジオメトリを照らすライト<br />
          均一なので影や反射がつきません
        </p>
      </div>
    </section>
  )
}
export const Ground = () => {
  return (
    <mesh scale={1} rotation-x={Math.PI * -0.5} position={[0, -3.5, 0]}>
    <planeGeometry
      args={[100, 100, 1, 1]}
    />
    <meshStandardMaterial flatShading />
  </mesh>
  )
}
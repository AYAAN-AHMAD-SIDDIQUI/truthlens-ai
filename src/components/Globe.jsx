import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function Earth() {
  return (
    <mesh rotation={[0.4, 0.2, 0]}>
      <sphereGeometry args={[2, 64, 64]} />
      <meshStandardMaterial color="#4F46E5" wireframe />
    </mesh>
  );
}

function Globe() {
  return (
    <Canvas camera={{ position: [0, 0, 6] }}>
      <ambientLight intensity={2} />
      <directionalLight position={[5, 5, 5]} />

      <Earth />

      <OrbitControls
        enableZoom={false}
        autoRotate
        autoRotateSpeed={1.5}
      />
    </Canvas>
  );
}

export default Globe;
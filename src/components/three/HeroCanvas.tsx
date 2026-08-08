import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Icosahedron, TorusKnot, Float, MeshDistortMaterial } from "@react-three/drei";
import type { Group } from "three";

function Cluster({ reduced }: { reduced: boolean }) {
  const group = useRef<Group>(null);

  useFrame((state, delta) => {
    if (!group.current || reduced) return;
    group.current.rotation.y += delta * 0.18;
    group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.12;
  });

  return (
    <group ref={group}>
      <Icosahedron args={[1.55, 4]}>
        <MeshDistortMaterial
          color="#00d4e0"
          distort={reduced ? 0 : 0.32}
          speed={1.4}
          roughness={0.15}
          metalness={0.7}
        />
      </Icosahedron>

      <Icosahedron args={[2.35, 1]}>
        <meshBasicMaterial color="#00d4e0" wireframe transparent opacity={0.22} />
      </Icosahedron>

      <Float speed={reduced ? 0 : 1.5} rotationIntensity={0.6} floatIntensity={1.2}>
        <TorusKnot args={[0.34, 0.11, 96, 16]} position={[2.6, 1.15, -0.6]}>
          <meshStandardMaterial color="#e6edf3" roughness={0.25} metalness={0.8} />
        </TorusKnot>
      </Float>

      <Float speed={reduced ? 0 : 1.1} rotationIntensity={0.8} floatIntensity={1.6}>
        <mesh position={[-2.7, -1.2, 0.4]} rotation={[0.6, 0.4, 0]}>
          <boxGeometry args={[0.55, 0.55, 0.55]} />
          <meshStandardMaterial color="#1b2430" roughness={0.3} metalness={0.6} />
        </mesh>
      </Float>

      <Float speed={reduced ? 0 : 1.8} rotationIntensity={0.4} floatIntensity={1}>
        <mesh position={[2.1, -1.7, 0.8]}>
          <octahedronGeometry args={[0.36, 0]} />
          <meshStandardMaterial color="#00d4e0" roughness={0.2} metalness={0.9} />
        </mesh>
      </Float>
    </group>
  );
}

export default function HeroCanvas({ reduced = false }: { reduced?: boolean }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 6.4], fov: 45 }}
      dpr={[1, 1.6]}
      frameloop={reduced ? "demand" : "always"}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <ambientLight intensity={0.55} />
      <directionalLight position={[4, 5, 5]} intensity={1.6} color="#e6edf3" />
      <pointLight position={[-5, -3, 2]} intensity={40} color="#00d4e0" distance={16} />
      <Cluster reduced={reduced} />
    </Canvas>
  );
}

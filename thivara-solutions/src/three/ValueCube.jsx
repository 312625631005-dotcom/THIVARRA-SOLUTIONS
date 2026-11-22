import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function RotatingCube() {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01 * delta * 60;
      meshRef.current.rotation.x += 0.006 * delta * 60;
    }
  });

  const faces = [
    { color: '#6366f1', text: 'Innovation' },
    { color: '#10b981', text: 'Quality' },
    { color: '#f59e0b', text: 'Partnership' },
    { color: '#ec4899', text: 'Growth' },
    { color: '#06b6d4', text: 'Trust' },
    { color: '#a855f7', text: 'Excellence' },
  ];

  return (
    <group ref={meshRef} castShadow receiveShadow>
      {faces.map((face, i) => (
        <mesh
          key={i}
          geometry={new THREE.BoxGeometry(1.7, 1.7, 0.05)}
          material={new THREE.MeshStandardMaterial({
            color: face.color,
            metalness: 0.3,
            roughness: 0.4,
            side: THREE.DoubleSide,
          })}
        />
      ))}
    </group>
  );
}

export default function ValueCube() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <Canvas
        shadows
        camera={{ position: [4, 4, 6], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ width: '100%', height: '100%', display: 'block', borderRadius: '1.5rem' }}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={2} castShadow />
        <pointLight position={[-5, 0, 5]} intensity={1} color="#6366f1" />
        <pointLight position={[5, -5, 5]} intensity={1} color="#10b981" />
        <RotatingCube />
      </Canvas>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-slate-500 font-medium tracking-widest uppercase opacity-60">
        Core Values
      </div>
    </div>
  );
}
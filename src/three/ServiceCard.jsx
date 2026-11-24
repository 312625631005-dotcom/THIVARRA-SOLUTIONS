import React, { useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function AnimatedCard() {
  const meshRef = React.useRef();
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      const targetRotationX = hovered ? 0.15 : 0;
      const targetRotationY = hovered ? 0.15 : 0;
      meshRef.current.rotation.x += (targetRotationX - meshRef.current.rotation.x) * 0.1;
      meshRef.current.rotation.y += (targetRotationY - meshRef.current.rotation.y) * 0.1;
    }
  });

  return (
    <mesh
      ref={meshRef}
      castShadow
      receiveShadow
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      style={{ cursor: 'pointer' }}
    >
      <boxGeometry args={[2.4, 3.2, 0.4]} />
      <meshStandardMaterial color="#ffffff" metalness={0.4} roughness={0.35} envMapIntensity={1.5} />
    </mesh>
  );
}

export default function ServiceCard({ title, desc, gradient }) {
  const getColors = (grad) => {
    const map = {
      'indigo-500': '#6366F1',
      'blue-500': '#3B82F6',
      'emerald-400': '#34D399',
      'teal-500': '#14B8A6',
      'purple-500': '#A855F7',
      'pink-500': '#EC4899',
      'blue-400': '#60A5FA',
      'cyan-500': '#06B6D4',
      'rose-400': '#FB7185',
      'orange-500': '#F97316',
      'emerald-500': '#10B981',
      'green-600': '#16A34A',
    };
    const fromMatch = grad.match(/from-([\w-]+)/);
    const toMatch = grad.match(/to-([\w-]+)/);
    return [map[fromMatch?.[1] || 'indigo-500'], map[toMatch?.[1] || 'blue-500']];
  };

  const [colorA, colorB] = getColors(gradient);

  return (
    <div className="relative w-full h-[420px] perspective-1000">
      <Canvas
        shadows
        camera={{ position: [0, 0, 5], fov: 40 }}
        gl={{ antialias: true, alpha: true, premultipliedAlpha: false }}
        style={{
          width: '100%',
          height: '100%',
          display: 'block',
          borderRadius: '1.5rem',
          overflow: 'hidden',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
        }}
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 10, 7]} intensity={1.5} castShadow />
        <AnimatedCard />
        <mesh position={[0, 0, -0.21]}>
          <boxGeometry args={[2.4, 3.2, 0.02]} />
          <meshStandardMaterial
            color={colorA}
            emissive={colorB}
            emissiveIntensity={0.5}
            side={THREE.BackSide}
          />
        </mesh>
      </Canvas>

      <div className="absolute -inset-0.5 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-[1.5rem] blur opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      <div className="absolute bottom-0 left-0 w-full p-8 z-10">
        <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center mb-6 text-indigo-400">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-sm text-slate-400 leading-relaxed max-w-[240px]">{desc}</p>
      </div>
    </div>
  );
}
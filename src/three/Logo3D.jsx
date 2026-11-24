import React, { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

/**
 * Keeps the square logo inside the canvas on narrow screens.
 * The logo plane is 4x4 world units, so we scale it to the smaller viewport axis.
 */
function FitToViewport({ children }) {
  const { viewport } = useThree();
  const scale = Math.min(1, viewport.width / 4.3, viewport.height / 4.3);
  return <group scale={scale}>{children}</group>;
}

function LogoMesh() {
  const group = useRef();
  const [texture, setTexture] = useState(null);

  useEffect(() => {
    let disposed = false;
    const loader = new THREE.TextureLoader();
    loader.load(
      '/logo.webp',
      (tex) => {
        if (disposed) {
          tex.dispose();
          return;
        }
        tex.colorSpace = THREE.SRGBColorSpace;
        tex.anisotropy = 8;
        setTexture(tex);
      },
      undefined,
      (err) => console.error('Logo texture failed to load', err)
    );
    return () => {
      disposed = true;
    };
  }, []);

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.getElapsedTime();
    const pointer = state.pointer;

    // Tilt toward the cursor (like the original CSS logo), never spin edge-on.
    const targetY = pointer.x * 0.35 + Math.sin(t * 0.45) * 0.05;
    const targetX = -pointer.y * 0.22;

    group.current.rotation.y += (targetY - group.current.rotation.y) * 0.06;
    group.current.rotation.x += (targetX - group.current.rotation.x) * 0.06;
    group.current.rotation.z = Math.sin(t * 0.6) * 0.012;
    group.current.position.y = Math.sin(t * 0.9) * 0.09;
  });

  return (
    <group ref={group}>
      {/* Soft blue halo behind the mark */}
      <mesh position={[0, 0.35, -0.2]}>
        <circleGeometry args={[1.55, 64]} />
        <meshBasicMaterial color="#1E5BFF" transparent opacity={0.14} depthWrite={false} />
      </mesh>
      <mesh position={[0, 0.35, -0.19]}>
        <ringGeometry args={[1.55, 1.58, 96]} />
        <meshBasicMaterial color="#22C7FF" transparent opacity={0.35} depthWrite={false} />
      </mesh>

      {texture && (
        <mesh>
          <planeGeometry args={[4, 4]} />
          <meshBasicMaterial
            map={texture}
            transparent
            toneMapped={false}
            side={THREE.DoubleSide}
            depthWrite={false}
          />
        </mesh>
      )}
    </group>
  );
}

export default function Logo3D({ className }) {
  return (
    <div className={`relative w-full h-[420px] sm:h-[480px] lg:h-[clamp(420px,56vh,600px)] ${className || ''}`}>
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 6], fov: 40 }}
        gl={{ antialias: true, alpha: true }}
        style={{ width: '100%', height: '100%', display: 'block', background: 'transparent' }}
      >
        <ambientLight intensity={1} />
        <FitToViewport>
          <LogoMesh />
        </FitToViewport>
      </Canvas>
    </div>
  );
}

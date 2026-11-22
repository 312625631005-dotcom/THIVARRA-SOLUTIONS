import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

export default function Particles({ className, particleCount = 150, speed = 0.3 }) {
  const containerRef = useRef(null);
  let renderer = null;
  let animationId = null;
  let scene, camera, particles, geometry;

  useEffect(() => {
    if (!containerRef.current) return;

    try {
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.z = 1;

      geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(particleCount * 3);
      const colors = new Float32Array(particleCount * 3);

      const color1 = new THREE.Color('#1E5BFF');
      const color2 = new THREE.Color('#22C7FF');
      const color3 = new THREE.Color('#E6E9EF');

      for (let i = 0; i < particleCount; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 8;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 8;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 8;

        const r = Math.random();
        const c = r < 0.25 ? color1 : r < 0.5 ? color2 : color3;
        colors[i * 3] = c.r;
        colors[i * 3 + 1] = c.g;
        colors[i * 3 + 2] = c.b;
      }

      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

      const material = new THREE.PointsMaterial({
        size: 0.02,
        vertexColors: true,
        transparent: true,
        opacity: 0.6,
        sizeAttenuation: true,
      });

      particles = new THREE.Points(geometry, material);
      scene.add(particles);

      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false, powerPreference: 'low-power' });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
      containerRef.current.appendChild(renderer.domElement);

      const mouseRef = { x: 0, y: 0 };

      const handleMove = (e) => {
        mouseRef.x = (e.clientX / window.innerWidth) * 2 - 1;
        mouseRef.y = (e.clientY / window.innerHeight) * 2 - 1;
      };

      window.addEventListener('mousemove', handleMove, { passive: true });

      let running = true;
      const el = containerRef.current;
      const io = new IntersectionObserver(([entry]) => {
        const next = entry.isIntersecting && !document.hidden;
        if (next && !running) { running = true; animate(); }
        else if (!next) { running = false; cancelAnimationFrame(animationId); }
      });
      io.observe(el);
      const onVis = () => {
        if (document.hidden) { running = false; cancelAnimationFrame(animationId); }
        else if (!running) { running = true; animate(); }
      };
      document.addEventListener('visibilitychange', onVis);

      function animate() {
        if (!running) return;
        animationId = requestAnimationFrame(animate);
        const time = Date.now() * 0.001;
        particles.rotation.y += 0.001 * speed;
        particles.rotation.x += 0.0005 * speed;

        const pos = geometry.attributes.position.array;
        for (let i = 0; i < particleCount; i++) {
          pos[i * 3 + 1] += Math.sin(time + i) * 0.001 * speed;
        }
        geometry.attributes.position.needsUpdate = true;

        particles.rotation.y += (mouseRef.x * 0.3 - particles.rotation.y) * 0.05;
        particles.rotation.x += (-mouseRef.y * 0.3 - particles.rotation.x) * 0.05;

        renderer.render(scene, camera);
      }
      animate();

      const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };
      window.addEventListener('resize', handleResize);

      return () => {
        running = false;
        io.disconnect();
        document.removeEventListener('visibilitychange', onVis);
        cancelAnimationFrame(animationId);
        window.removeEventListener('mousemove', handleMove);
        window.removeEventListener('resize', handleResize);
        if (renderer) {
          renderer.dispose();
          containerRef.current.removeChild(renderer.domElement);
        }
        scene.remove(particles);
        geometry.dispose();
        material.dispose();
      };
    } catch (e) {
      console.error('Particles error:', e);
    }
  }, [particleCount, speed]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
      }}
    />
  );
}
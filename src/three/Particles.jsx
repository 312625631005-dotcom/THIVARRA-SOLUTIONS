import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

/**
 * Lightweight starfield. Particle count is reduced on phones, animation pauses
 * in background tabs and is disabled for prefers-reduced-motion.
 */
export default function Particles({ className, speed = 0.3 }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 130 : 260;

    let renderer = null;
    let scene = null;
    let camera = null;
    let points = null;
    let geometry = null;
    let material = null;
    let frameId = 0;
    let running = true;

    const mouse = { x: 0, y: 0 };

    try {
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
      camera.position.z = 1;

      geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(particleCount * 3);
      const colors = new Float32Array(particleCount * 3);
      const palette = [
        new THREE.Color('#1E5BFF'),
        new THREE.Color('#22C7FF'),
        new THREE.Color('#E6E9EF'),
      ];

      for (let i = 0; i < particleCount; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 8;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 8;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 8;

        const c = palette[Math.floor(Math.random() * palette.length)];
        colors[i * 3] = c.r;
        colors[i * 3 + 1] = c.g;
        colors[i * 3 + 2] = c.b;
      }

      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

      material = new THREE.PointsMaterial({
        size: 0.02,
        vertexColors: true,
        transparent: true,
        opacity: 0.65,
        sizeAttenuation: true,
        depthWrite: false,
      });

      points = new THREE.Points(geometry, material);
      scene.add(points);

      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: false,
        powerPreference: 'low-power',
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
      renderer.setSize(window.innerWidth, window.innerHeight);
      container.appendChild(renderer.domElement);

      const onMove = (e) => {
        mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
        mouse.y = (e.clientY / window.innerHeight) * 2 - 1;
      };

      const draw = () => {
        points.rotation.y += 0.001 * speed;
        points.rotation.x += 0.0005 * speed;
        points.rotation.y += (mouse.x * 0.25 - points.rotation.y) * 0.02;
        points.rotation.x += (-mouse.y * 0.25 - points.rotation.x) * 0.02;
        renderer.render(scene, camera);
      };

      const loop = () => {
        if (!running) return;
        draw();
        frameId = requestAnimationFrame(loop);
      };

      if (!reduced) {
        window.addEventListener('mousemove', onMove, { passive: true });
        frameId = requestAnimationFrame(loop);
      } else {
        draw();
      }

      const onVisibility = () => {
        if (document.hidden) {
          running = false;
          cancelAnimationFrame(frameId);
        } else if (!reduced && !running) {
          running = true;
          frameId = requestAnimationFrame(loop);
        }
      };

      const onResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
        if (reduced) draw();
      };

      document.addEventListener('visibilitychange', onVisibility);
      window.addEventListener('resize', onResize);

      return () => {
        running = false;
        cancelAnimationFrame(frameId);
        window.removeEventListener('mousemove', onMove);
        window.removeEventListener('resize', onResize);
        document.removeEventListener('visibilitychange', onVisibility);
        if (renderer) {
          renderer.dispose();
          if (renderer.domElement.parentNode === container) {
            container.removeChild(renderer.domElement);
          }
        }
        if (scene && points) scene.remove(points);
        if (geometry) geometry.dispose();
        if (material) material.dispose();
      };
    } catch (error) {
      console.error('Particles error:', error);
      if (renderer) renderer.dispose();
    }
  }, [speed]);

  return (
    <div
      ref={containerRef}
      className={className}
      aria-hidden="true"
      style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
    />
  );
}

'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Torus, Box } from '@react-three/drei';
import * as THREE from 'three';

function FloatingShape({
  position,
  shape,
  color,
  speed = 1,
  distort = 0.3,
  scale = 1
}: {
  position: [number, number, number];
  shape: 'sphere' | 'torus' | 'box';
  color: string;
  speed?: number;
  distort?: number;
  scale?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1 * speed;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15 * speed;
    }
  });

  const ShapeComponent = shape === 'sphere' ? Sphere : shape === 'torus' ? Torus : Box;
  const args = shape === 'sphere' ? [1, 64, 64] : shape === 'torus' ? [1, 0.4, 32, 32] : [1, 1, 1];

  return (
    <Float speed={speed} rotationIntensity={0.5} floatIntensity={1}>
      <ShapeComponent ref={meshRef} args={args as never} position={position} scale={scale}>
        <MeshDistortMaterial
          color={color}
          roughness={0.1}
          metalness={0.8}
          distort={distort}
          speed={2}
        />
      </ShapeComponent>
    </Float>
  );
}

function Particles({ count = 200 }) {
  const points = useRef<THREE.Points>(null);

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return geo;
  }, [count]);

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.y = state.clock.elapsedTime * 0.02;
      points.current.rotation.x = state.clock.elapsedTime * 0.01;
    }
  });

  return (
    <points ref={points} geometry={geometry}>
      <pointsMaterial
        size={0.02}
        color="#6366f1"
        sizeAttenuation
        transparent
        opacity={0.8}
      />
    </points>
  );
}

function MouseLight() {
  const light = useRef<THREE.PointLight>(null);
  const { viewport } = useThree();

  useFrame(({ pointer }) => {
    if (light.current) {
      light.current.position.x = (pointer.x * viewport.width) / 2;
      light.current.position.y = (pointer.y * viewport.height) / 2;
    }
  });

  return <pointLight ref={light} intensity={2} color="#ec4899" distance={10} />;
}

function SceneContent() {
  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight position={[10, 10, 5]} intensity={0.5} />
      <MouseLight />

      <Particles count={300} />

      <FloatingShape
        position={[-3, 1, -2]}
        shape="sphere"
        color="#6366f1"
        scale={0.8}
        distort={0.4}
      />
      <FloatingShape
        position={[3, -1, -3]}
        shape="torus"
        color="#ec4899"
        scale={0.6}
        speed={0.8}
      />
      <FloatingShape
        position={[0, 2, -4]}
        shape="box"
        color="#8b5cf6"
        scale={0.5}
        distort={0.2}
      />
      <FloatingShape
        position={[-2, -2, -2]}
        shape="sphere"
        color="#06b6d4"
        scale={0.4}
        speed={1.2}
      />
      <FloatingShape
        position={[2.5, 1.5, -1]}
        shape="torus"
        color="#f472b6"
        scale={0.3}
        speed={1.5}
      />
    </>
  );
}

export function Scene3D() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <SceneContent />
      </Canvas>
    </div>
  );
}

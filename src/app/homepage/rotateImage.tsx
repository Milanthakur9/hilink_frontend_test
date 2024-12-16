// components/RotatingShape.js
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei'; // Optional for user interaction

// Abstract Rotating Shape Component
const RotatingShape = () => {
  const meshRef = useRef();

  // Continuous rotation animation
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01; // Rotate along Y axis
      meshRef.current.rotation.x += 0.005; // Optional: Slight rotation along X axis
    }
  });

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[2, 1]} /> {/* Abstract shape (icosahedron) */}
      <meshStandardMaterial color="#ff914d" wireframe={true} />
    </mesh>
  );
};

// Canvas Component
const RotatingShapeCanvas = () => {
  return (
    <Canvas
      style={{ height: '100vh', width: '100%' }}
      camera={{ position: [0, 0, 5], fov: 50 }} // Set camera position
    >
      <ambientLight intensity={0.5} /> {/* General lighting */}
      <spotLight position={[5, 5, 5]} angle={0.15} intensity={1} /> {/* Spot light */}
      <RotatingShape /> {/* The rotating abstract shape */}
      <OrbitControls /> {/* Optional: Allow user to interact with the scene */}
    </Canvas>
  );
};

export default RotatingShapeCanvas;
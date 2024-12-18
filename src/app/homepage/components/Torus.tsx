// components/Torus3D.tsx
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Torus3D = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();

    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 8; // Increase the camera's z-position to keep the torus in view

    // Set up the WebGLRenderer with transparent background
    const renderer = new THREE.WebGLRenderer({ alpha: true }); // alpha: true for transparent background
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0); // Transparent background (alpha = 0)
    mountRef.current.appendChild(renderer.domElement);

    // Create a bigger torus geometry
    const geometry = new THREE.TorusGeometry(3, 1, 16, 100); // Increase the first value (radius) and the second value (tube radius)

    // Create a glass material
    const material = new THREE.MeshPhysicalMaterial({
      color: 0xFF914D,  // Bright color for the torus
      // shininess: 30,    // Adjust the shininess to make it look reflective
      opacity: 0.5,     // Set some transparency for glass effect
      transparent: true, // Make the material transparent
      reflectivity: 0.8, // High reflectivity for glass-like effect
      // refractionRatio: 0.98, // Simulate refraction
      transmission: 1,  // Full transmission (like glass)
      clearcoat: 1,     // Optional: adds a shiny clear coat
      clearcoatRoughness: 0.1 // Optional: fine-tunes the clear coat's smoothness
    });

    const torus = new THREE.Mesh(geometry, material);
    scene.add(torus); // No explicit position is set, the torus is at the origin (0, 0, 0)

    // Add ambient light to the scene
    const ambientLight = new THREE.AmbientLight(0x404040, 1); // Soft white light
    scene.add(ambientLight);

    // Add a stronger directional light to illuminate the torus
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5); // Increased light intensity
    directionalLight.position.set(5, 5, 5).normalize();
    scene.add(directionalLight);

    // Add a point light to further illuminate from the front
    const pointLight = new THREE.PointLight(0xffffff, 1, 100); // Point light at the center of the scene
    pointLight.position.set(0, 0, 5);
    scene.add(pointLight);

    // Animation loop to rotate the torus
    const animate = () => {
      requestAnimationFrame(animate);
      torus.rotation.x += 0.01;
      torus.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    animate();

    // Handle resizing the window
    const onResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        width: '100%',
        height: '100%',
      }}
    />
  );
};

export default Torus3D;

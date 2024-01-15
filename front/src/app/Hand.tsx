import { useGLTF } from '@react-three/drei';
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const Hand: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer();
      camera.position.z = 5;
      const geometry = new THREE.TorusGeometry(.7, .2, 16, 100);
      const material = new THREE.PointsMaterial({ color: 0x00ff00, size: 0.01 });
      const cube = new THREE.Points(geometry, material);
      //scene.add(cube);
      renderer.setSize(window.innerWidth, window.innerHeight);

      containerRef.current?.appendChild(renderer.domElement);
      const gltf = useGLTF('public/models/hand.gltf');
      scene.add(gltf.scene);

      const handleResize = () => {
        const width = window.outerWidth;
        const height = window.outerHeight;

        camera.aspect = width / height;
        camera.updateProjectionMatrix();

        renderer.setSize(width, height);
      };
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.125;
      /*const renderScene = (time: number) => {
        cube.rotation.y += 0.005;
        controls.update();
        renderer.render(scene, camera);
      };*/
      renderer.render(scene, camera);
      // Set up the animation loop
      /*renderer.setAnimationLoop((time: number) => {
        renderScene(time);
      });*/

      window.addEventListener('resize', handleResize);

      // Clean up the event listener and animation loop when the component is unmounted
      return () => {
        window.removeEventListener('resize', handleResize);
        renderer.setAnimationLoop(null);
      };

    }
  }, []);

  return <div ref={containerRef} />;
};

export default Hand;

import React, { useRef, Suspense } from 'react';
import { Canvas, useLoader } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from "drei";

function Skeleton({ url }) {
  const gltf = useLoader(GLTFLoader, url);
  console.log("url", url, GLTFLoader, gltf);
  return <primitive object={gltf.scene} position={[0, -7, 0]} dispose={null} />;
}

function RandomShape() {
  const canvasRef = useRef();
  // Rotate mesh every frame, this is outside of React without overhead
  // useFrame(() => (canvasRef.current.rotation.x = canvasRef.current.rotation.y += 0.01));

  return (
    <mesh ref={canvasRef}>
      <coneBufferGeometry attach="geometry" />
      <meshStandardMaterial attach="material" color="0xff0000" />
    </mesh>
  );
}


export default function MainCanvas() {
  return (
    <div className="canvas-container">
      <div className="my-canvas">
        <Canvas >
          <directionalLight position={[10, 10, 10]} />
          <OrbitControls />
          <Suspense fallback={<RandomShape />}>
            <Skeleton url="/assets/skeleton.glb" />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}
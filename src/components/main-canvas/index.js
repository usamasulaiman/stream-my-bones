import React, { useRef, Suspense, useEffect } from 'react';
import { Canvas, useFrame, useThree, extend } from 'react-three-fiber';
import { useLoader } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
extend({ OrbitControls });

function Asset({ url }) {
  const gltf = useLoader(GLTFLoader, url)
  return <primitive object={gltf.scene} dispose={null} />
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

const Controls = ({props}) => {
  const { camera } = useThree()
  const controls = useRef()
  useFrame(() => controls.current && controls.current.update())
  return <orbitControls ref={controls} args={[camera]} enableDamping dampingFactor={0.1} />
}


export default function MainCanvas() {
  return (
    <div className="canvas-container">
      <div className="my-canvas">
        <Canvas >
          <directionalLight position={[10, 10, 10]} />
          <Controls />
          <Suspense fallback={<RandomShape />}>
            <Asset url="/assets/scene.gltf" />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}
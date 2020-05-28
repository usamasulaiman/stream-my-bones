import React, { useRef } from 'react';
import { Canvas } from 'react-three-fiber'

export default function MainCanvas() {
  const canvasRef = useRef(null)
  // console.log('canvas stream', canvasRef.currents);
  return (
    <div className="canvas-container">
      <div className="my-canvas">
        {/* <canvas id="myCanvas" /> */}
        <Canvas ref={canvasRef}>
          <pointLight position={[10, 10, 10]} />
          <mesh>
            <sphereBufferGeometry attach="geometry" />
            <meshStandardMaterial attach="material" color="hotpink" />
          </mesh>
        </Canvas>
      </div>
    </div>
  )
}
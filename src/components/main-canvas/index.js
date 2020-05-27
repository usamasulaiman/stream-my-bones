import React from 'react';
import { Canvas } from 'react-three-fiber'

export default function MainCanvas() {
  return (
    <div className="canvas-container">
      <div className="my-canvas">
        {/* <canvas id="myCanvas" /> */}
        <Canvas>
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
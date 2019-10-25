import React from 'react'
import { Engine, Scene, FreeCamera, HemisphericLight, Sphere, Ground } from 'react-babylonjs'
import { Vector3 } from 'babylonjs';
import { PrismCode } from 'react-prism';

const DefaultPlayground = () => (
  <div className="row">
    <div className="col-xs-12 col-md-6">
      <div>hello</div>
      <Engine antialias={true} adaptToDeviceRatio={true} canvasId="sample-canvas">
        <Scene>
          <FreeCamera name="camera1" position={new Vector3(0, 5, -10)} setTarget={[Vector3.Zero()]} />
          <HemisphericLight name="light1" intensity={0.07} direction={Vector3.Up()} />
          <Sphere name="sphere1" diameter={2} segments={16} position={new Vector3(0, 1, 0)} />    
          <Ground name="ground1" width={6} height={6} subdivisions={2}  />
        </Scene>
      </Engine>
    </div>
    <div>hello</div>
    <div className="col-xs-12 col-md-6">hello</div>
  </div>
)

export default DefaultPlayground
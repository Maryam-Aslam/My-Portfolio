import { Environment, Float, OrbitControls, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three'

import React, { Children, useEffect } from 'react'
import { Color } from 'three';

    const TechIcon =({model})=>{
        const scene =useGLTF(model.modelPath);
    
        useEffect(()=>{
            if(model.name==='interactive Developer'){scene.scene.traverse((Child)=>{
                if(Child.isMesh && Child.name==='objct-5'){
                    Child.material=new 
                    THREE.MeshStandardMaterial({Color:'white'})
                }
            })}
        })
  return (
    <Canvas>
        <ambientLight intensity={0.3} />
        <directionalLight position={[5,5,5]} intensity={1} />

        <Environment preset='city' />
        <OrbitControls enableZoom={false} />
       
       <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
        <group scale={model.scale} rotation={model.rotation}>
            <primitive object={scene.scene} />
        </group>
       </Float>
    </Canvas>
  ) 
}

export default TechIcon

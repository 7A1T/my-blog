"use client";

import React from "react";
import * as THREE from 'three'
import { Canvas } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    cat: THREE.Mesh
  }
  materials: unknown
  //animations: GLTFAction[]
}


function Cat() {
  const { nodes } = useGLTF("/cat-transformed.glb") as GLTFResult;
  console.log(nodes);
  return (
    <mesh
      geometry={nodes.cat.geometry}
      material={nodes.cat.material}
      rotation={[Math.PI / 2, 0, 0]}
    />
  );
}

export default function ThreeCanvas() {
  return (
    <Canvas shadows camera={{position: [0, 0,50], fov: 25}}>
      <ambientLight intensity={0.5 * Math.PI} />
      <directionalLight color="cyan" position={[0, 0, 5]} />

      <group dispose={null}>
        <Cat />
      </group>
    </Canvas>
  );
}

useGLTF.preload("/cat-transformed.glb");

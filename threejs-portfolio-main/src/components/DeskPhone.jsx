import React from 'react';
import { useGLTF } from '@react-three/drei';

const DeskPhone = (props) => {
  const { nodes, materials } = useGLTF('/models/desk_phone.glb');
  
  return (
    <group {...props} dispose={null} position={[0, 0, 0]} rotation={[0, Math.PI, 0]}> {/* Rotated 180 degrees to face front */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCube38_Plastic_0.geometry}
        material={materials.Plastic}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCube38_BlueScreen_0.geometry}
        material={materials.BlueScreen}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCube79_Plastic_0.geometry}
        material={materials.Plastic}
        position={[-0.5, 0.5, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pCube80_Plastic_0.geometry}
        material={materials.Plastic}
        position={[0, -1, -0.5]}
        rotation={[-0.1, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload('/models/desk_phone.glb');

export default DeskPhone;

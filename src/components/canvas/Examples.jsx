'use client'

import { useGLTF, useAnimations } from '@react-three/drei'
import { useRef, useEffect } from 'react'

export function Austronaut(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/astro-processed.glb')
  const { actions } = useAnimations(animations, group)
  debugger
  useEffect(() => {
    actions["Armature|888|Anima_Layer"].play()
  }, [actions])
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes.RL_BoneRoot} />
          <skinnedMesh name="Mesh_2" geometry={nodes.Mesh_2.geometry} material={materials['Material.001']} skeleton={nodes.Mesh_2.skeleton} />
        </group>
      </group>
    </group>
  )
}
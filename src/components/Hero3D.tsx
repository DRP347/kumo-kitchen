"use client"

import * as THREE from "three"
import React, { useEffect, useMemo, useRef } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import {
  ContactShadows,
  Environment,
  OrbitControls,
  useGLTF,
} from "@react-three/drei"

function tweakMaterials(scene: THREE.Object3D) {
  scene.traverse((obj: any) => {
    if (!obj.isMesh) return
    obj.castShadow = true
    obj.receiveShadow = true

    const mat = obj.material as THREE.Material | THREE.Material[]
    const mats = Array.isArray(mat) ? mat : [mat]

    mats.forEach((m: any) => {
      if (!m || !("roughness" in m)) return

      // Default uplift (better reflections, less “flat”)
      m.envMapIntensity = 1.35
      m.needsUpdate = true

      const name =
        `${m.name ?? ""} ${obj.name ?? ""}`.toLowerCase()

      const isLiquid =
        name.includes("soup") ||
        name.includes("broth") ||
        name.includes("liquid")

      const isFood =
        isLiquid ||
        name.includes("noodle") ||
        name.includes("meat") ||
        name.includes("egg") ||
        name.includes("topping")

      // Ceramic/glaze vs wet food tuning (safe heuristics)
      if (isLiquid) {
        m.roughness = Math.min(m.roughness ?? 0.15, 0.15)
        m.metalness = Math.max(m.metalness ?? 0.0, 0.02)
        m.clearcoat = 1
        m.clearcoatRoughness = 0.08
      } else if (isFood) {
        m.roughness = Math.min(m.roughness ?? 0.28, 0.28)
        m.clearcoat = Math.max(m.clearcoat ?? 0, 0.35)
        m.clearcoatRoughness = 0.18
      } else {
        // Bowl/ceramic
        m.roughness = Math.min(m.roughness ?? 0.4, 0.38)
        m.clearcoat = Math.max(m.clearcoat ?? 0, 0.55)
        m.clearcoatRoughness = 0.22
      }
    })
  })
}

function Steam() {
  // Lightweight “steam” using a few soft particles rising + drifting.
  // No textures needed; reads as subtle atmosphere.
  const pts = useMemo(() => {
    const arr: { x: number; y: number; z: number; s: number; sp: number }[] =
      []
    for (let i = 0; i < 26; i++) {
      arr.push({
        x: (Math.random() - 0.5) * 0.45,
        y: 0.08 + Math.random() * 0.25,
        z: (Math.random() - 0.5) * 0.45,
        s: 0.014 + Math.random() * 0.02,
        sp: 0.12 + Math.random() * 0.22,
      })
    }
    return arr
  }, [])

  const group = useRef<THREE.Group>(null)

  useFrame((state, dt) => {
    const g = group.current
    if (!g) return

    g.children.forEach((c: any, i: number) => {
      const p = pts[i]
      c.position.y += p.sp * dt
      c.position.x += Math.sin(state.clock.elapsedTime * 0.8 + i) * dt * 0.02
      c.position.z += Math.cos(state.clock.elapsedTime * 0.7 + i) * dt * 0.02

      // loop
      if (c.position.y > 0.55) {
        c.position.y = 0.1 + Math.random() * 0.12
        c.position.x = (Math.random() - 0.5) * 0.45
        c.position.z = (Math.random() - 0.5) * 0.45
      }

      // subtle fade by height
      const t = THREE.MathUtils.clamp((c.position.y - 0.1) / 0.45, 0, 1)
      ;(c.material as THREE.MeshBasicMaterial).opacity = 0.11 * (1 - t)
    })
  })

  return (
    <group ref={group} position={[0.18, 0.58, 0]}>
      {pts.map((p, idx) => (
        <mesh key={idx} position={[p.x, p.y, p.z]}>
          <sphereGeometry args={[p.s, 10, 10]} />
          <meshBasicMaterial
            color="#ffffff"
            transparent
            opacity={0.09}
            depthWrite={false}
          />
        </mesh>
      ))}
    </group>
  )
}

function RamenModel() {
  const group = useRef<THREE.Group>(null)
  const { scene } = useGLTF("/models/ramen_bowl.glb")
  const { pointer } = useThree()

  useEffect(() => {
    // One-time material tuning
    tweakMaterials(scene)
  }, [scene])

  useFrame((state, dt) => {
    const g = group.current
    if (!g) return

    // Cursor parallax: subtle, premium (not “orbiting”)
    const targetY = pointer.x * 0.18
    const targetX = -pointer.y * 0.12

    g.rotation.y = THREE.MathUtils.lerp(g.rotation.y, targetY, 1 - Math.pow(0.0008, dt))
    g.rotation.x = THREE.MathUtils.lerp(g.rotation.x, targetX, 1 - Math.pow(0.0008, dt))

    // tiny idle motion
    g.position.y = THREE.MathUtils.lerp(
      g.position.y,
      -0.01 + Math.sin(state.clock.elapsedTime * 0.9) * 0.008,
      1 - Math.pow(0.0012, dt)
    )
  })

  return (
    <group ref={group}>
      <primitive
        object={scene}
        scale={1.75}
        position={[0.15, -0.01, 0]}
        rotation={[-0.25, Math.PI * 0.18, 0]}
      />
    </group>
  )
}

export default function Hero3D() {
  return (
    <Canvas
      shadows
      dpr={[1, 1.75]}
      camera={{ position: [0, 2.55, 2.65], fov: 34 }}
      gl={{
        antialias: true,
        alpha: true,
        physicallyCorrectLights: true,
        toneMapping: THREE.ACESFilmicToneMapping,
        toneMappingExposure: 1.05,
      }}
    >
      {/* Subtle ambient so shadows aren’t crushed */}
      <ambientLight intensity={0.22} />

      {/* KEY (warm) */}
      <directionalLight
        position={[-3.2, 5.2, 3.2]}
        intensity={1.65}
        color="#ffd7a3"
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-near={0.5}
        shadow-camera-far={20}
        shadow-camera-left={-6}
        shadow-camera-right={6}
        shadow-camera-top={6}
        shadow-camera-bottom={-6}
      />

      {/* FILL (soft) */}
      <directionalLight
        position={[3.8, 2.2, 2.0]}
        intensity={0.55}
        color="#fff2dd"
      />

      {/* RIM (warm-gold) — matches your gold typography */}
      <directionalLight
        position={[0.8, 2.2, -4.4]}
        intensity={1.25}
        color="#ffcc66"
      />

      {/* Realistic reflections */}
      <Environment preset="city" environmentIntensity={0.35} />

      {/* Model */}
      <RamenModel />

      {/* Steam (subtle) */}
      <Steam />

      {/* Contact shadow (grounding) */}
      <ContactShadows
        position={[0.18, -1.02, 0]}
        opacity={0.62}
        scale={7.5}
        blur={2.3}
        far={3.2}
        resolution={512}
        color="#000000"
      />

      {/* Keep controls mounted (prevents accidental scroll interactions), but disabled */}
      <OrbitControls enableRotate={false} enableZoom={false} enablePan={false} />
    </Canvas>
  )
}

useGLTF.preload("/models/ramen_bowl.glb")

'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

// World map continents as lat/lng clusters
// Real world map dots — sampled continent coordinate ranges
const CONTINENT_REGIONS = [
  // North America
  { latMin: 25, latMax: 70, lngMin: -140, lngMax: -60, density: 280 },
  // South America
  { latMin: -55, latMax: 12, lngMin: -82, lngMax: -34, density: 200 },
  // Europe
  { latMin: 35, latMax: 70, lngMin: -10, lngMax: 40, density: 220 },
  // Africa
  { latMin: -35, latMax: 37, lngMin: -18, lngMax: 52, density: 280 },
  // Asia
  { latMin: 0, latMax: 75, lngMin: 40, lngMax: 145, density: 420 },
  // Australia
  { latMin: -43, latMax: -10, lngMin: 113, lngMax: 154, density: 120 },
  // Greenland / Arctic
  { latMin: 60, latMax: 83, lngMin: -55, lngMax: -17, density: 60 },
  // Southeast Asia islands
  { latMin: -8, latMax: 20, lngMin: 95, lngMax: 140, density: 150 },
  // Japan / Korea
  { latMin: 30, latMax: 45, lngMin: 128, lngMax: 145, density: 80 },
  // UK / Ireland
  { latMin: 50, latMax: 59, lngMin: -10, lngMax: 2, density: 40 },
]

function latLngToXYZ(lat: number, lng: number, radius: number): THREE.Vector3 {
  const phi = ((90 - lat) * Math.PI) / 180
  const theta = ((lng + 180) * Math.PI) / 180
  return new THREE.Vector3(
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta)
  )
}

function WorldGlobe() {
  const pointsRef = useRef<THREE.Points>(null!)

  const positions = useMemo(() => {
    const pts: number[] = []

    CONTINENT_REGIONS.forEach(({ latMin, latMax, lngMin, lngMax, density }) => {
      for (let i = 0; i < density; i++) {
        const lat = latMin + Math.random() * (latMax - latMin)
        const lng = lngMin + Math.random() * (lngMax - lngMin)
        // Add slight jitter for organic feel
        const jitterLat = lat + (Math.random() - 0.5) * 4
        const jitterLng = lng + (Math.random() - 0.5) * 4
        const v = latLngToXYZ(jitterLat, jitterLng, 2.0)
        pts.push(v.x, v.y, v.z)
      }
    })

    // Add sparse ocean dots for depth
    for (let i = 0; i < 300; i++) {
      const lat = -80 + Math.random() * 160
      const lng = -180 + Math.random() * 360
      const v = latLngToXYZ(lat, lng, 2.0)
      pts.push(v.x, v.y, v.z)
    }

    return new Float32Array(pts)
  }, [])

  useFrame((_, delta) => {
    pointsRef.current.rotation.y += delta * 0.06
  })

  return (
    <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#E8C800"
        size={0.022}
        sizeAttenuation
        depthWrite={false}
        opacity={0.9}
      />
    </Points>
  )
}

// Flat perspective grid lines
function PerspectiveGrid() {
  const lines = useMemo(() => {
    const geometry = new THREE.BufferGeometry()
    const vertices: number[] = []
    const gridSize = 6
    const divisions = 10
    const step = gridSize / divisions

    // Horizontal lines (going into depth)
    for (let i = 0; i <= divisions; i++) {
      const x = -gridSize / 2 + i * step
      vertices.push(x, -2.5, -4)
      vertices.push(x, -2.5, 3)
    }
    // Vertical lines (left-right)
    for (let i = 0; i <= divisions; i++) {
      const z = -4 + i * (7 / divisions)
      vertices.push(-gridSize / 2, -2.5, z)
      vertices.push(gridSize / 2, -2.5, z)
    }

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3))
    return geometry
  }, [])

  return (
    <lineSegments>
      <primitive object={lines} attach="geometry" />
      <lineBasicMaterial color="#2a2a00" transparent opacity={0.35} />
    </lineSegments>
  )
}

// Vertical grid lines on sides
function VerticalGrid() {
  const lines = useMemo(() => {
    const geometry = new THREE.BufferGeometry()
    const vertices: number[] = []
    const cols = 12
    const step = 8 / cols

    for (let i = 0; i <= cols; i++) {
      const x = -4 + i * step
      vertices.push(x, 3.5, -1)
      vertices.push(x, -2.5, -1)
    }
    for (let j = 0; j <= 8; j++) {
      const y = -2.5 + j * (6 / 8)
      vertices.push(-4, y, -1)
      vertices.push(4, y, -1)
    }

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3))
    return geometry
  }, [])

  return (
    <lineSegments>
      <primitive object={lines} attach="geometry" />
      <lineBasicMaterial color="#1e1e00" transparent opacity={0.25} />
    </lineSegments>
  )
}

export default function GlobeScene() {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        camera={{ position: [0, 0.5, 5], fov: 55 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <VerticalGrid />
        <PerspectiveGrid />
        <WorldGlobe />
      </Canvas>
    </div>
  )
}

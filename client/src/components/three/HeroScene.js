import React, { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MathUtils } from 'three';

// Theme colours (see styles/tokens.css)
const BLUE = '#2563EB';
const ORANGE = '#F97316';
const GREEN = '#22C55E';
const PAPER = '#FDFCF0';
const NAVY = '#0F172A';

// Bobs its children up and down with a slight sway.
function Floating({ position, rotation = [0, 0, 0], speed = 1, amplitude = 0.12, offset = 0, children }) {
  const ref = useRef();
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed + offset;
    ref.current.position.y = position[1] + Math.sin(t) * amplitude;
    ref.current.rotation.z = rotation[2] + Math.sin(t * 0.8) * 0.06;
  });
  return (
    <group ref={ref} position={position} rotation={rotation}>
      {children}
    </group>
  );
}

// বই: a closed hardback book
function Book() {
  return (
    <group>
      <mesh position={[0, 0.17, 0]}><boxGeometry args={[1.9, 0.06, 1.4]} /><meshStandardMaterial color={BLUE} roughness={0.5} /></mesh>
      <mesh position={[0, -0.17, 0]}><boxGeometry args={[1.9, 0.06, 1.4]} /><meshStandardMaterial color={BLUE} roughness={0.5} /></mesh>
      <mesh position={[-0.93, 0, 0]}><boxGeometry args={[0.06, 0.4, 1.4]} /><meshStandardMaterial color="#1D4ED8" roughness={0.5} /></mesh>
      <mesh position={[0.03, 0, 0]}><boxGeometry args={[1.8, 0.28, 1.32]} /><meshStandardMaterial color={PAPER} roughness={0.9} /></mesh>
      <mesh position={[0.15, 0.205, 0]}><boxGeometry args={[0.9, 0.01, 0.18]} /><meshStandardMaterial color={ORANGE} /></mesh>
    </group>
  );
}

// খাতা: a spiral notebook
function Notebook() {
  const rings = [-0.5, -0.3, -0.1, 0.1, 0.3, 0.5];
  return (
    <group>
      <mesh position={[0, 0.07, 0]}><boxGeometry args={[1.5, 0.04, 1.15]} /><meshStandardMaterial color={ORANGE} roughness={0.6} /></mesh>
      <mesh position={[0.02, 0, 0]}><boxGeometry args={[1.44, 0.1, 1.1]} /><meshStandardMaterial color={PAPER} roughness={0.9} /></mesh>
      <mesh position={[0, -0.07, 0]}><boxGeometry args={[1.5, 0.04, 1.15]} /><meshStandardMaterial color="#EA580C" roughness={0.6} /></mesh>
      {rings.map((z) => (
        <mesh key={z} position={[-0.74, 0, z]} rotation={[0, Math.PI / 2, 0]}>
          <torusGeometry args={[0.09, 0.018, 8, 20]} />
          <meshStandardMaterial color="#94A3B8" metalness={0.6} roughness={0.3} />
        </mesh>
      ))}
    </group>
  );
}

// কলম: a pen
function Pen() {
  return (
    <group>
      <mesh><cylinderGeometry args={[0.075, 0.075, 1.7, 24]} /><meshStandardMaterial color={GREEN} roughness={0.35} /></mesh>
      <mesh position={[0, 0.62, 0]}><cylinderGeometry args={[0.085, 0.085, 0.5, 24]} /><meshStandardMaterial color={NAVY} roughness={0.3} /></mesh>
      <mesh position={[0.09, 0.55, 0]}><boxGeometry args={[0.03, 0.4, 0.05]} /><meshStandardMaterial color="#CBD5E1" metalness={0.7} roughness={0.25} /></mesh>
      <mesh position={[0, -0.97, 0]} rotation={[Math.PI, 0, 0]}><coneGeometry args={[0.075, 0.25, 24]} /><meshStandardMaterial color="#F8FAFC" roughness={0.4} /></mesh>
      <mesh position={[0, -1.11, 0]} rotation={[Math.PI, 0, 0]}><coneGeometry args={[0.025, 0.06, 12]} /><meshStandardMaterial color={NAVY} /></mesh>
    </group>
  );
}

function Dot({ position, color, size = 0.09, offset }) {
  return (
    <Floating position={position} offset={offset} speed={1.4} amplitude={0.18}>
      <mesh><sphereGeometry args={[size, 24, 24]} /><meshStandardMaterial color={color} roughness={0.3} /></mesh>
    </Floating>
  );
}

// The whole composition gently turns toward the pointer.
function Composition() {
  const group = useRef();
  useFrame((state) => {
    group.current.rotation.y = MathUtils.lerp(group.current.rotation.y, state.pointer.x * 0.35, 0.05);
    group.current.rotation.x = MathUtils.lerp(group.current.rotation.x, -state.pointer.y * 0.18, 0.05);
  });

  return (
    <group ref={group}>
      <Floating position={[-0.75, 0.75, 0]} rotation={[0.55, 0.5, 0.12]} offset={0}>
        <Book />
      </Floating>
      <Floating position={[0.95, -0.25, -0.3]} rotation={[0.7, -0.55, -0.1]} offset={1.6} speed={0.9}>
        <Notebook />
      </Floating>
      <Floating position={[-0.35, -0.95, 0.7]} rotation={[0.25, 0.3, 1.05]} offset={3.1} speed={1.1}>
        <Pen />
      </Floating>
      <Dot position={[1.6, 1.15, -0.5]} color={ORANGE} offset={0.5} />
      <Dot position={[-1.9, -0.4, -0.6]} color={GREEN} size={0.07} offset={2} />
      <Dot position={[0.4, 1.55, -1]} color={BLUE} size={0.06} offset={4} />
    </group>
  );
}

// Lazy-loaded by HeroVisual. Rendering pauses when the hero is off-screen or the tab is hidden.
const HeroScene = () => {
  const wrapper = useRef(null);
  const [active, setActive] = useState(true);

  useEffect(() => {
    let onScreen = true;
    const update = () => setActive(onScreen && document.visibilityState === 'visible');
    const observer = new IntersectionObserver(([entry]) => {
      onScreen = entry.isIntersecting;
      update();
    });
    if (wrapper.current) observer.observe(wrapper.current);
    document.addEventListener('visibilitychange', update);
    return () => {
      observer.disconnect();
      document.removeEventListener('visibilitychange', update);
    };
  }, []);

  return (
    <div ref={wrapper} style={{ width: '100%', height: '100%' }} aria-hidden="true">
      <Canvas
        dpr={[1, 1.75]}
        camera={{ position: [0, 0.4, 6.2], fov: 38 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'low-power' }}
        frameloop={active ? 'always' : 'never'}
      >
        <ambientLight intensity={0.75} />
        <directionalLight position={[3, 5, 4]} intensity={1.6} />
        <directionalLight position={[-4, -2, 2]} intensity={0.4} color="#93C5FD" />
        <Composition />
      </Canvas>
    </div>
  );
};

export default HeroScene;

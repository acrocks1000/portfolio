"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

const MOSS = new THREE.Color("#618764");
const SAGE = new THREE.Color("#9cb086");

export function ParticleField() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      mount.clientWidth / mount.clientHeight,
      0.1,
      100
    );
    camera.position.z = 22;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    // particle grid as a soft wave field
    const COLS = 70;
    const ROWS = 40;
    const COUNT = COLS * ROWS;
    const positions = new Float32Array(COUNT * 3);
    const colors = new Float32Array(COUNT * 3);
    const base = new Float32Array(COUNT * 2); // base x,y for wave math

    let i = 0;
    for (let x = 0; x < COLS; x++) {
      for (let y = 0; y < ROWS; y++) {
        const px = (x - COLS / 2) * 0.9;
        const py = (y - ROWS / 2) * 0.9;
        positions[i * 3] = px;
        positions[i * 3 + 1] = py;
        positions[i * 3 + 2] = 0;
        base[i * 2] = px;
        base[i * 2 + 1] = py;
        const c = MOSS.clone().lerp(SAGE, Math.random());
        colors[i * 3] = c.r;
        colors[i * 3 + 1] = c.g;
        colors[i * 3 + 2] = c.b;
        i++;
      }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.14,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      sizeAttenuation: true,
      depthWrite: false,
    });

    const points = new THREE.Points(geometry, material);
    points.rotation.x = -0.5;
    scene.add(points);

    const mouse = { x: 0, y: 0, tx: 0, ty: 0 };
    const onPointerMove = (e: PointerEvent) => {
      mouse.tx = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.ty = -((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener("pointermove", onPointerMove);

    const onResize = () => {
      if (!mount) return;
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener("resize", onResize);

    const clock = new THREE.Clock();
    let raf = 0;
    const pos = geometry.attributes.position as THREE.BufferAttribute;

    const animate = () => {
      raf = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      // ease mouse
      mouse.x += (mouse.tx - mouse.x) * 0.05;
      mouse.y += (mouse.ty - mouse.y) * 0.05;

      for (let j = 0; j < COUNT; j++) {
        const bx = base[j * 2];
        const by = base[j * 2 + 1];
        // ripple wave + mouse swell
        const dx = bx - mouse.x * 18;
        const dy = by - mouse.y * 10;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const swell = Math.max(0, 1 - dist / 10) * 2.2;
        pos.array[j * 3 + 2] =
          Math.sin(bx * 0.35 + t * 0.8) * 0.8 +
          Math.cos(by * 0.3 + t * 0.6) * 0.8 +
          swell;
      }
      pos.needsUpdate = true;

      points.rotation.z = mouse.x * 0.05;
      points.rotation.x = -0.5 + mouse.y * 0.08;

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("resize", onResize);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0" aria-hidden="true" />;
}

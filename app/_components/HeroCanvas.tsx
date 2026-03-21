"use client";

import { useEffect, useRef } from "react";

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationId: number;
    let cleanup: (() => void) | undefined;

    const init = async () => {
      const THREE = await import("three");

      const canvas = canvasRef.current;
      const container = containerRef.current;
      if (!canvas || !container) return;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        45,
        container.clientWidth / container.clientHeight,
        0.1,
        100
      );
      camera.position.z = 4;

      const renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true,
      });
      renderer.setSize(container.clientWidth, container.clientHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      const segments = 48;
      const geometry = new THREE.SphereGeometry(1.5, segments, segments);

      const wireframeGeo = new THREE.WireframeGeometry(geometry);
      const lineMat = new THREE.LineBasicMaterial({
        color: 0xff4500,
        transparent: true,
        opacity: 0.15,
      });
      const lines = new THREE.LineSegments(wireframeGeo, lineMat);
      scene.add(lines);

      const pointsMat = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 0.015,
        transparent: true,
        opacity: 0.5,
      });
      const points = new THREE.Points(geometry, pointsMat);
      scene.add(points);

      let mouseX = 0;
      let mouseY = 0;

      const handleMouseMove = (e: MouseEvent) => {
        const rect = container.getBoundingClientRect();
        mouseX = ((e.clientX - rect.left) / container.clientWidth - 0.5) * 2;
        mouseY = ((e.clientY - rect.top) / container.clientHeight - 0.5) * 2;
      };

      const handleResize = () => {
        if (!container) return;
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
      };

      container.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("resize", handleResize);

      const animate = () => {
        animationId = requestAnimationFrame(animate);
        lines.rotation.y += 0.0015 + mouseX * 0.002;
        lines.rotation.x += 0.0005 + mouseY * 0.002;
        points.rotation.y += 0.0015 + mouseX * 0.002;
        points.rotation.x += 0.0005 + mouseY * 0.002;
        renderer.render(scene, camera);
      };
      animate();

      cleanup = () => {
        cancelAnimationFrame(animationId);
        container.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("resize", handleResize);
        renderer.dispose();
        geometry.dispose();
        wireframeGeo.dispose();
        lineMat.dispose();
        pointsMat.dispose();
      };
    };

    init();

    return () => {
      cleanup?.();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-0 opacity-90 mix-blend-screen flex items-center justify-center scale-125"
    >
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
}

import { useEffect } from "react";
import * as THREE from "three";
import worldTexture from "../../../../assets/shared/world_mask111.png";
import { COLORS, GLOBE_SETTINGS } from "./globeConfig";

export const useGlobalGlobe = (canvasRef, containerRef) => {
  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    const isMobile = window.innerWidth < 768;
    const SETTINGS = isMobile ? GLOBE_SETTINGS.mobile : GLOBE_SETTINGS.desktop;

    /* ================= SCENE ================= */
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      isMobile ? 75 : 65,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000,
    );

    camera.position.z = SETTINGS.cameraZ;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      alpha: true,
    });

    renderer.setSize(
      containerRef.current.clientWidth,
      containerRef.current.clientHeight,
    );
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    /* ================= GROUP ================= */
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    /* ================= GLOBE ================= */
    const texture = new THREE.TextureLoader().load(worldTexture);

    const globe = new THREE.Mesh(
      new THREE.SphereGeometry(SETTINGS.radius, 64, 64),
      new THREE.MeshStandardMaterial({
        map: texture,
      }),
    );

    mainGroup.add(globe);

    /* ================= PARTICLES ================= */
    const positions = new Float32Array(SETTINGS.particles * 3);
    for (let i = 0; i < positions.length; i++) {
      positions[i] = (Math.random() - 0.5) * 8;
    }

    const particlesGeo = new THREE.BufferGeometry();
    particlesGeo.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3),
    );

    const particles = new THREE.Points(
      particlesGeo,
      new THREE.PointsMaterial({
        size: isMobile ? 0.025 : 0.035,
        color: COLORS.light,
        opacity: 0.8,
        transparent: true,
        blending: THREE.AdditiveBlending,
      }),
    );

    scene.add(particles);

    /* ================= RINGS ================= */
    const createRing = (radius, color, rotX) => {
      const ring = new THREE.Mesh(
        new THREE.TorusGeometry(radius, 0.02, 16, 100),
        new THREE.MeshBasicMaterial({
          color,
          opacity: 0.5,
          transparent: true,
          blending: THREE.AdditiveBlending,
        }),
      );
      ring.rotation.x = rotX;
      return ring;
    };

    const ring1 = createRing(SETTINGS.radius + 0.7, COLORS.main, Math.PI / 3);
    const ring2 = createRing(SETTINGS.radius + 1, COLORS.gold, -Math.PI / 4);

    mainGroup.add(ring1, ring2);

    /* ================= LIGHTS ================= */
    scene.add(new THREE.AmbientLight(COLORS.light, 0.6));

    const light1 = new THREE.PointLight(COLORS.gold, 2, 10);
    light1.position.set(3, 3, 4);
    scene.add(light1);

    const light2 = new THREE.PointLight(COLORS.main, 1.5, 10);
    light2.position.set(-3, -3, -4);
    scene.add(light2);

    /* ================= INTERACTION ================= */
    let isDragging = false;
    let prev = { x: 0, y: 0 };

    const velocity = { x: 0, y: 0 };
    const AUTO_ROTATION = 0.0002;
    const DAMPING = 0.92;

    const down = (e) => {
      isDragging = true;
      prev = { x: e.clientX, y: e.clientY };
      canvasRef.current.style.cursor = "grabbing";
    };

    const move = (e) => {
      if (!isDragging) return;

      const dx = e.clientX - prev.x;
      const dy = e.clientY - prev.y;

      velocity.x += dx * 0.00015;
      velocity.y += dy * 0.00015;

      prev = { x: e.clientX, y: e.clientY };
    };

    const up = () => {
      isDragging = false;
      canvasRef.current.style.cursor = "grab";
    };

    canvasRef.current.addEventListener("mousedown", down);
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup", up);

    /* ================= ANIMATION ================= */
    const animate = () => {
      // auto rotation
      velocity.x += AUTO_ROTATION;

      // rotate whole group
      mainGroup.rotation.y += velocity.x;
      mainGroup.rotation.x += velocity.y;

      // limit vertical rotation
      mainGroup.rotation.x = THREE.MathUtils.clamp(
        mainGroup.rotation.x,
        -Math.PI / 4,
        Math.PI / 4,
      );

      // smooth damping
      velocity.x *= DAMPING;
      velocity.y *= DAMPING;

      // particles slow movement
      particles.rotation.y += 0.0008;

      // rings breathing
      const t = Date.now() * 0.001;
      ring1.scale.setScalar(1 + Math.sin(t) * 0.04);
      ring2.scale.setScalar(1 + Math.cos(t) * 0.04);

      renderer.render(scene, camera);
    };

    renderer.setAnimationLoop(animate);

    /* ================= RESIZE ================= */
    const resize = () => {
      camera.aspect =
        containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(
        containerRef.current.clientWidth,
        containerRef.current.clientHeight,
      );
    };

    window.addEventListener("resize", resize);

    /* ================= CLEANUP ================= */
    return () => {
      renderer.setAnimationLoop(null);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup", up);
      // canvasRef.current.removeEventListener("mousedown", down);

      renderer.dispose();
      particlesGeo.dispose();
    };
  }, []);
};

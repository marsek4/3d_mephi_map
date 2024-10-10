import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

function ThreeScene() {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Инициализация сцены, камеры, рендера и контролов
    const sizes = {
      width: window.innerWidth * 0.785,
      height: window.innerHeight * 0.785,
    };

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 1000);
    camera.position.set(0, 3, 5);
    scene.add(camera);

    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    renderer.render(scene, camera);

    // PMREM и загрузка HDR
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    pmremGenerator.compileEquirectangularShader();

    new RGBELoader()
      .setDataType(THREE.FloatType)
      .load('sky.hdr', (texture) => {
        const envMap = pmremGenerator.fromEquirectangular(texture).texture;

        scene.environment = envMap;

        texture.dispose();
        pmremGenerator.dispose();
      });

    // Загрузка модели GLTF
    const loader = new GLTFLoader();
    loader.load('MEPhI_night3.glb', (gltf) => {
      scene.add(gltf.scene.children[0]);
    });

    // Пример куба обыкновенного
    // const geometry1 = new THREE.BoxGeometry(0.05, 0.05, 0.05); // размеры куба (ширина, высота, глубина)
    // const material1 = new THREE.MeshStandardMaterial({ color: 0xff0000 }); // красный цвет
    // const cube1 = new THREE.Mesh(geometry1, material1); // создание меша
    // cube1.position.set(0, -0.01, 0.2); // позиционирование куба в центре сцены
    // scene.add(cube1); // добавление куба в сцену

    // Куб под наклоном от г к спортплощадке 
    const geometry2 = new THREE.BoxGeometry(0.7, 0.05, 0.05);
    const material2 = new THREE.MeshStandardMaterial({ color: 0xff0000 });
    const cube2 = new THREE.Mesh(geometry2, material2);
    cube2.position.set(-0.55, -0.01, 0.28);
    cube2.rotation.set(0, Math.PI / 16, 0);
    scene.add(cube2); 

    // Куб от спортплощадки к В корпусу
    const geometry3 = new THREE.BoxGeometry(0.57, 0.05, 0.05);
    const material3 = new THREE.MeshStandardMaterial({ color: 0xff0000 });
    const cube3 = new THREE.Mesh(geometry3, material3); 
    cube3.position.set(-0.985, -0.01, -0.04); 
    cube3.rotation.set(0, Math.PI / 2, 0);
    scene.add(cube3); 

    // Дорожка к В корпусу
    const geometry4 = new THREE.BoxGeometry(0.15, 0.05, 0.05);
    const material4 = new THREE.MeshStandardMaterial({ color: 0xff0000 });
    const cube4 = new THREE.Mesh(geometry4, material4); 
    // cube4.position.set(-0.55, -0.01, 0.28); // позиционирование куба в центре сцены
    cube4.position.set(-1.12, -0.01, -0.41);
    // cube4.rotation.set(0, 0, 0);
    scene.add(cube4);

    // Цикл анимации
    const tick = () => {
      controls.update();
      renderer.render(scene, camera);
      window.requestAnimationFrame(tick);
    };
    tick();

    // Обработчик изменения размеров окна
    const handleResize = () => {
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;
      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();
      renderer.setSize(sizes.width, sizes.height);
    };

    window.addEventListener('resize', handleResize);

    // Обработчик для двойного клика (fullscreen)
    window.addEventListener('dblclick', () => {
      if (!document.fullscreenElement) {
        canvasRef.current.requestFullscreen();
      } else {
        document.exitFullscreen();
      }
    });

    // Очистка обработчиков событий при размонтировании компонента
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="canvas" style={{}} />;
}

export default ThreeScene;

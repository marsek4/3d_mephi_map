// import React, { useEffect, useRef } from 'react';
// import * as THREE from 'three';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
// import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// function ThreeScene({ positions }) {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     // Инициализация сцены, камеры, рендера и контролов
//     const sizes = {
//       width: window.innerWidth * 0.785,
//       height: window.innerHeight * 0.785,
//     };

//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 1000);
//     camera.position.set(0, 3, 5);
//     scene.add(camera);

//     const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
//     renderer.setSize(sizes.width, sizes.height);
//     renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

//     const controls = new OrbitControls(camera, renderer.domElement);
//     controls.enableDamping = true;

//     renderer.render(scene, camera);

//     // PMREM и загрузка HDR
//     const pmremGenerator = new THREE.PMREMGenerator(renderer);
//     pmremGenerator.compileEquirectangularShader();

//     new RGBELoader()
//       .setDataType(THREE.FloatType)
//       .load('sky.hdr', (texture) => {
//         const envMap = pmremGenerator.fromEquirectangular(texture).texture;

//         scene.environment = envMap;

//         texture.dispose();
//         pmremGenerator.dispose();
//       });

//     // Загрузка модели GLTF
//     const loader = new GLTFLoader();
//     loader.load('MEPhI_night3.glb', (gltf) => {
//       scene.add(gltf.scene.children[0]);
//     });

//     // Пример куба обыкновенного
//     // const geometry1 = new THREE.BoxGeometry(0.05, 0.05, 0.05); // размеры куба (ширина, высота, глубина)
//     // const material1 = new THREE.MeshStandardMaterial({ color: 0xff0000 }); // красный цвет
//     // const cube1 = new THREE.Mesh(geometry1, material1); // создание меша
//     // cube1.position.set(0, -0.01, 0.2); // позиционирование куба в центре сцены
//     // scene.add(cube1); // добавление куба в сцену

//     // Куб под наклоном от г к спортплощадке 
//     const geometry2 = new THREE.BoxGeometry(0.7, 0.05, 0.05);
//     const material2 = new THREE.MeshStandardMaterial({ color: 0xff0000 });
//     const cube2 = new THREE.Mesh(geometry2, material2);
//     cube2.position.set(-0.55, -0.01, 0.28);
//     cube2.rotation.set(0, Math.PI / 16, 0);
//     scene.add(cube2); 

//     // Куб от спортплощадки к В корпусу
//     const geometry3 = new THREE.BoxGeometry(0.57, 0.05, 0.05);
//     const material3 = new THREE.MeshStandardMaterial({ color: 0xff0000 });
//     const cube3 = new THREE.Mesh(geometry3, material3); 
//     cube3.position.set(-0.985, -0.01, -0.04); 
//     cube3.rotation.set(0, Math.PI / 2, 0);
//     scene.add(cube3); 

//     // Дорожка к В корпусу
//     const geometry4 = new THREE.BoxGeometry(0.15, 0.05, 0.05);
//     const material4 = new THREE.MeshStandardMaterial({ color: 0xff0000 });
//     const cube4 = new THREE.Mesh(geometry4, material4); 
//     // cube4.position.set(-0.55, -0.01, 0.28); // позиционирование куба в центре сцены
//     cube4.position.set(-1.12, -0.01, -0.41);
//     // cube4.rotation.set(0, 0, 0);
//     scene.add(cube4);

//     // Цикл анимации
//     const tick = () => {
//       controls.update();
//       renderer.render(scene, camera);
//       window.requestAnimationFrame(tick);
//     };
//     tick();

//     // Обработчик изменения размеров окна
//     const handleResize = () => {
//       sizes.width = window.innerWidth;
//       sizes.height = window.innerHeight;
//       camera.aspect = sizes.width / sizes.height;
//       camera.updateProjectionMatrix();
//       renderer.setSize(sizes.width, sizes.height);
//     };

//     window.addEventListener('resize', handleResize);

//     // Обработчик для двойного клика (fullscreen)
//     window.addEventListener('dblclick', () => {
//       if (!document.fullscreenElement) {
//         canvasRef.current.requestFullscreen();
//       } else {
//         document.exitFullscreen();
//       }
//     });

//     // Очистка обработчиков событий при размонтировании компонента
//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   return (
//     <canvas ref={canvasRef} className="canvas" style={{}} />);
// }

// export default ThreeScene;
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// import React, { useEffect, useRef } from 'react';
// import * as THREE from 'three';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
// import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// function ThreeScene({ positions }) {
//   const canvasRef = useRef(null);
//   const cubeRefs = useRef({});
//   const targetPositions = useRef(positions); // Хранение целевых позиций

//   useEffect(() => {
//     const sizes = {
//       width: window.innerWidth * 0.785,
//       height: window.innerHeight * 0.785,
//     };
    
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 1000);
//     camera.position.set(0, 3, 5);
//     scene.add(camera);
//     const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
//     renderer.setSize(sizes.width, sizes.height);
//     renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
//     const controls = new OrbitControls(camera, renderer.domElement);
//     controls.enableDamping = true;

//     const pmremGenerator = new THREE.PMREMGenerator(renderer);
//     pmremGenerator.compileEquirectangularShader();

//     new RGBELoader()
//       .setDataType(THREE.FloatType)
//       .load('sky.hdr', (texture) => {
//         const envMap = pmremGenerator.fromEquirectangular(texture).texture;
//         scene.environment = envMap;
//         texture.dispose();
//         pmremGenerator.dispose();
//       });

//     const loader = new GLTFLoader();
//     loader.load('MEPhI_night3.glb', (gltf) => {
//       scene.add(gltf.scene.children[0]);
//     });

//     const createCube = (geometryParams, position, rotation) => {
//       const geometry = new THREE.BoxGeometry(...geometryParams);
//       const material = new THREE.MeshStandardMaterial({ color: 0xff0000 });
//       const cube = new THREE.Mesh(geometry, material);
//       cube.position.set(...position);
//       cube.rotation.set(...rotation);
//       scene.add(cube);
//       return cube;
//     };

//     cubeRefs.current.cube2 = createCube([0.7, 0.05, 0.05], [-0.55, -1, 0.28], [0, Math.PI / 16, 0]);
//     cubeRefs.current.cube3 = createCube([0.57, 0.05, 0.05], [-0.985, -1, -0.04], [0, Math.PI / 2, 0]);
//     cubeRefs.current.cube4 = createCube([0.15, 0.05, 0.05], [-1.12, -1, -0.41], [0, 0, 0]); //-0.026

//     const tick = () => {
//       controls.update();

//       // Плавное перемещение кубов
//       if (cubeRefs.current.cube2 && targetPositions.current.cube2) {
//         cubeRefs.current.cube2.position.lerp(new THREE.Vector3(targetPositions.current.cube2.x, targetPositions.current.cube2.y, targetPositions.current.cube2.z), 0.1);
//       }
//       if (cubeRefs.current.cube3 && targetPositions.current.cube3) {
//         cubeRefs.current.cube3.position.lerp(new THREE.Vector3(targetPositions.current.cube3.x, targetPositions.current.cube3.y, targetPositions.current.cube3.z), 0.1);
//       }
//       if (cubeRefs.current.cube4 && targetPositions.current.cube4) {
//         cubeRefs.current.cube4.position.lerp(new THREE.Vector3(targetPositions.current.cube4.x, targetPositions.current.cube4.y, targetPositions.current.cube4.z), 0.1);
//       }

//       renderer.render(scene, camera);
//       window.requestAnimationFrame(tick);
//     };
//     tick();

//     const handleResize = () => {
//       sizes.width = window.innerWidth;
//       sizes.height = window.innerHeight;
//       camera.aspect = sizes.width / sizes.height;
//       camera.updateProjectionMatrix();
//       renderer.setSize(sizes.width, sizes.height);
//     };

//     window.addEventListener('resize', handleResize);
    
//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   // Обновление целевых позиций при изменении props
//   useEffect(() => {
//     targetPositions.current = positions;
//   }, [positions]);

//   return <canvas ref={canvasRef} className="canvas" />;
// }

// export default ThreeScene;

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

function ThreeScene({ positions, animateCubes }) {
  const canvasRef = useRef(null);
  const cubeRefs = useRef({});
  const targetPositions = useRef(positions);

  useEffect(() => {
    const sizes = {
      width: window.innerWidth * 0.785,
      height: window.innerHeight * 0.785,
    };

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff); // Белый цвет
    const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 1000);
    camera.position.set(0, 3, 5);
    scene.add(camera);

    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    pmremGenerator.compileEquirectangularShader();

    new RGBELoader()
      .setDataType(THREE.FloatType)
      .load('../sky.hdr', (texture) => {
        const envMap = pmremGenerator.fromEquirectangular(texture).texture;
        scene.environment = envMap;
        texture.dispose();
        pmremGenerator.dispose();
      });

    const loader = new GLTFLoader();
    loader.load('MEPhI_night3.glb', (gltf) => {
      scene.add(gltf.scene.children[0]);
    });

    const createCube = (geometryParams, position, rotation) => {
      const geometry = new THREE.BoxGeometry(...geometryParams);
      const material = new THREE.MeshStandardMaterial({ color: 0xff0000 });
      const cube = new THREE.Mesh(geometry, material);
      cube.position.set(...position);
      cube.rotation.set(...rotation);
      scene.add(cube);
      return cube;
    };

    // cubes for route from Г to В
    cubeRefs.current.cube2 = createCube([0.7, 0.05, 0.05], [-0.55, -0.01, 0.28], [0, Math.PI / 16, 0]);
    cubeRefs.current.cube3 = createCube([0.57, 0.05, 0.05], [-0.985, -0.01, -0.04], [0, Math.PI / 2, 0]);
    cubeRefs.current.cube4 = createCube([0.15, 0.05, 0.05], [-1.12, -0.01, -0.41], [0, 0, 0]);

    // cubes for route from Г to К
    cubeRefs.current.cube2 = createCube([0.7, 0.05, 0.05], [0.55, -0.01, 0.28], [0, Math.PI - (Math.PI / 16), 0]);
    cubeRefs.current.cube2 = createCube([0.57, 0.05, 0.05], [1.3, -0.01, 0.2], [0, Math.PI / 7, 0]);
    cubeRefs.current.cube2 = createCube([0.5, 0.05, 0.05], [1.87, -0.01, 0.12], [0, -(Math.PI / 26), 0]);

    //cubes for route from Г to НЛК
    cubeRefs.current.cube2 = createCube([1.7, 0.05, 0.05], [-0.67, -0.01, -0.7], [0, -(Math.PI / 2), 0]);
    //cube form Г

    //cubes for route from Г to НЛК
    cubeRefs.current.cube2 = createCube([0.8, 0.05, 0.05], [-1.1, -0.01, -1.1], [0, -(Math.PI / 5), 0]);
    // cube

    //cubes for route from Г to Э
    cubeRefs.current.cube2 = createCube([1.2, 0.05, 0.05], [0.67, -0.01, -0.45], [0, -(Math.PI / 2), 0]);

    

    const tick = () => {
      controls.update();
      renderer.render(scene, camera);
      window.requestAnimationFrame(tick);
    };
    tick();

    const handleResize = () => {
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;
      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();
      renderer.setSize(sizes.width, sizes.height);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Пустой массив зависимостей

  // Отдельный эффект для анимации кубов, зависящий от animateCubes
  useEffect(() => {
    if (animateCubes) {
      const animate = () => {
        if (cubeRefs.current.cube2 && targetPositions.current.cube2) {
          cubeRefs.current.cube2.position.lerp(
            new THREE.Vector3(
              targetPositions.current.cube2.x,
              targetPositions.current.cube2.y,
              targetPositions.current.cube2.z
            ),
            0.1
          );
        }
        if (cubeRefs.current.cube3 && targetPositions.current.cube3) {
          cubeRefs.current.cube3.position.lerp(
            new THREE.Vector3(
              targetPositions.current.cube3.x,
              targetPositions.current.cube3.y,
              targetPositions.current.cube3.z
            ),
            0.1
          );
        }
        if (cubeRefs.current.cube4 && targetPositions.current.cube4) {
          cubeRefs.current.cube4.position.lerp(
            new THREE.Vector3(
              targetPositions.current.cube4.x,
              targetPositions.current.cube4.y,
              targetPositions.current.cube4.z
            ),
            0.1
          );
        }
        requestAnimationFrame(animate); // продолжение анимации
      };
      animate();
    }
  }, [animateCubes]); // Анимация запускается при изменении animateCubes

  // Обновление целевых позиций при изменении positions
  useEffect(() => {
    targetPositions.current = positions;
  }, [positions]);

  return <canvas ref={canvasRef} className="canvas" />;
}

export default ThreeScene;
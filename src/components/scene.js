import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';
import init from './init';
// import "./ThreeScene.css";

function ThreeScene() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const { sizes, camera, scene, canvas, controls, renderer } = init(canvasRef.current);

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
    
    // camera.position.set(-0.65, 1.2, 1.5);
    camera.position.set(0, 0.6, 1.5);

    const loader = new GLTFLoader();
    loader.load('MEPhI_night3.glb', (gltf) => {
      scene.add(gltf.scene.children[0]);
    });

    const tick = () => {
      controls.update();
      renderer.render(scene, camera);
      window.requestAnimationFrame(tick);
    };
    tick();

    renderer.setClearColor(0xffffff);

    const handleResize = () => {
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;
      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();
      renderer.setSize(sizes.width, sizes.height);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('dblclick', () => {
      if (!document.fullscreenElement) {
        canvas.requestFullscreen();
      } else {
        document.exitFullscreen();
      }
    });

    const bCampusButton = document.getElementById('b_campus');
    if (bCampusButton) {
      bCampusButton.addEventListener('click', () => {
      });
    }
    const NLKbCampusButton = document.getElementById('NLK_campus');
    if (NLKbCampusButton) {
      NLKbCampusButton.addEventListener('click', () => {
        camera.position.set(0, 0.5, -2.5);
      });
    }

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="canvas" style={{}}/>;
}

export default ThreeScene;
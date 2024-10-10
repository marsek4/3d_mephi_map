import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const init = (canvasRef) => {
    const sizes = {
        width: window.innerWidth * 0.785,
        height: window.innerHeight * 0.785,
    };

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 1000);
    camera.position.set(0, 3, 5);
    scene.add(camera);

    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Используем renderer.domElement вместо canvas
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    renderer.render(scene, camera);

    return { sizes, scene, camera, renderer, controls };
};

export default init;

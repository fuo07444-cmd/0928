let scene, camera, renderer;
let cube, cylinder, cone;

function init() {
  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(
    65,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.z = 8;

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  // --- キューブ ---
  const cubeGeometry = new THREE.BoxGeometry(2, 2, 2);
  const cubeTexture = new THREE.TextureLoader().load("textures/renga.png");
  const cubeMaterial = new THREE.MeshBasicMaterial({ map: cubeTexture });
  cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
  cube.position.x = -3;
  scene.add(cube);

  // --- 円柱 ---
  const cylGeometry = new THREE.CylinderGeometry(1, 1, 2, 32);
  const cylMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
  cylinder = new THREE.Mesh(cylGeometry, cylMaterial);
  cylinder.position.x = 0;
  scene.add(cylinder);

  // --- 円錐（Cone） ---
  const coneGeometry = new THREE.ConeGeometry(1.5, 2, 32);
  const coneMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  cone = new THREE.Mesh(coneGeometry, coneMaterial);
  cone.position.x = 3;
  scene.add(cone);

  window.addEventListener("resize", onWindowResize);
}

function animate() {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  cylinder.rotation.x += 0.01;
  cylinder.rotation.y += 0.01;

  cone.rotation.x += 0.01;
  cone.rotation.y += 0.01;

  renderer.render(scene, camera);
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

init();
animate();

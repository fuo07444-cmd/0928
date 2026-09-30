let scene, camera, renderer;
let cube, cylinder, pyramid;

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

  // --- 角錐（円錐を使って近い形に） ---
  const pyrGeometry = new THREE.ConeGeometry(1.5, 2, 4);
  const pyrMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  pyramid = new THREE.Mesh(pyrGeometry, pyrMaterial);
  pyramid.position.x = 3;
  scene.add(pyramid);

  window.addEventListener("resize", onWindowResize);
}

function animate() {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  cylinder.rotation.x += 0.01;
  cylinder.rotation.y += 0.01;

  pyramid.rotation.x += 0.01;
  pyramid.rotation.y += 0.01;

  renderer.render(scene, camera);
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

init();
animate();

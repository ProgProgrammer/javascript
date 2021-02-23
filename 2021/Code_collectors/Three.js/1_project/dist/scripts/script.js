let canvas;
let renderer;

const add_size = (element) =>
{
    element.style.maxWidth = `${window.innerWidth}px`;
    element.style.maxHeight = `${window.innerHeight}px`;
}

const add_plane = (renderer) =>
{
    renderer.setClearColor(0x000000);   // создание черного фона в рендере
    const scene = new THREE.Scene();    // создание сцены
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 5000);  // создание камеры (угол обзора; ширина и высота, которую видит камера; минимальное расстояние, от которого видит камера; максимальное расстоние, дальше которого камера не видит)
    camera.position.set(0, 0, 1000);    // позиция камеры по x, y и z
    const light = new THREE.AmbientLight(0xffffff); // цвет света
    scene.add(light);   // добавление света на сцену
    // const geometry = new THREE.PlaneGeometry(300, 300, 12, 12);     // ширина, выота, количество секторов на количество секторов
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });     // цвет материала + грани (обтягивание объекта пленкой)
    const geometry = new THREE.SphereGeometry(200, 12, 12);    // создание сферы
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
    renderer.render(scene, camera);     // добавление в рендер сцены и камеры
}

window.addEventListener("DOMContentLoaded", () =>
{
    canvas = document.querySelector(".canvas");
    add_size(canvas);
    renderer = new THREE.WebGLRenderer({ canvas: canvas });   // создание рендера в canvas
    add_plane(renderer);
});

window.addEventListener("resize", () =>
{
    add_size(canvas);
    add_plane(renderer);
});
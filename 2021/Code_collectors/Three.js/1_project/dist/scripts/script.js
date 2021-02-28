let canvas;
let renderer;
let mesh;

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
    const geometry = new THREE.SphereGeometry(300, 12, 12);    // создание сферы
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });     // цвет материала + грани (обтягивание объекта пленкой) "wireframe: true" делает объект полым
    console.log(geometry);
    /*for (let i = 0; i < geometry.faces.length; i++)
    {
        geometry.faces[i].color.setRGB(Math.random(), Math.random(), Math.random());
    }*/
    mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
    function loop()
    {
        mesh.position.z -= 1;   // изменить позицию фигуры (меша), сместив ее на 1 пиксель назад по оси z
        mesh.position.x -= 1;   // изменить позицию фигуры (меша), сместив ее на 1 пиксель влево по оси x
        mesh.rotation.y -= Math.PI / 1000;   // изменить позицию фигуры (меша), вращая ее вокруг собственной оси y против часовой стрелки
        //scene.add(mesh);
        renderer.render(scene, camera);     // добавление в рендер сцены и камеры
        requestAnimationFrame(() => { loop(); });   // запустить функцию "loop()" после полной загрузки анимации
    }
    loop();
}

window.addEventListener("load", () =>
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
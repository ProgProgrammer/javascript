window.onload = main();

function main() {
    const square_Window = document.querySelector(".square");

    square_Window.onmousedown = (event) => {
        square_Window.style.position = 'absolute';
        mouseDragAndDrop(event.pageX, event.pageY);
        document.addEventListener('mousemove', mouseMoving);

        function mouseMoving(event) {
            mouseDragAndDrop(event.pageX, event.pageY);
        }

        square_Window.onmouseup = () => {
            document.removeEventListener('mousemove', mouseMoving);
        }
    }

    function mouseDragAndDrop(pageX, pageY) {
        square_Window.style.top = pageY - square_Window.offsetHeight + 'px';
        square_Window.style.left = pageX - square_Window.offsetWidth + 'px';
    }
}
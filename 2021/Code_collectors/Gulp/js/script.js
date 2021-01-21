import buttons from "./modules/library.js";

(function()
{
    window.addEventListener('DOMContentLoaded', () =>
    {
        const body_block = document.querySelector(".block_body");
        const circle = document.querySelector(".circle");
        let top_circle = 0;
        let additional_height = 0;
        let bloker = false;

        window.addEventListener('scroll', () =>
        {
            bloker = true;
            if (window.pageYOffset > 0 && window.pageYOffset > additional_height)
            {
                additional_height = window.pageYOffset;
                circle.style.top = top_circle + window.pageYOffset + "px";
                bloker = false;
            }
            else if (window.pageYOffset < additional_height)
            {
                additional_height = window.pageYOffset;
                circle.style.top = top_circle + window.pageYOffset + "px";
                bloker = false;
            }
        });

        window.addEventListener('mouseover', (event) =>
        {
            circle.style.left = event.pageX - circle.offsetWidth / 2 + 'px';
            circle.style.top = event.pageY - circle.offsetHeight / 2 + 'px';
        });

        window.addEventListener('mousemove', (event) =>
        {
            if (bloker === false)
            {
                circle.style.left = event.pageX - circle.offsetWidth / 2 + 'px';
                circle.style.top = event.pageY - circle.offsetHeight / 2 + 'px';
                top_circle = event.pageY - circle.offsetHeight / 2;
            }
        });
        const button = document.querySelector(".button");
        buttons(button);
    });
})();

/*
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#obj {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: gray;
}
*/

/*
window.addEventListener('DOMContentLoaded', () =>
{ //все в один блок, т.к. вам же надо получить #obj ?
    const O = document.getElementById('obj');
    let X = 0;
    let Y = 0;
    let mouseX=0;
    let mouseY=0;
    window.addEventListener('mousemove', function (ev) {
        ev = window.event || ev; //если window.event определен, то это IE<9, поддерживаем
        X=ev.pageX;
        Y=ev.pageY;
        });

    const move = () =>
    {
        const p = 'px';
        console.log(X,Y);
        O.style.left = X - 15 + p;
        O.style.top = Y - 15 + p;

        setTimeout(move, 10);
    }
    move();

});
*/
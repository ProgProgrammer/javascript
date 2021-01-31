import buttons from "./modules/_library.js";

(function()
{
    window.addEventListener('DOMContentLoaded', () =>
    {
        const body_block = document.querySelector(".block_body");
        const circle = document.querySelector(".circle");
        let top_circle = 0;
        let additional_height = 0;
        let bloker = false;
        let window_width = body_block.clientWidth - circle.offsetWidth;
        let window_height = body_block.clientHeight - circle.offsetHeight;

        const cursor_moving = (event) =>
        {
            if (window_width >= event.pageX - circle.offsetWidth / 2)
            {
                circle.style.left = event.pageX - circle.offsetWidth / 2 + 'px';
                if (circle.style.opacity !== '1' &&
                    window_height >= event.pageY - circle.offsetHeight / 2)
                {
                    circle.style.opacity = '1';
                }
            }
            else
            {
                circle.style.opacity = '0';
            }
            if (window_height >= event.pageY - circle.offsetHeight / 2)
            {
                circle.style.top = event.pageY - circle.offsetHeight / 2 + 'px';
                if (circle.style.opacity !== '1' &&
                    window_width >= event.pageX - circle.offsetWidth / 2)
                {
                    circle.style.opacity = '1';
                }
            }
            else
            {
                circle.style.opacity = '0';
            }
        }

        window.addEventListener('resize', () =>
        {
            window_width = body_block.clientWidth - circle.offsetHeight;
            window_height = body_block.clientHeight - circle.offsetHeight;
        });

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
            cursor_moving(event, '1');
        });

        window.addEventListener('mouseout', (event) =>
        {
            cursor_moving(event, '0');
        });

        window.addEventListener('mousemove', (event) =>
        {
            if (bloker === false)
            {
                cursor_moving(event);
                top_circle = event.pageY - circle.offsetHeight / 2;
            }
        });
        const button = document.querySelector(".button");
        buttons(button);
    });
})();
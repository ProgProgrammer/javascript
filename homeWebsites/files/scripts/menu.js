(function()
{
    window.addEventListener('DOMContentLoaded', () =>
    {
        const burger = document.querySelector('.js-burger');
        const container = document.querySelector('.js-container');

        burger.addEventListener('click', () =>
        {
            if (!burger.classList.contains('active'))
            {
                burger.classList.add('active');
                container.classList.add('active');
            }
            else
            {
                burger.classList.remove('active');
                container.classList.remove('active');
            }
        });
    });
})();

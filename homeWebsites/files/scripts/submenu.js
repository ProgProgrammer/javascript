(function()
{
    window.addEventListener('DOMContentLoaded', () =>
    {
        const search_buttons = document.querySelectorAll('.js-icon-search');
        const search_icon = document.querySelector('.js-icon');
        const search_blocks = document.querySelectorAll('.js-search');
        const bod = document.querySelector('body');

        const num_search = search_blocks.length - 1;

        for (let i = 0; i < search_buttons.length; i++)
        {
            search_buttons[i].addEventListener('click', () =>
            {
                if (!search_blocks[i].classList.contains('active'))
                {
                    search_blocks[i].classList.add('active');
                    if (i === num_search)
                    {
                        search_icon.classList.add('active');
                    }
                }
                else
                {
                    search_blocks[i].classList.remove('active');
                    if (i === num_search)
                    {
                        search_icon.classList.remove('active');
                    }
                }
            });
        }

        bod.addEventListener('click', (event) =>
        {
            const target = event.target.closest('.js-search');
            const target_button = event.target.closest('.js-icon-search');

            if (target === null && search_blocks[num_search].classList.contains('active') && target_button === null)
            {
                search_blocks[num_search].classList.remove('active');
                search_icon.classList.remove('active');
            }
        });
    });
})();

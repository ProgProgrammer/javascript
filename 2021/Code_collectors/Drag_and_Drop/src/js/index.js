(function()
{
    const size = 10;

    window.addEventListener('DOMContentLoaded', () =>
    {
        const image_blocks = document.querySelectorAll('.container__frame');
        const blocks = document.querySelectorAll('.container__block');
        let id;

        for (let i = 0; i < image_blocks.length; i++)
        {
            image_blocks[i].addEventListener('dragstart', () =>
            {
                image_blocks[i].className += ' hold';
                setTimeout(() => (image_blocks[i].className = 'invisible'), 0);
                id = i;
            });
            image_blocks[i].addEventListener('dragend', drag_end);
        }

        for (let a = 0; a < blocks.length; a++)
        {
            blocks[a].addEventListener('dragover', drag_over);
            blocks[a].addEventListener('dragenter', drag_enter);
            blocks[a].addEventListener('dragleave', drag_leave);
            blocks[a].addEventListener('drop', drag_drop);
        }

        function drag_end()
        {
            this.className = 'container__frame';
        }

        function drag_over(event)
        {
            event.preventDefault();
            console.log('over');
        }

        function drag_enter(event)
        {
            event.preventDefault();
            this.className += ' hovered';
        }

        function drag_leave(event)
        {
            event.preventDefault();
            this.className = 'container__block';
        }

        function drag_drop(event)
        {
            event.preventDefault();
            this.className = 'container__block';
            this.append(image_blocks[id]);
        }
    });
})()
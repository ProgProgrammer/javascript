(function () {
    let mainBlock;
    let mobileBlock;
    let staticBlocks;
    let timing;
    let arrows;
    
    window.addEventListener('DOMContentLoaded', ()=>{
        mainBlock = document.querySelector(".window");
        timing = mainBlock.dataset.timing;
        mobileBlock = document.querySelector(".window-block");
        staticBlocks = document.querySelectorAll(".window-blocks");
        arrows = document.querySelectorAll(".arrow");
        if (timing !== "")
        {
            mobileBlock.style.transitionDuration = timing + "ms";
        }
        else
        {
            mobileBlock.style.transitionDuration = 500 + "ms";
        }
        createSlider(mainBlock, timing, mobileBlock, staticBlocks, arrows);
        
        window.addEventListener('resize', ()=> {
            createSlider(mainBlock, timing, mobileBlock, staticBlocks, arrows);
        });
    });
    
    function createSlider(mainBlock, timing, mobileBlock, staticBlocks, arrows) {
        let widthBlock;
        const widthMainblock = mainBlock.offsetWidth;
        const heightMainblock = mainBlock.offsetHeight;
        
        for (let i = 0; i < staticBlocks.length; i++)
        {
            staticBlocks[i].style.width = widthMainblock + "px";
            staticBlocks[i].style.height = heightMainblock + "px";
        }
        
        for (let a = 0; a < staticBlocks.length; a++)
        {
            widthBlock = staticBlocks[a].offsetWidth;
        }
        
        mobileBlock.style.width = widthBlock + "px";
        
        for (let b = 0; b < arrows.length; b++)
        {
            arrows[b].style.top = (heightMainblock / 2) - (arrows[b].offsetHeight / 2) + "px";
        }
    }
})

()
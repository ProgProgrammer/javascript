(function () {
    let mainBlock;
    let mobileBlock;
    let staticBlocks;
    let timing;
    let arrows;
    let obj = {};
    obj.widthTransform = 0;
    
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
            createSlider(mainBlock, timing, mobileBlock, arrows);
        });
        
        for (let i = 0; i < arrows.length; i++)
        {
            arrows[i].addEventListener('click', ()=> {
                staticBlocks = document.querySelectorAll(".window-blocks");
                mobileSlider(i, mobileBlock, staticBlocks, timing);
            });            
        }
    });
    
    function createSlider(mainBlock, timing, mobileBlock, arrows) {
        let widthBlock;
        staticBlocks = document.querySelectorAll(".window-blocks");
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
        
        for (let b = 0; b < arrows.length; b++)
        {
            arrows[b].style.top = (heightMainblock / 2) - (arrows[b].offsetHeight / 2) + "px";
        }
    }
    
    function mobileSlider(i, mobileBlock, staticBlocks, timing) {
        let htmlTags;
        if (i === 0)
        {
            htmlTags = staticBlocks[staticBlocks.length-1].outerHTML;
            mobileBlock.insertAdjacentHTML("afterbegin", htmlTags);
            mobileBlock.style.left = "-" + staticBlocks[0].offsetWidth + "px";
            
            if (staticBlocks.length > 1)
            {
                staticBlocks[staticBlocks.length-1].remove();
            }
            
            obj.widthTransform += staticBlocks[0].offsetWidth;
            mobileBlock.style.transform = "translate3d(" + staticBlocks[0].offsetWidth + "px, 0px, 0px)";
            console.log(mobileBlock.style.left);
        }
        else
        {
            htmlTags = staticBlocks[0].outerHTML;
            mobileBlock.insertAdjacentHTML("beforeend", htmlTags);
            if (staticBlocks.length > 1)
            {
                staticBlocks[0].remove();
            }
            
            obj.widthTransform -= staticBlocks[0].offsetWidth;
            mobileBlock.style.transform = "translate3d(" + staticBlocks[0].offsetWidth + "px, 0px, 0px)";
        }
    }
})

()
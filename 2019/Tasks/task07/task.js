(function () {
    let windowSlider;
    let slide;
    let timing;
    let arrows;
    let windowWidth;
    let windowHeight;
    
    window.addEventListener('DOMContentLoaded', ()=> {
        windowSlider = document.querySelector(".window");
        slide = document.querySelector(".window-blocks");
        timing = slide.dataset.timing;
        arrows = document.querySelectorAll(".arrow");
        windowWidth = windowSlider.offsetWidth;
        slide.style.width = windowWidth + "px";
        windowHeight = windowSlider.offsetHeight;
        slide.style.height = windowHeight + "px";
        heightArrows(arrows, windowHeight);
        
        window.addEventListener('resize', ()=> {
            windowWidth = windowSlider.offsetWidth;
            slide.style.width = windowWidth + "px";
            windowHeight = windowSlider.offsetHeight;
            slide.style.height = windowHeight + "px";
            heightArrows(arrows, windowHeight);
        });
        
        function heightArrows(arrows, windowHeight) {
            let partHeight;
            
            for(let i = 0; i < arrows.length; i++)
            {
                partHeight = arrows[i].offsetHeight;
                arrows[i].style.top = (windowHeight/2 - partHeight/2) + "px";
            }
        }
    });
})

()
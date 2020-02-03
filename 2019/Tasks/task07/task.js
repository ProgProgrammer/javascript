(function () {
    let windowSlider;
    let timing;
    let arrows;
    let obj = {};
    obj.windowWidth;
    obj.windowHeight;
    obj.slides;
    
    window.addEventListener('DOMContentLoaded', ()=> {
        windowSlider = document.querySelector(".window");
        obj.slides = document.querySelectorAll(".window-blocks");
        timing = windowSlider.dataset.timing;
        arrows = document.querySelectorAll(".arrow");
        obj.windowWidth = windowSlider.offsetWidth;
        obj.windowHeight = windowSlider.offsetHeight;
        widthHeightWindow(obj.windowWidth, obj.windowHeight);
        heightArrows(obj.windowHeight);
        createSliders(obj.windowWidth);
        
        window.addEventListener('resize', ()=> {
            obj.windowWidth = windowSlider.offsetWidth;
            obj.windowHeight = windowSlider.offsetHeight;
            obj.slides = document.querySelectorAll(".window-blocks");
            widthHeightWindow(obj.windowWidth, obj.windowHeight);
            heightArrows(obj.windowHeight);
        });
        
        function widthHeightWindow(windowWidth, windowHeight) {
            for (let i = 0; i < obj.slides.length; i++)
            {
                obj.slides[i].style.width = windowWidth + "px";
                obj.slides[i].style.height = windowHeight + "px";
            }            
        }
        
        function heightArrows(windowHeight) {
            let partHeight;
            
            for(let i = 0; i < arrows.length; i++)
            {
                partHeight = arrows[i].offsetHeight;
                arrows[i].style.top = (windowHeight/2 - partHeight/2) + "px";
            }
        }
        
        function createSliders(windowWidth) {  
            for (let a = 0; a < 2; a++)
            {
                windowSlider.insertAdjacentHTML("afterbegin", obj.slides[0].outerHTML);
            }
            const slides = document.querySelectorAll(".window-blocks");
            slides[0].style.transform = "translate3d(-" + windowWidth + "px, 0px, 0px)";
            slides[2].style.transform = "translate3d(" + windowWidth + "px, 0px, 0px)";
            
            setTimeout(timingSlides, timing, slides);
        }
        
        function timingSlides(slides) {
            if (timing !== "")
            {
                for (let i = 0; i < slides.length; i++)
                {
                    slides[i].style.transitionDuration = timing + "ms";
                }
            }   
            else
            {
                for (let i = 0; i < slides.length; i++)
                {
                    slides[i].style.transitionDuration = 500 + "ms";
                }
            }
        }
    });
})

()
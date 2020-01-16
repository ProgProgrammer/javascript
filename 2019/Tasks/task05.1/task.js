window.onload = main;
//window.addEventListener('resize', main);

function main() {
    const windowBlock = document.querySelector(".window");
    const block = document.querySelector(".block");
    const marginBlock = 10;
    const obj = {};
    obj.top = 'KeyW';
    obj.left = 'KeyA';
    obj.right = 'KeyD';
    obj.bottom = 'KeyS';
    
    document.onkeypress = (e) => {
        return movingObject(windowBlock, block, obj, marginBlock, e);
    }
}

function movingObject(windowBlock, block, obj, marginBlock, e) {
    const marginPx = windowLimits(windowBlock, block, obj, marginBlock, e);
    console.log(marginPx);
    if (marginPx > 0 &&
        e.code === obj.top) {
        block.style.marginTop = block.offsetTop - marginPx + "px";
        return;
    }
    else if (marginPx > 0 &&
             e.code === obj.bottom)
    {
        block.style.marginTop = block.offsetTop + marginPx + "px";
        return;
    }
    return;
}

function windowLimits(windowBlock, block, obj, marginBlock, e) {
    const windowWidth = windowBlock.clientWidth;
    const windowHeight = windowBlock.clientHeight;
    const blockWidth = block.offsetWidth;
    const blockHeight = block.offsetHeight;
    console.log(e.code);
    if (block.offsetTop > 0 &&
        e.code === obj.top) 
    {
        console.log(block.offsetTop);
        if (block.offsetTop >= marginBlock) {
            console.log("10");
            return marginBlock;
        }
        else if (block.offsetTop < marginBlock)
        {
            console.log("<10");
            return block.offsetTop;
        }
    }
    else if (windowHeight - (blockHeight + block.offsetTop) !== 0 &&
             e.code === obj.bottom)
    {
        if (windowHeight - (blockHeight + block.offsetTop) >= marginBlock) {
            console.log("10");
            return marginBlock;
        }
        else if (windowHeight - (blockHeight + block.offsetTop) < marginBlock &&
                 windowHeight - (blockHeight + block.offsetTop) >= 0)
        {
            console.log("<10");
            return windowHeight - (blockHeight + block.offsetTop);
        }
    }
    else
    {
        return;
    }
}
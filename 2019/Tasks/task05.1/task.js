window.onload = main;

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
        //block.style.position = "absolute";
        obj.keypress = e.code;
        movingObject(e, block, marginBlock, obj, windowBlock);
    }
}

function movingObject(e, block, marginBlock, obj, windowBlock) {
    const windowWidth = windowBlock.clientWidth;
    const windowHeight = windowBlock.clientHeight;
    if (e.code === obj.top || e.code === obj.bottom)
    {
        switch(e.code)
        {
            case obj.top:
                const resultFunction = checkDistance();
                switch(resultFunction)
                {
                    case true:
                        block.style.top = block.offsetTop - marginBlock + "px";
                        break;

                    default:
                        block.style.top = block.offsetTop - resultFunction + "px";
                }  
            
            case obj.bottom:
                const resultFunction = checkDistance();
                switch(resultFunction)
                {
                    case true:
                        block.style.top = block.offsetTop + marginBlock + "px";
                        break;

                    default:
                        block.style.top = block.offsetTop + resultFunction + "px";
                }
        }
    }
    else if (e.code === obj.left || e.code === obj.right)
    {
        const resultFunction = checkDistance();
        switch(e.code)
        {
            case obj.left:
                const resultFunction = checkDistance();
                switch(resultFunction)
                {
                    case true:
                        block.style.top = block.offsetTop - marginBlock + "px";
                        break;

                    default:
                        block.style.top = block.offsetTop - resultFunction + "px";
                }  
            
            case obj.right:
                const resultFunction = checkDistance();
                switch(resultFunction)
                {
                    case true:
                        block.style.top = block.offsetTop + marginBlock + "px";
                        break;

                    default:
                        block.style.top = block.offsetTop + resultFunction + "px";
                }
        }
    }
}

/*function movingObject(windowBlock, block, obj, marginBlock, e, blockOffset, windowZise) {
    const marginPx = windowLimits(windowBlock, block, obj, marginBlock, e, blockOffset, windowZise);
    if (marginPx > 0 &&
        e.code === obj.top || e.code === obj.left) {
        switch(e.code) {
            case obj.top:
                block.style.marginTop = block.offsetTop - marginPx + "px";
                return;
            default:
                block.style.marginLeft = block.offsetLeft - marginPx + "px";
                return;
        }
        return;
    }
    else if (marginPx > 0 &&
             e.code === obj.bottom || e.code === obj.right)
    {
        switch(e.code) {
            case obj.bottom:
                block.style.marginTop = block.offsetTop + marginPx + "px";
                return;
            default:
                block.style.marginLeft = block.offsetLeft + marginPx + "px";
                return;
        }
        return;
    }
    return;
}

function windowLimits(windowBlock, block, obj, marginBlock, e, blockOffset, windowZise) {
    const blockHeight = block.offsetHeight;
    if (blockOffset > 0 &&
        e.code === obj.top || e.code === obj.left) 
    {
        if (blockOffset >= marginBlock) {
            return marginBlock;
        }
        else if (blockOffset < marginBlock)
        {
            return blockOffset;
        }
    }
    else if (windowZise - (blockHeight + blockOffset) !== 0 &&
             e.code === obj.bottom || e.code === obj.right)
    {
        if (windowZise - (blockHeight + blockOffset) >= marginBlock) {
            return marginBlock;
        }
        else if (windowZise - (blockHeight + blockOffset) < marginBlock &&
                 windowZise - (blockHeight + blockOffset) >= 0)
        {
            return windowZise - (blockHeight + blockOffset);
        }
    }
    else
    {
        return;
    }
}*/
window.onload = main;

function main() {
    const windowBlock = document.querySelector(".window");
    const block = document.querySelector(".block");
    const marginBlock = 10;
    const blockWidth = block.offsetWidth;
    const blockHeight = block.offsetHeight;
    const obj = {};
    obj.top = 'KeyW';
    obj.left = 'KeyA';
    obj.right = 'KeyD';
    obj.bottom = 'KeyS';
    
    document.onkeypress = (e) => {
        obj.keypress = e.code;
        const windowWidth = windowBlock.clientWidth;
        const windowHeight = windowBlock.clientHeight;
        return movingObject(e, block, marginBlock, obj, windowWidth, windowHeight, blockWidth, blockHeight);
    }
}

function movingObject(e, block, marginBlock, obj, windowWidth, windowHeight, blockWidth, blockHeight) {
    let resultFunction;
    if (e.code === obj.top || e.code === obj.bottom)
    {
        switch(e.code)
        {
            case obj.top:
                resultFunction = checkDistance(marginBlock, block, block.offsetTop, windowHeight, blockHeight);
                switch(resultFunction)
                {
                    case true:
                        block.style.top = block.offsetTop - marginBlock + "px";
                        block.style.position = "absolute";
                        break;

                    default:
                        block.style.top = block.offsetTop - resultFunction + "px";
                        block.style.position = "absolute";
                        break;
                } 
                break;
            
            case obj.bottom:
                resultFunction = checkDistance(marginBlock, block, "bottom", windowHeight, blockHeight);
                switch(resultFunction)
                {
                    case true:
                        block.style.top = block.offsetTop + marginBlock + "px";
                        block.style.position = "absolute";
                        break;

                    default:
                        block.style.top = block.offsetTop + resultFunction + "px";
                        block.style.position = "absolute";
                        break;
                }
                break;
        }
    }
    else if (e.code === obj.left || e.code === obj.right)
    {
        switch(e.code)
        {
            case obj.left:
                resultFunction = checkDistance(marginBlock, block, block.offsetLeft, windowWidth, blockWidth);
                switch(resultFunction)
                {
                    case true:
                        block.style.left = block.offsetLeft - marginBlock + "px";
                        block.style.position = "absolute";
                        break;

                    default:
                        block.style.left = block.offsetLeft - resultFunction + "px";
                        block.style.position = "absolute";
                        break;
                } 
                break;
            
            case obj.right:
                resultFunction = checkDistance(marginBlock, block, "right", windowWidth, blockWidth);
                switch(resultFunction)
                {
                    case true:
                        block.style.left = block.offsetLeft + marginBlock + "px";
                        block.style.position = "absolute";
                        break;

                    default:
                        block.style.left = block.offsetLeft + resultFunction + "px";
                        block.style.position = "absolute";
                        break;
                }
                break;
        }
    }
}

function checkDistance(marginBlock, block, blockOffset, windowSize, blockSize) {
    if (blockOffset === "bottom" || blockOffset === "right")
    {
        blockOffset = checkDistanceBottomRight(marginBlock, block, blockOffset, windowSize, blockSize);
    }
    
    if (blockOffset >= marginBlock)
    {
        return true;
    }
    else if (windowSize - (blockOffset + blockSize) < marginBlock)
    {
        const result = windowSize - (blockOffset + blockSize);
        return result;
    }
    else if (blockOffset < marginBlock)
    {
        return blockOffset;
    }
}

function checkDistanceBottomRight(marginBlock, block, blockOffset, windowSize, blockSize) {
    let result;
    /*console.log(windowSize);
    console.log(block.offsetTop);
    console.log(blockSize);*/
    if (blockOffset === "bottom")
    {
        result = windowSize - (block.offsetTop + blockSize);
        console.log(result);
        return result;
    }
    else if (blockOffset === "right")
    {
        result = windowSize - (block.offsetLeft + blockSize);
        console.log(result);
        return result;
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
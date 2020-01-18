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
        const windowWidth = windowBlock.clientWidth;
        const windowHeight = windowBlock.clientHeight;
        return movingObject(e, block, marginBlock, obj, windowWidth, windowHeight, blockWidth, blockHeight);
    }
}

function movingObject(e, block, marginBlock, obj, windowWidth, windowHeight, blockWidth, blockHeight) {
    let resultFunction;
    switch(e.code)
    {
        case obj.top:
            resultFunction = checkDistance(marginBlock, block, block.offsetTop, windowHeight, blockHeight);
            switch(resultFunction)
            {
                case true:
                    block.style.top = block.offsetTop - marginBlock + "px";
                    break;

                default:
                    block.style.top = block.offsetTop - resultFunction + "px";
                    break;
            }
            block.style.position = "absolute"; 
            break;
            
        case obj.bottom:
            resultFunction = checkDistance(marginBlock, block, "bottom", windowHeight, blockHeight);
            switch(resultFunction)
            {
                case true:
                    block.style.top = block.offsetTop + marginBlock + "px";
                    break;

                default:
                    block.style.top = block.offsetTop + resultFunction + "px";
                    break;
            }
            block.style.position = "absolute"; 
            break;
        
        case obj.left:
            resultFunction = checkDistance(marginBlock, block, block.offsetLeft, windowWidth, blockWidth);
            switch(resultFunction)
            {
                case true:
                    block.style.left = block.offsetLeft - marginBlock + "px";
                    break;

                default:
                    block.style.left = block.offsetLeft - resultFunction + "px";
                    break;
            } 
            block.style.position = "absolute"; 
            break;
            
        case obj.right:
            resultFunction = checkDistance(marginBlock, block, "right", windowWidth, blockWidth);
            switch(resultFunction)
            {
                case true:
                    block.style.left = block.offsetLeft + marginBlock + "px";
                    break;

                default:
                    block.style.left = block.offsetLeft + resultFunction + "px";
                    break;
            }
            block.style.position = "absolute"; 
            break;
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
    if (blockOffset === "bottom")
    {
        result = windowSize - (block.offsetTop + blockSize);
        return result;
    }
    else if (blockOffset === "right")
    {
        result = windowSize - (block.offsetLeft + blockSize);
        return result;
    }
}
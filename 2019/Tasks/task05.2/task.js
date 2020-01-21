(function() 
{ 
    const marginBlock = 10;
    const obj = {};
    obj.top = 'KeyW';
    obj.left = 'KeyA';
    obj.right = 'KeyD';
    obj.bottom = 'KeyS';
    let windowWidth;
    let windowHeight;
    let blockDown;
     
    window.addEventListener('load', function main() 
    {
        const windowBlock = document.querySelector(".window");
        const block = document.querySelector(".block");
        blockDown = document.querySelector(".block-down")
        const blockWidth = block.offsetWidth;
        const blockHeight = block.offsetHeight;
        windowWidth = windowBlock.clientWidth;
        windowHeight = windowBlock.clientHeight;
        
        window.addEventListener('resize', () => 
        {
            windowWidth = windowBlock.clientWidth;
            windowHeight = windowBlock.clientHeight;
        });
        

        document.addEventListener('keypress', (e) => {
            return movingObject(e, block, marginBlock, obj, windowWidth, windowHeight, blockWidth, blockHeight, blockDown);
        });
    });

    function movingObject(e, block, marginBlock, obj, windowWidth, windowHeight, blockWidth, blockHeight, blockDown) {
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
                resultFunction = checkDistance(marginBlock, block, "bottom", windowHeight, blockHeight, blockDown, blockWidth);
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
                resultFunction = checkDistance(marginBlock, block, "right", windowWidth, blockWidth, blockDown, blockWidth);
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

    function checkDistance(marginBlock, block, blockOffset, windowSize, blockSize, blockDown, blockWidth) {
        if (blockOffset === "bottom" || blockOffset === "right")
        {
            blockOffset = checkDistanceBottomRight(marginBlock, block, blockOffset, windowSize, blockSize, blockDown, blockWidth);
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

    function checkDistanceBottomRight(marginBlock, block, blockOffset, windowSize, blockSize, blockDown, blockWidth) {
        let result;
        if (blockOffset === "bottom")
        {
            result = intersectionWithObject(block, windowSize, blockSize, blockDown, blockWidth, blockOffset) - (block.offsetTop + blockSize);
        }
        else if (blockOffset === "right")
        {
            result = intersectionWithObject(block, windowSize, blockSize, blockDown, blockWidth, blockOffset) - (block.offsetLeft + blockSize);
        }
        return result;
    }
    
    function intersectionWithObject(block, windowSize, blockSize, blockDown, blockWidth, button) {
        const distanceUpBlockTop = block.offsetTop;
        const distanceUpBlockLeft = block.offsetLeft;
        const leftUpBlockWidth = distanceUpBlockLeft + blockWidth;
        const distanceDownBlockLeft = blockDown.offsetLeft;
        const leftDownBlockWidth = distanceDownBlockLeft + blockDown.offsetWidth;
        let distance;
        
        if (button === "bottom" &&
            (distanceDownBlockLeft > distanceUpBlockLeft && distanceDownBlockLeft < leftUpBlockWidth ||
            leftDownBlockWidth > distanceUpBlockLeft && leftDownBlockWidth < leftUpBlockWidth))
        {
            distance = blockDown.offsetTop;
            return distance;
        }
        else if (button === "right" && distanceUpBlockTop > blockDown.offsetTop - blockDown.offsetHeight &&
                 distanceDownBlockLeft - (distanceUpBlockLeft + blockWidth) <= marginBlock)
        {
            return blockDown.offsetLeft;
        }
        else if (button === "right" && distanceUpBlockTop > blockDown.offsetTop - blockDown.offsetHeight &&
                 distanceDownBlockLeft <= distanceUpBlockLeft + blockWidth) 
        {
            distance = block.offsetLeft + block.offsetWidth;
            return distance;  
        }
        else
        {
            return windowSize;
        }
    }
})

()
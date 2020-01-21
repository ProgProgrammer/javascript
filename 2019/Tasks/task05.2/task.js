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
                resultFunction = checkDistance(marginBlock, block, "left", windowWidth, blockWidth, blockDown, blockWidth);
                switch(resultFunction)
                {
                    case true:
                        console.log(block.offsetLeft);
                        block.style.left = block.offsetLeft - marginBlock + "px";
                        break;

                    default:
                        console.log("hello");
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
        if (blockOffset === "bottom" || blockOffset === "left" || blockOffset === "right")
        {
            blockOffset = checkDistanceBottomLeftRight(marginBlock, block, blockOffset, windowSize, blockSize, blockDown, blockWidth);
        }
        console.log(blockOffset);
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
            console.log(blockOffset);
            return blockOffset;
        }
    }

    function checkDistanceBottomLeftRight(marginBlock, block, blockOffset, windowSize, blockSize, blockDown, blockWidth) {
        let result;
        if (blockOffset === "bottom")
        {
            result = intersectionWithObject(block, windowSize, blockSize, blockDown, blockWidth, blockOffset) - (block.offsetTop + blockSize);
        }
        else if (blockOffset === "right")
        {
            result = intersectionWithObject(block, windowSize, blockSize, blockDown, blockWidth, blockOffset) - (block.offsetLeft + blockSize);
        }
        else if (blockOffset === "left")
        {
            result = intersectionWithObject(block, windowSize, blockSize, blockDown, blockWidth, blockOffset);
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
                 distanceDownBlockLeft - leftUpBlockWidth <= marginBlock &&
                 distanceDownBlockLeft - leftUpBlockWidth >= 0)
        {
            return blockDown.offsetLeft;
        }
        else if (button === "right" && distanceUpBlockTop > blockDown.offsetTop - blockDown.offsetHeight &&
                 distanceDownBlockLeft <= leftUpBlockWidth &&
                 distanceDownBlockLeft - leftUpBlockWidth >= 0) 
        {
            distance = block.offsetLeft + block.offsetWidth;
            return distance;  
        }
        else if (button === "left" && distanceUpBlockTop > blockDown.offsetTop - blockDown.offsetHeight &&
                 (leftUpBlockWidth - leftDownBlockWidth) - blockDown.offsetWidth <= marginBlock &&
                 (leftUpBlockWidth - leftDownBlockWidth) - blockDown.offsetWidth >= 0)
        {
            return distanceUpBlockLeft - leftDownBlockWidth;
        }
        else if (button === "left" && distanceUpBlockTop > blockDown.offsetTop - blockDown.offsetHeight &&
                 leftDownBlockWidth >= distanceUpBlockLeft && distanceUpBlockLeft >= 0) 
        {
            distance = block.offsetLeft;
            return distance;  
        }
        else if (button === "left" && distanceUpBlockTop <= blockDown.offsetTop &&
                 leftDownBlockWidth >= distanceUpBlockLeft && distanceUpBlockLeft >= 0) 
        {
            distance = block.offsetLeft;
            return distance;  
        }
        else
        {
            return windowSize;
        }
    }
})

()
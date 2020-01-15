window.onload = main;
//window.addEventListener('resize', main);

function main() {
    const windowBlock = document.querySelector(".window");
    const block = document.querySelector(".block");
    const marginBlock = 10;
    const obj = {};
    obj.topLowercase = 119;
    obj.leftLowercase = 97;
    obj.rightLowercase = 100;
    obj.bottomLowercase = 115;
    obj.topUppercase = 87;
    obj.leftUppercase = 65;
    obj.rightUppercase = 68;
    obj.bottomUppercase = 83;
    
    document.onkeypress = (e) => {
        console.log("e");
        return movingObject(windowBlock, block, obj, marginBlock, e);
    }
}

function movingObject(windowBlock, block, obj, marginBlock, e) {
    const marginPx = windowLimits(windowBlock, block, obj, marginBlock, e);
    if (marginPx > 0 &&
        e.keyCode === obj.topLowercase || e.keyCode === obj.topUppercase) {
        block.style.marginTop = block.offsetTop - marginPx + "px";
        return;
    }
    else if (marginPx > 0 &&
             e.keyCode === obj.bottomLowercase || e.keyCode === obj.bottomUppercas)
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
    if (windowHeight - (blockHeight + block.offsetTop) !== 0 && block.offsetTop > 0 &&
        e.keyCode === obj.topLowercase || e.keyCode === obj.topUppercase ||
        e.keyCode === obj.bottomLowercase || e.keyCode === obj.bottomUppercase) 
    {
        console.log(block.offsetTop);
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
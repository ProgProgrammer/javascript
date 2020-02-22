export const mobileSliderObject = {};

mobileSliderObject.mobileSlider = (i, mobileBlock, staticBlocks, timing, mainBlock, obj) =>
{
    let htmlTags;
    const trafficSlider = mainBlock.dataset.trafficSlider;

    if (trafficSlider === "true")
    {
        mainBlock.dataset.trafficSlider = false;
    }
    else
    {
        return;
    }

    if (i === 0)
    {
        htmlTags = staticBlocks[staticBlocks.length-1].outerHTML;
        mobileBlock.insertAdjacentHTML("afterbegin", htmlTags);
        setTimeout(mobileSliderObject.deleteTag, timing, staticBlocks, i, mobileBlock, mainBlock, obj);

        if (/-/.test(mobileBlock.style.transform) === true)
        {
            obj.widthTransform -= staticBlocks[0].offsetWidth;
            mobileBlock.style.left = obj.widthTransform + "px";
            mobileBlock.style.transform = "translate3d(-" + obj.widthTransform + "px, 0px, 0px)";
        }
        else
        {
            obj.widthTransform += staticBlocks[0].offsetWidth;
            mobileBlock.style.left = "-" + obj.widthTransform + "px";
            //console.log(obj.widthTransform);
            mobileBlock.style.transform = "translate3d(" + obj.widthTransform + "px, 0px, 0px)";
        }

    }
    else
    {
        htmlTags = staticBlocks[0].outerHTML;
        mobileBlock.insertAdjacentHTML("beforeend", htmlTags);
        setTimeout(mobileSliderObject.deleteTag, timing, staticBlocks, i, mobileBlock, mainBlock, obj);
        if (obj.widthTransform > 0 && (/-/.test(mobileBlock.style.transform) === false))
        {
            console.log(obj.widthTransform);
            obj.widthTransform -= staticBlocks[0].offsetWidth;
            console.log(obj.widthTransform);
            mobileBlock.style.left = "-" + (obj.widthTransform + staticBlocks[0].offsetWidth) + "px";
            mobileBlock.style.transform = "translate3d(" + obj.widthTransform + "px, 0px, 0px)";
        }
        else
        {
            console.log(mobileBlock.style.transform);
            console.log(obj.widthTransform);
            obj.widthTransform += staticBlocks[0].offsetWidth;
            console.log(obj.widthTransform);
            mobileBlock.style.left = (obj.widthTransform - staticBlocks[0].offsetWidth) + "px";
            mobileBlock.style.transform = "translate3d(-" + obj.widthTransform + "px, 0px, 0px)";
        }
    }
}

mobileSliderObject.deleteTag = (staticBlocks, i, mobileBlock, mainBlock, obj) =>
{
    staticBlocks = document.querySelectorAll(".window-blocks");
    mainBlock.dataset.trafficSlider = true;
    if (staticBlocks.length > 1 && i === 0)
    {
        staticBlocks[staticBlocks.length-1].remove();
        //console.log(staticBlocks);
    }
    else if (obj.staticBlocksLength === 1 && i === 1 && staticBlocks[2] !== undefined && staticBlocks!== null)
    {
        staticBlocks[2].remove();
        console.log(i);
    }
    else if (obj.staticBlocksLength > 1)
    {
        staticBlocks[0].remove();
        console.log(i);
        console.log(mobileBlock.style.left);
        console.log(/-/.test(mobileBlock.style.left));

        if (/-/.test(mobileBlock.style.left) === true)
        {
            mobileBlock.style.left = "-" + (obj.widthTransform + staticBlocks[0].offsetWidth) + "px";
            console.log(mobileBlock.style.left);
        }
        else
        {
            mobileBlock.style.left = (obj.widthTransform + staticBlocks[0].offsetWidth) + "px";
            console.log(mobileBlock.style.left);
        }
    }
    else
    {
        return;
    }
}
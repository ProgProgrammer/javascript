window.addEventListener('load', autoSizeAllPage);
window.addEventListener('resize', autoSizeAllPage);

function autoSizeAllPage() {
    const contents = {};
    contents.blocks = document.getElementsByClassName("col-xs-4");
    contents.images = document.getElementsByTagName("img");
    contents.texts = document.getElementsByClassName("caption");
    for (let property in contents) {
        autoSizeBlocks(contents[property]);
    }
    const buttons = document.getElementsByClassName("btn-primary");
    buttonAlignment(contents.texts, buttons);
}

function autoSizeBlocks(blocks) {
    const blocks_height = getMaxHeight(blocks);
    applyHeight(blocks_height, blocks);
}

function getMaxHeight(blocks) {
    let max_height = blocks[0].offsetHeight;
    for (let block = 0; block < blocks.length; block++) {
        if (blocks[block].offsetHeight > max_height) {
            max_height = blocks[block].offsetHeight;
        }
    }
    return max_height;
}

function applyHeight(blocks_height, blocks) {
    for (let i = 0; i < blocks.length; i++) {
        blocks[i].style.height = blocks_height + "px";
    }
}

function buttonAlignment(texts, buttons) {
    for (let button = 0; button < texts.length; button++) {
        texts[button].style.position = "relative";
        const button_height = buttons[button].offsetHeight;
        texts[button].style.paddingBottom = button_height + "px";
        buttons[button].style = "position: absolute; bottom: 0;";
    }
}

window.onload = function() {
    const blocks = document.getElementsByClassName("col-xs-4");
    const images = document.getElementsByTagName("img");
    const texts = document.getElementsByClassName("caption");
    resizeBlocks(blocks, images, texts);
}

function resizeBlocks(blocks, images, texts) {
    let contents = {};
    contents.blocks = blocks;
    contents.images = images;
    contents.texts = texts;
    for (let property in contents) {
        const blocks_height = getMaxHeight(contents[property]);
        appropriation_styles(blocks_height, contents[property]);
    }
}

function getMaxHeight(blocks) {
    let max = blocks[0].offsetHeight;
	for (let block = 0; block < blocks.length; block++) {
		if(blocks[block].offsetHeight > max) {
    	   max = blocks[block].offsetHeight;
        }
    }
    return max;
}

function appropriation_styles(blocks_height, blocks) {
    for (let i = 0; i < blocks.length; i++) {
        blocks[i].style.height = blocks_height + "px";
    }
}
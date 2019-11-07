window.onload = function() {
    const blocks = document.getElementsByClassName("col-xs-4");
    const images = document.getElementsByTagName("img");
    const texts = document.getElementsByClassName("caption");
    check_blocks(blocks, images, texts);
}

function check_blocks(blocks, images, texts) {
    let contents = {};
    contents.blocks = blocks;
    contents.images = images;
    contents.texts = texts;
    for (let content in contents) {
        let max = contents[content][0].offsetHeight;
        const blocks_height = check_height(max, contents[content]);
        appropriation_styles(blocks_height, contents[content]);
    }
}

function check_height(max, blocks) {
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
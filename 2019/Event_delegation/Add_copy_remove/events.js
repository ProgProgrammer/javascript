window.addEventListener("load", main);

function main() {
    const input_text = document.querySelector(".main-top-input");
    const button = document.querySelector(".main-top-button");
    const main_blocks = document.querySelector(".main-blocks");
    let clicks = -1;

    button.addEventListener('click', function () {
        addText(input_text, button, main_blocks);
    });

    main_blocks.addEventListener('click', function (event) {
        const target = event.target;
        if (target.classList.contains("main-blocks-block-copy")) {
            clicks++;
            clicks = clickCounter(main_blocks, target, clicks);
            console.log(clicks);
            copyBlock(main_blocks, target, clicks);
        } else if (target.classList.contains("main-blocks-block-remove")) {
            removeBlock(main_blocks, target);
        }
    });
}

function addText(input_text, button, main_blocks) {
    if (input_text.value == "") {
        input_text.classList.add("color-red");
    } else if (input_text.value != "") {
        const block = main_blocks.querySelector(".main-blocks-block");
        if (input_text.classList.contains("color-red")) {
            input_text.classList.remove("color-red");
        }
        const clone_block = block.cloneNode(true);
        main_blocks.append(clone_block);
        const text = clone_block.querySelector(".main-blocks-block-line-p");
        text.textContent = input_text.value;
        clone_block.classList.remove("display-none");
    }
}

function clickCounter(main_blocks, target, clicks) {
    const blocks = main_blocks.getElementsByClassName("main-blocks-block");
    for (let i = 0; i < blocks.length; i++) {
        if (blocks[i].querySelector(".main-blocks-block-copy") == target) {
            let text_block = blocks[i].querySelector(".main-blocks-block-line-p");
            text_block = text_block.textContent;
            text_block = text_block.replace(/[a-zA-ZА-Яа-яЁё\s]/g, "").replace(/ - /g, "").replace(/copy/g, "").replace(/[(]/g, "").replace(/[)]/g, "");
            text_block == Number(text_block);
            console.log(text_block);
            const max_number = maxNumber(blocks, text_block);
            console.log(Number(max_number) + 1);
            if (text_block < Number(max_number)) {
                console.log(max_number + 1);
                return Number(max_number) + 1;
            } else if (text_block == Number(max_number)) {
                return Number(max_number) + 1;
            } else {
                return clicks;
            }
        }
    }
}

function maxNumber(blocks, number) {
    console.log(number);
    for (let i = 0; i < blocks.length; i++) {
        let text_block = blocks[i].querySelector(".main-blocks-block-line-p");
        text_block = text_block.textContent;
        text_block = text_block.replace(/copy/g, "").replace(/[(]/g, "").replace(/[)]/g, "").replace(/ - /g, "").replace(/[a-zA-ZА-Яа-яЁё\s]/g, "");
        text_block == Number(text_block);
        console.log(text_block);
        if (text_block > number) {
            number = Number(text_block);
            console.log(number);
        }
        if (i == blocks.length - 1) {
            console.log(number);
            return number;
        }
    }
}

function copyBlock(main_blocks, target, clicks) {
    const block = target.closest(".main-blocks-block");
    let text_block = block.querySelector(".main-blocks-block-line-p");
    text_block = text_block.textContent;
    const clone_block = block.cloneNode(true);
    main_blocks.append(clone_block);
    const text = clone_block.querySelector(".main-blocks-block-line-p");
    const text_index = text.textContent;
    if (clicks >= 1) {
        if (text_index.indexOf("copy")) {
            text_block = text_index.replace(/ - copy/g, "");
            text_block = text_block.replace(/[(][0-9][)]/g, "");
            console.log(text_block);
            text.textContent = text_block + " - copy(" + clicks + ")";
        } else {
            text.textContent = text_block + " - copy";
        }
    } else {
        text.textContent = text_block + " - copy";
    }
}

function removeBlock(main_blocks, target) {
    const block = target.closest(".main-blocks-block");
    block.remove();
}

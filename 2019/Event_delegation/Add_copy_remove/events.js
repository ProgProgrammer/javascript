window.addEventListener("load", main);

function main() {
    let main_object = {};
    main_object.input_text = document.querySelector(".main-top-input");
    main_object.button = document.querySelector(".main-top-button");
    main_object.main_blocks = document.querySelector(".main-blocks");
    main_object.clicks = 0;
    main_object.clicks_add = 1;

    main_object.button.addEventListener('click', function () {
        //main_object.clicks_add++;
        addText(main_object);
    });

    main_object.main_blocks.addEventListener('click', function (event) {
        main_object.target = event.target;
        if (main_object.target.classList.contains("main-blocks-block-copy")) {
            main_object.clicks++;
            console.log(main_object.clicks);
            main_object.clicks = clickCounter(main_object);
            console.log(main_object.clicks);
            copyBlock(main_object);
        } else if (main_object.target.classList.contains("main-blocks-block-remove")) {
            removeBlock(main_object);
        }
    });
}

function addText(main_object) {
    if (main_object.input_text.value == "") {
        main_object.input_text.classList.add("color-red");
    } else if (main_object.input_text.value != "") {
        const block = main_object.main_blocks.querySelector(".main-blocks-block");
        if (main_object.input_text.classList.contains("color-red")) {
            main_object.input_text.classList.remove("color-red");
        }
        const clone_block = block.cloneNode(true);
        main_object.main_blocks.append(clone_block);
        const text = clone_block.querySelector(".main-blocks-block-line-p-span");
        text.textContent = main_object.input_text.value;
        clone_block.classList.remove("display-none");
    }
}

function clickCounter(main_object) {
    const blocks = main_object.main_blocks.getElementsByClassName("main-blocks-block");
    for (let i = 0; i < blocks.length; i++) {
        if (blocks[i].querySelector(".main-blocks-block-copy") == main_object.target) {
            let text_block = blocks[i].querySelector(".main-blocks-block-line-p-span-copy");
            console.log(text_block);
            text_block = text_block.textContent;
            text_block = text_block.replace(/- /g, "").replace(/copy/g, "").replace(/[(]/g, "").replace(/[)]/g, "");
            text_block == Number(text_block);
            let text_block_span = blocks[i].querySelector(".main-blocks-block-line-p-span");
            text_block_span = text_block_span.textContent;
            const max_number = maxNumber(blocks, text_block, text_block_span);
            console.log(max_number);
            if (text_block < Number(max_number)) {
                return Number(max_number) + 1;
            } else if (text_block == Number(max_number)) {
                return Number(max_number) + 1;
            } else {
                return main_object.clicks;
            }
        }
    }
}

function maxNumber(blocks, number, text_block_span) {
    for (let i = 0; i < blocks.length; i++) {
        let text = blocks[i].querySelector(".main-blocks-block-line-p-span");
        text = text.textContent;
        console.log(text);
        if (text == text_block_span) {
            let text_block = blocks[i].querySelector(".main-blocks-block-line-p-span-copy");
            text_block = text_block.textContent;
            text_block = text_block.replace(/copy/g, "").replace(/[(]/g, "").replace(/[)]/g, "").replace(/- /g, "");
            if (Number(text_block) > Number(number)) {
                number = text_block;
            }
        }
    }
    console.log(number);
    return number;
}

function copyBlock(main_object) {
    const block = main_object.target.closest(".main-blocks-block");
    const clone_block = block.cloneNode(true);
    main_object.main_blocks.append(clone_block);
    main_object.text = clone_block.querySelector(".main-blocks-block-line-p-span-copy");
    main_object.text_content = main_object.text.textContent
    copyBlockCopy(main_object);
}

function copyBlockCopy(main_object) {
    if (main_object.clicks >= 1 && main_object.text_content.indexOf("copy")) {
        main_object.text.textContent = "- copy(" + main_object.clicks + ")";
    } else {
        main_object.text.textContent = "- copy";
    }
}

function removeBlock(main_object) {
    const block = main_object.target.closest(".main-blocks-block");
    block.remove();
}

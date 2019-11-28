window.addEventListener("load", main);

function main() {
    const input_text = document.querySelector(".main-top-input");
    const button = document.querySelector(".main-top-button");
    const main_blocks = document.querySelector(".main-blocks");

    button.addEventListener('click', function () {
        addText(input_text, button, main_blocks);
    });

    main_blocks.addEventListener('click', function (event) {
        const target = event.target;
        if (target.classList.contains("main-blocks-block-copy")) {
            copyBlock(main_blocks, target);
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

function copyBlock(main_blocks, target) {
    const block = target.closest(".main-blocks-block");
    let text_block = block.querySelector(".main-blocks-block-line-p");
    text_block = text_block.textContent;
    const clone_block = block.cloneNode(true);
    main_blocks.append(clone_block);
    const text = clone_block.querySelector(".main-blocks-block-line-p");
    text.textContent = text_block + " - copy";
}

function removeBlock(main_blocks, target) {
    const block = target.closest(".main-blocks-block");
    block.remove();
}

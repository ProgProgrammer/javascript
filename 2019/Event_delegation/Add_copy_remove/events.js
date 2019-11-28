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
        copyBlock(main_blocks, target);
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

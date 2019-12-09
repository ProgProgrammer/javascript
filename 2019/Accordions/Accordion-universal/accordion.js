window.addEventListener("load", main);

function main() {
    const main_object = {};
    main_object.accordion = document.querySelector(".accordions");
    main_object.accordion_blocks = document.getElementsByClassName("block-center");

    for (let x = 0; x < main_object.accordion_blocks.length; x++) {
        main_object.accordion_blocks[x].addEventListener('click', function (event) {
            main_object.accordion_block = main_object.accordion_blocks[x];
            endAccordionOpen(main_object);
            if (main_object.accordion_blocks[x].classList.contains("closing-accordion") === false && main_object.accordion_blocks[x].classList.contains("opening-accordion") === false) {
                main_object.accordion_block = main_object.accordion_blocks[x];

                let target = event.target;
                main_object.buttons = main_object.accordion_block.getElementsByClassName("accrodion-button");
                main_object.accordion_p = main_object.accordion_block.getElementsByClassName("accrodion-button-text");
                main_object.accordion_hidden = main_object.accordion_block.getElementsByClassName("accordion-blocks-block");
                main_object.accordion_content = main_object.accordion_block.getElementsByClassName("accordion-blocks-block-contents");
                main_object.speed = main_object.accordion_block.dataset.speed;
                for (let i = 0; i < main_object.buttons.length; i++) {
                    if (main_object.buttons[i] == target.closest(".accrodion-button")) {
                        main_object.i = i;
                        openCloseAccordion(main_object);
                    }
                }
            }
        });
    }
}

function openCloseAccordion(main_object) {
    if (main_object.accordion_block.classList.contains("open-accordion")) {
        for (let a = 0; a < main_object.buttons.length; a++) {
            if (main_object.accordion_hidden[a].offsetHeight > 0) {
                main_object.a = a;
                closeAccordion(main_object);
            }
        }
    }

    if (main_object.accordion_hidden[main_object.i].offsetHeight === 0 && main_object.accordion_block.classList.contains("closing-accordion") === false) {
        openAccordion(main_object);
    }
}

function openAccordion(main_object) {
    main_object.accordion_block.classList.add("opening-accordion");
    const content_height = main_object.accordion_content[main_object.i].offsetHeight;
    main_object.accordion_hidden[main_object.i].style.transitionDuration = main_object.speed + "s";
    main_object.accordion_hidden[main_object.i].style.height = content_height + "px";
    const delay = Number(main_object.speed) * 1000;
    console.log(main_object.accordion_block);
    setTimeout(endAccordionOpen, delay, main_object);
}

function endAccordionOpen(main_object) {
    console.log(main_object.accordion_block);
    if (main_object.accordion_block.classList.contains("opening-accordion")) {
        main_object.accordion_block.classList.remove("opening-accordion");
        main_object.accordion_block.classList.add('open-accordion');
        main_object.accordion_hidden[main_object.i].style.height = 'auto';
    }
}

function closeAccordion(main_object) {
    main_object.accordion_block.classList.add("closing-accordion");
    const content_height = main_object.accordion_content[main_object.i].offsetHeight;
    main_object.accordion_hidden[main_object.a].style.transitionDuration = main_object.speed + "s";
    main_object.accordion_hidden[main_object.a].style.height = content_height + "px";
    setTimeout(endAccordionClose, 0, main_object);
    const delay = Number(main_object.speed) * 1000;
    setTimeout(removeClassClose, delay, main_object);
}

function endAccordionClose(main_object) {
    main_object.accordion_hidden[main_object.a].style.height = 0;
    if (main_object.accordion_block.classList.contains('open-accordion')) {
        main_object.accordion_block.classList.remove('open-accordion');
    }
}

function removeClassClose(main_object) {
    main_object.accordion_block.classList.remove("closing-accordion");
}

window.addEventListener("load", main);
window.onresize = main;

function main() {
    const main_object = {};
    main_object.buttons = document.getElementsByClassName("accrodion-button");
    main_object.accordion_hidden = document.getElementsByClassName("accordion-blocks-block");
    main_object.accordion_content = document.getElementsByClassName("accordion-blocks-block-contents");
    main_object.accordion_block = document.querySelector(".block-center");
    main_object.speed = main_object.accordion_block.dataset.speed;

    for (let i = 0; i < main_object.buttons.length; i++) {
        main_object.buttons[i].addEventListener('click', function () {
            if (main_object.accordion_block.classList.contains("closing-accordion") === false && main_object.accordion_block.classList.contains("opening-accordion") === false) {
                main_object.i = i;
                openCloseAccordion(main_object);
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

    console.log(main_object.accordion_hidden[main_object.i].offsetHeight);
    if (main_object.accordion_hidden[main_object.i].offsetHeight === 0) {
        openAccordion(main_object);
    }
}

function openAccordion(main_object) {
    main_object.accordion_block.classList.add("opening-accordion");
    const content_height = main_object.accordion_content[main_object.i].offsetHeight;
    main_object.accordion_hidden[main_object.i].style.transitionDuration = main_object.speed + "s";
    main_object.accordion_hidden[main_object.i].style.height = content_height + "px";
    const delay = Number(main_object.speed) * 1000;
    setTimeout(endAccordion, delay);

    function endAccordion() {
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
    setTimeout(endAccordion, 0);
    const delay = Number(main_object.speed) * 1000;
    setTimeout(removeClass, delay);

    function endAccordion() {
        main_object.accordion_hidden[main_object.a].style.height = 0;
        if (main_object.accordion_block.classList.contains('open-accordion')) {
            main_object.accordion_block.classList.remove('open-accordion');
        }
    }

    function removeClass() {
        main_object.accordion_block.classList.remove("closing-accordion");
    }
}

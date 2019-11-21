window.addEventListener("load", main);

function main() {
    const time = 100;
    const time_interval = 1;
    const accordions_object = {};
    const blocks = document.getElementsByClassName("block-center");

    for (let block = 0; block < blocks.length; block++) {
        blocks[block].addEventListener("click", function (event) {
            let target = event.target;
            accordions_object.buttons = blocks[block].getElementsByClassName("accrodion-button");
            accordions_object.block_parents = blocks[block].getElementsByClassName("accordion-blocks-block");
            accordions_object.blocks = blocks[block].getElementsByClassName("accordion-blocks-block-contents");
            while (target != this) {
                if (target.classList.contains("accrodion-button")) {
                    for (let button = 0; button < accordions_object.buttons.length; button++) {
                        if (target == accordions_object.buttons[button]) {
                            accordionClicks(button, time, time_interval, accordions_object);
                        }
                    }
                }
                target = target.parentNode;
            }
        });
    }
}

function accordionClicks(button, time, time_interval, accordions_object) {
    let block_height_parent = accordions_object.block_parents[button].offsetHeight;
    let block_height_parent_style_height = accordions_object.block_parents[button].style.height;
    let block_height = accordions_object.blocks[button].offsetHeight;
    let height_block_interval = 0;
    const height_interval = block_height / time;

    for (let button_accordion = 0; button_accordion < accordions_object.buttons.length; button_accordion++) {

        if (block_height_parent_style_height === 'auto') {
            closeAccordoin(button, time_interval, block_height, height_interval, accordions_object);
        } else if (block_height_parent == 0) {
            accordionCheck(button, time_interval, block_height, height_interval, height_block_interval, accordions_object);
        }
    }
}

function accordionCheck(button, time_interval, block_height, height_interval, height_block_interval, accordions_object) {
    for (let content = 0; content < accordions_object.buttons.length; content++) {
        let block_height_parent_check = accordions_object.block_parents[content].style.height;
        let block_height_parent_check_height = accordions_object.block_parents[content].offsetHeight;
        let block_height_check = accordions_object.blocks[button].offsetHeight;

        if (accordions_object.block_parents[content].classList.contains("opening_accordion") || accordions_object.block_parents[content].classList.contains("closing_accordion")) {

        } else if (block_height_parent_check == 'auto' && content != button) {
            closeAccordoin(content, time_interval, block_height_check, height_interval, accordions_object);
        }

        if (accordions_object.block_parents[content].classList.contains("opening_accordion") || accordions_object.block_parents[content].classList.contains("closing_accordion")) {

        } else if (block_height_parent_check_height == 0 && content == accordions_object.buttons.length - 1 || block_height_parent_check == 'auto' && content == accordions_object.buttons.length - 1) {
            openAccordoin(button, height_block_interval, time_interval, block_height, height_interval, accordions_object);
        }
    }
}

function closeAccordoin(button_function, time_interval_function, block_height_function, height_interval_function, accordions_object) {
    let delay = time_interval_function;
    block_height_function = block_height_function - height_interval_function;
    setTimeout(function () {
        if (block_height_function > 0) {
            if (accordions_object.block_parents[button_function].classList.contains("opening_accordion")) {

            } else {
                classElementsClose(accordions_object);
            }

            accordions_object.block_parents[button_function].style.height = block_height_function + 'px';
            closeAccordoin(button_function, time_interval_function, block_height_function, height_interval_function, accordions_object);
        } else if (block_height_function <= 0) {
            accordions_object.block_parents[button_function].style.height = 0;
            classElementsCloseClose(accordions_object);
        }
    }, delay);
}

function openAccordoin(button_function, height_block_interval, time_interval_function, block_height_function, height_interval_function, accordions_object) {
    let delay = time_interval_function;
    height_block_interval = height_block_interval + height_interval_function;
    setTimeout(function () {
        if (height_block_interval < block_height_function) {
            if (accordions_object.block_parents[button_function].classList.contains("opening_accordion")) {

            } else {
                classElementsOpen(accordions_object);
            }

            accordions_object.block_parents[button_function].style.height = height_block_interval + 'px';
            openAccordoin(button_function, height_block_interval, time_interval_function, block_height_function, height_interval_function, accordions_object);
        } else {
            accordions_object.block_parents[button_function].style.height = 'auto';
            classElementsOpenOpen(accordions_object);
        }
    }, delay);
}

function classElementsOpen(accordions_object) {
    for (let element = 0; element < accordions_object.block_parents.length; element++) {
        accordions_object.block_parents[element].classList.add("opening_accordion");
    }
}

function classElementsOpenOpen(accordions_object) {
    for (let element = 0; element < accordions_object.block_parents.length; element++) {
        accordions_object.block_parents[element].classList.remove("opening_accordion");
    }
}

function classElementsClose(accordions_object) {
    for (let element = 0; element < accordions_object.block_parents.length; element++) {
        accordions_object.block_parents[element].classList.add("closing_accordion");
    }
}

function classElementsCloseClose(accordions_object) {
    for (let element = 0; element < accordions_object.block_parents.length; element++) {
        accordions_object.block_parents[element].classList.remove("closing_accordion");
    }
}

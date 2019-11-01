const buttons = document.getElementsByClassName("accrodion-button");
const block_parents = document.getElementsByClassName("accordion-blocks-block");
const blocks = document.getElementsByClassName("accordion-blocks-block-contents");

function main() {
    const time = 100;
    const time_interval = 1;
    
    for (let button = 0; button < buttons.length; button++) {
        buttons[button].addEventListener('click', function() {
            accordionClicks(button, time, time_interval);
        });
    }
}

function accordionClicks(button, time, time_interval) {
    let block_height_parent = block_parents[button].offsetHeight;
    let block_height_parent_style_height = block_parents[button].style.height;
    let block_height = blocks[button].offsetHeight;
    let height_block_interval = 0;
    const height_interval = block_height / time;
    
    for (let button_accordion = 0; button_accordion < buttons.length; button_accordion++) {
                
        if (block_height_parent_style_height === 'auto') {
            closeAccordoin(button, time_interval, block_height, height_interval);
        } else if (block_height_parent == 0) {
            accordionCheck(button, time_interval, block_height, height_interval, height_block_interval);
        }
    }
}

function accordionCheck(button, time_interval, block_height, height_interval, height_block_interval) {
    for (let content = 0; content < buttons.length; content++) {
        let block_height_parent_check = block_parents[content].style.height;
        let block_height_parent_check_height = block_parents[content].offsetHeight;
        let block_height_check = blocks[button].offsetHeight;
        
        if (block_parents[content].classList.contains("opening_accordion") || block_parents[content].classList.contains("closing_accordion")) {
            
        } else if(block_height_parent_check == 'auto' && content != button) {
            closeAccordoin(content, time_interval, block_height_check, height_interval);
        }
        
        if (block_parents[content].classList.contains("opening_accordion") || block_parents[content].classList.contains("closing_accordion")) {
            
        } else if (block_height_parent_check_height == 0 && content == buttons.length - 1 || block_height_parent_check == 'auto' && content == buttons.length - 1) {
            openAccordoin(button, height_block_interval, time_interval, block_height, height_interval);
        }
    }
}

function closeAccordoin(button_function, time_interval_function, block_height_function, height_interval_function) {
    let delay = time_interval_function;
    block_height_function = block_height_function - height_interval_function;
    setTimeout(function() {
        if (block_height_function > 0) {
            if (block_parents[button_function].classList.contains("opening_accordion")) {
                
            } else {
                classElementsClose();
            }
            
            block_parents[button_function].style.height = block_height_function + 'px';
            closeAccordoin(button_function, time_interval_function, block_height_function, height_interval_function);
        } else if (block_height_function <= 0) {
            block_parents[button_function].style.height = 0;
            classElementsCloseClose();
        }
    }, delay);
}

function openAccordoin(button_function, height_block_interval, time_interval_function, block_height_function, height_interval_function) {
    let delay = time_interval_function;
    height_block_interval = height_block_interval + height_interval_function;
    setTimeout(function() {
        if (height_block_interval < block_height_function) {
            if (block_parents[button_function].classList.contains("opening_accordion")) {
                
            } else {
                classElementsOpen();
            }
            
            block_parents[button_function].style.height = height_block_interval + 'px';
            openAccordoin(button_function, height_block_interval, time_interval_function, block_height_function, height_interval_function);
        } else {
            block_parents[button_function].style.height = 'auto';
            classElementsOpen();
        }
    }, delay);
}

function classElementsOpen() {
    for (let element = 0; element < block_parents.length; element++) {
        if (block_parents[element].classList.contains("opening_accordion")) {
            block_parents[element].classList.remove("opening_accordion");
        } else {
            block_parents[element].classList.add("opening_accordion");
        }
    }
}

function classElementsClose() {
    for (let element = 0; element < block_parents.length; element++) {
        block_parents[element].classList.add("closing_accordion");
    }
}

function classElementsCloseClose() {
    for (let element = 0; element < block_parents.length; element++) {
        block_parents[element].classList.remove("closing_accordion");
    }
}

main();
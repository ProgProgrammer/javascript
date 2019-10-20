const button = document.querySelector(".accrodion-button");
const block_parent = document.querySelector(".accordion-blocks-block");
const block = document.querySelector(".accordion-blocks-block-contents");
const time = 100;
const time_interval = 1;

button.addEventListener('click', function() {
    let block_height_parent = block_parent.offsetHeight;
    let block_height = block.offsetHeight;
    let height_block_interval = 0;
    const height_interval = block_height / time;
    
    if (block_height_parent > 0) {
        closeAccordoin(time_interval, block_height, height_interval); 
    } else if (block_height_parent <= 0) {
        openAccordoin(height_block_interval, time_interval, block_height, height_interval); 
    } else {
        return;
    }
});

function closeAccordoin(time_interval_function, block_height_function, height_interval_function) {
    let delay = time_interval_function;
    block_height_function = block_height_function - height_interval_function;
    setTimeout(function() {
        if (block_height_function > 0) {
            block_parent.style.height = block_height_function + 'px';
            closeAccordoin(time_interval_function, block_height_function, height_interval_function);
        } else if (block_height_function <= 0) {
            block_parent.style.height = 0;
        }
    }, delay);
}

function openAccordoin(height_block_interval, time_interval_function, block_height_function, height_interval_function) {
    let delay = time_interval_function;
    height_block_interval = height_block_interval + height_interval_function;
    console.log(height_block_interval);
    setTimeout(function() {
        if (height_block_interval < block_height_function) {
            block_parent.style.height = height_block_interval + 'px';
            openAccordoin(height_block_interval, time_interval_function, block_height_function, height_interval_function);
        } else {
            block_parent.style.height = 'auto';
        }
    }, delay);
}
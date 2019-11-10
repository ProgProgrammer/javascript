const button = document.querySelector(".button");
let clicks = 1;
button.addEventListener('click', startFilter);

function startFilter() {
    clicks += 1;
    const blocks = document.getElementsByClassName("block");
    const texts = document.getElementsByClassName("block-p");
    let id_elements = [];
    const max_number = maxNumber(texts);
    const min_number = minNumber(texts);
    allNumbers(texts, max_number, min_number, id_elements);
    styleAssignment(id_elements, blocks, clicks);
});

function minNumber(texts) {
    let min_number = Number(texts[0].innerHTML);
    let min_number_id = 0;
    for (let text = 0; text < texts.length; text++) {
        if (texts[text].innerHTML < min_number) {
            min_number = Number(texts[text].innerHTML);
        }
    }
    return min_number;
}

function maxNumber(texts) {
    let max_number = Number(texts[0].innerHTML);
    for (let text = 0; text < texts.length; text++) {
        if (texts[text].innerHTML > max_number) {
            max_number = Number(texts[text].innerHTML);
        }
    }
    return max_number;
}

function allNumbers(texts, max_number, min_number, id_elements) {
    let counter_id = -1;
    for (let number = min_number; number < max_number + 1; number++) {
        counter_id += 1;
        for (let element_array = 0; element_array < texts.length; element_array++) {
            if (Number(texts[element_array].innerHTML) == number) {
                id_elements[counter_id] = element_array;
            }
        }
    }
}

function styleAssignment(id_elements, blocks, clicks) {
    for (let id_element = 0; id_element < id_elements.length; id_element++) {
        if (clicks % 2) {
            blocks[id_elements[id_element]].style.order = id_element;
        } else {
            blocks[id_elements[id_element]].style.order = id_elements.length - id_element;
        }
    }
}

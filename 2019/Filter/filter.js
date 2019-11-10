const button = document.querySelector(".button");
let clicks = 1;
button.addEventListener('click', startFilter);

function startFilter() {
    clicks += 1;
    const blocks = document.getElementsByClassName("block");
    const texts = document.getElementsByClassName("block-p");
    const id_elements = [];
    const min_number = minNumber(texts);
    const max_number = maxNumber(texts);
    allNumbers(texts, max_number, min_number, id_elements);
    elementsFiltering(id_elements, blocks, clicks);
}

function minNumber(texts) {
    let min_number = texts[0].innerHTML.replace(/\D+/g, str => "");
    min_number = Number(min_number);
    for (let text = 0; text < texts.length; text++) {
        if (texts[text].innerHTML.replace(/\D+/g, str => "") < min_number) {
            min_number = texts[text].innerHTML.replace(/\D+/g, str => "");
        }
    }
    console.log(min_number);
    return min_number;
}

function maxNumber(texts) {
    let max_number = texts[0].innerHTML.replace(/\D+/g, str => "");
    max_number = Number(max_number);
    for (let text = 0; text < texts.length; text++) {
        if (texts[text].innerHTML.replace(/\D+/g, str => "") > max_number) {
            max_number = texts[text].innerHTML.replace(/\D+/g, str => "");
        }
    }
    return max_number;
}

function allNumbers(texts, max_number, min_number, id_elements) {
    let counter_id = -1;
    for (let number = min_number; number < max_number + 1; number++) {
        for (let element_array = 0; element_array < texts.length; element_array++) {
            const text = texts[element_array].innerHTML.replace(/\D+/g, str => "");
            if (Number(text) == number) {
                counter_id += 1;
                id_elements[counter_id] = element_array;
            }
        }
    }
}

function elementsFiltering(id_elements, blocks, clicks) {
    for (let id_element = 0; id_element < id_elements.length; id_element++) {
        if (clicks % 2) {
            blocks[id_elements[id_element]].style.order = id_element;
        } else {
            blocks[id_elements[id_element]].style.order = id_elements.length - id_element;
        }
    }
}

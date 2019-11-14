function main() {
    const button = document.querySelector(".button");
    const button_summ = document.querySelector(".button-summ");
    let clicks = 1;
    let clicks_summ = 1;
    button.addEventListener('click', function () {
        clicks += 1;
        const blocks = document.getElementsByClassName("block");
        const texts = document.getElementsByClassName("block-p");
        startFilter(clicks, button, blocks, texts);
    });

    button_summ.addEventListener('click', function () {
        clicks_summ += 1;
        const blocks = document.getElementsByClassName("block-summ");
        const texts = document.getElementsByClassName("block-p-summ");
        startFilter(clicks_summ, button_summ, blocks, texts);
    });
}

function startFilter(clicks, button, blocks, texts) {
    const id_elements = [];
    const min_number = minNumber(texts, button);
    const max_number = maxNumber(texts, button);
    allNumbers(texts, max_number, min_number, id_elements, button);
    elementsFiltering(id_elements, blocks, clicks, button);
}

function minNumber(texts, button) {
    let min_number = regularExpressions(texts, 0, button);
    min_number = Number(min_number);
    for (let text = 0; text < texts.length; text++) {
        const text_replace = regularExpressions(texts, text, button);
        if (text_replace < min_number) {
            min_number = Number(text_replace);
        }
    }
    return min_number;
}

function maxNumber(texts, button) {
    let max_number = regularExpressions(texts, 0, button);
    max_number = Number(max_number);
    for (let text = 0; text < texts.length; text++) {
        const text_replace = regularExpressions(texts, text, button);
        if (text_replace > max_number) {
            max_number = Number(text_replace);
        }
    }
    return max_number;
}

function allNumbers(texts, max_number, min_number, id_elements, button) {
    let counter_id = -1;
    for (let number = min_number; number <= max_number; number++) {
        for (let element_array = 0; element_array < texts.length; element_array++) {
            let text = regularExpressions(texts, element_array, button);
            if (Number(text) == number) {
                counter_id += 1;
                id_elements[counter_id] = element_array;
            }
        }
    }
}

function regularExpressions(blocks, blocks_element, button) {
    if (button.classList.contains("button")) {
        return blocks[blocks_element].innerHTML.replace(/от\s/g, "").replace(/,\d+%/g, "");
    } else if (button.classList.contains("button-summ")) {
        return blocks[blocks_element].innerHTML.replace(/\s/g, "").replace(/.{3}$/, "");
    }
}

function elementsFiltering(id_elements, blocks, clicks, button) {
    for (let id_element = 0; id_element < id_elements.length; id_element++) {
        if (clicks % 2) {
            blocks[id_elements[id_element]].style.order = id_element;
            button.classList.remove("arrow-table");
        } else {
            blocks[id_elements[id_element]].style.order = id_elements.length - id_element;
            button.classList.add("arrow-table");
        }
    }
}

main();

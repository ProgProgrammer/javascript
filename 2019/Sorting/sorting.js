function main() {
    const button = document.querySelector(".button");
    const button_summ = document.querySelector(".button-summ");
    let clicks = 1;
    let clicks_summ = 1;
    button.addEventListener('click', function () {
        clicks += 1;
        const blocks = document.getElementsByClassName("block");
        const texts = document.getElementsByClassName("block-p");
        startSorting(clicks, button, blocks, texts);
    });

    button_summ.addEventListener('click', function () {
        clicks_summ += 1;
        const blocks = document.getElementsByClassName("block-summ");
        const texts = document.getElementsByClassName("block-p-summ");
        startSorting(clicks_summ, button_summ, blocks, texts);
    });
}

function startSorting(clicks, button, blocks, texts) {
    let id_elements = [];
    custNumbers(blocks, id_elements, button);
    const copy_id_elements = [];
    for (let i = 0; i < id_elements.length; i++) {
        copy_id_elements[i] = id_elements[i];
    }
    const id_order_array = [];
    const numbers_array = [];
    const max_number = maxNumber(id_elements, copy_id_elements, numbers_array);
    for (let element = 0; element < id_elements.length; element++) {
        minNumber(copy_id_elements, numbers_array, element, max_number);
    }
    elementsFiltering(id_elements, numbers_array, blocks, clicks, button);
}

function custNumbers(blocks, id_elements, button) {
    for (let i = 0; i < blocks.length; i++) {
        let number = regularExpressions(blocks, i, button);
        id_elements[i] = number;
    }
}

function regularExpressions(blocks, blocks_element, button) {
    if (button.classList.contains("button")) {
        const number = blocks[blocks_element].textContent.replace(/от\s/g, "").replace(/,\d+%/g, "");
        return Number(number);
    } else if (button.classList.contains("button-summ")) {
        const number = blocks[blocks_element].textContent.replace(/\s/g, "").replace(/,/g, "");
        return Number(number);
    }
}

function maxNumber(id_elements, copy_id_elements, numbers_array) {
    let max_number = id_elements[0];
    for (let i = 0; i < copy_id_elements.length; i++) {
        if (copy_id_elements[i] > max_number) {
            max_number = copy_id_elements[i];
        }
    }
    return max_number;
}

function minNumber(copy_id_elements, numbers_array, element, max_number) {
    let min_number = max_number;
    const id_array = [];
    for (let i = 0; i < copy_id_elements.length; i++) {
        if (copy_id_elements[i] < min_number) {
            min_number = copy_id_elements[i];
            id_array[0] = i;
        }
    }
    delete copy_id_elements[id_array[0]];
    numbers_array[element] = min_number;
}

function elementsFiltering(id_elements, numbers_array, blocks, clicks, button) {
    for (let numbers_array_element = 0; numbers_array_element < numbers_array.length; numbers_array_element++) {
        for (let id_element = 0; id_element < id_elements.length; id_element++) {
            if (numbers_array[numbers_array_element] == id_elements[id_element]) {
                if (clicks % 2) {
                    blocks[id_element].style.order = numbers_array_element;
                    button.classList.remove("arrow-table");
                } else {
                    blocks[id_element].style.order = numbers_array.length - numbers_array_element;
                    button.classList.add("arrow-table");
                }
            }
        }
    }
}

main();

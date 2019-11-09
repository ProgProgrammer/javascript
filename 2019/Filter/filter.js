const button = document.querySelector(".button");

button.addEventListener('click', function () {
    const blocks = document.getElementsByClassName("block");
    const texts = document.getElementsByClassName("block-p");
    let id_min_element = [];
    let id_max_element = [];
    let id_other_elements = [];
    minNumber(texts, id_min_element);
    console.log(id_min_element);
    maxNumber(texts, id_max_element);
    console.log(id_max_element);
    intermediateNumbers(texts, id_min_element, id_max_element, id_other_elements);
    console.log(id_other_elements);
});

function minNumber(texts, id_min_element) {
    let min_number = Number(texts[0].innerHTML);
    console.log(min_number);
    let min_number_id = 0;
    for (let text = 0; text < texts.length; text++) {
        if (texts[text].innerHTML < min_number) {
            min_number = texts[text].innerHTML;
            min_number_id = text;
            console.log(min_number_id);
        }
    }
    id_min_element[0] = min_number_id;
    console.log(id_min_element);
}

function maxNumber(texts, id_max_element) {
    let max_number = Number(texts[0].innerHTML);
    let max_number_id = 0;
    for (let text = 0; text < texts.length; text++) {
        if (texts[text].innerHTML > max_number) {
            max_number = texts[text].innerHTML;
            max_number_id = text;
        }
    }
    id_max_element[0] = max_number_id;
    console.log(id_max_element);
}

function intermediateNumbers(texts, id_min_element, id_max_element, id_other_elements) {
    for (let number = 0; number < texts.length; number++) {

        for (let element_array = 0; element_array < texts.length; element_array++) {
            if (Number(texts[element_array].innerHTML) == number && element_array != id_min_element[0] && element_array != id_max_element[0]) {
                id_other_elements[number] = element_array;
                console.log(id_other_elements);
            }
        }
    }
}

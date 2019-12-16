window.addEventListener('load', main);
window.onresize = main;

function main() {
    const numbers = document.getElementsByClassName("number");
    const input_Window = document.getElementsByClassName("label-span-window");
    const button_Enter = document.querySelector(".button");
    const button_Reset = document.querySelector(".reset");
    let number_Round = 0;
    const object = {};
    object.number_Made = false;

    button_Enter.addEventListener('click', () => {
        const number_Min = numbers[0];
        const number_Max = numbers[1];
        input_Window[0].style.display = "none";
        input_Window[1].style.display = "none";

        for (let i = 0; i < numbers.length - 1; i++) {

            if (numbers[i].value == "") {
                numbers[i].style.borderColor = "red";
            }

            if (numbers[i].value != "" && numbers[i].style.borderColor == "red") {
                numbers[i].style.borderColor = "black";
            }

            if (numbers[i].value > 100 || numbers[i].value < 0) {
                numbers[i].style.borderColor = "red";
                input_Window[i].innerText = "Допускаются числа от 0 до 100";
                input_Window[i].style.display = "flex";
            } else if (numbers[i].value >= 0 && numbers[i].value <= 100 && input_Window[i].style.display == "flex") {
                numbers[i].style.borderColor = "black";
                input_Window[i].style.display = "none";
            }
        }

        if (number_Min.value != "" && number_Max.value != "" &&
            Number(number_Min.value) > Number(number_Max.value)) {
            number_Min.style.borderColor = "red";
            number_Max.style.borderColor = "red";
            input_Window[0].innerText = "Число больше максимального";
            input_Window[1].innerText = "Число меньше минимального";
            input_Window[0].style.display = "flex";
            input_Window[1].style.display = "flex";
        }

        if (number_Min.style.borderColor == "red" || number_Max.style.borderColor == "red" || numbers[2].style.borderColor == "red") {
            return;
        }

        if (object.number_Made === false) {
            let number_Random = number_Min.value - 0.5 + Math.random() * (number_Max.value - number_Min.value + 1);
            number_Round = Math.round(number_Random);
            if (number_Round >= 0) {
                object.number_Made = true;
            }
            console.log(number_Round);
        }

        if (Number(numbers[2].value) < number_Round) {
            numbers[3].setAttribute("value", "Число меньше рандомного");
        } else if (Number(numbers[2].value) > number_Round) {
            numbers[3].setAttribute("value", "Число больше рандомного");
        } else {
            numbers[3].setAttribute("value", "Угадал");
            object.number_Made = false;
            return;
        }
    });
}

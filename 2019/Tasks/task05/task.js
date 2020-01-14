window.onload = main;

function main() {
    const inputText = document.querySelector(".input");
    const obj = {};
    obj.letters = "";

    inputText.onkeypress = function(e) {
        return inputValue(inputText, e, obj);
    }
}

function inputValue(inputText, e, obj) {
    if (e.keyCode >= 97 && e.keyCode <= 122 ||
        e.keyCode >= 65 && e.keyCode <= 90 ||
        e.keyCode >= 1072 && e.keyCode <= 1103 ||
        e.keyCode >= 1040 && e.keyCode <= 1071) {
        obj.letters += e.key.toLowerCase();
        inputText.value = obj.letters;
        return false;
    } else {
        return false;
    }
}

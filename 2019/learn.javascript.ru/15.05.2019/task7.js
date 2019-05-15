for (;;) {
    var question = prompt("Введите число больше 100");
    if (question > 100) {
        alert("Спасибо");
        break;
    } else if (question == null) {
        alert("Вход отменен");
        break;
    }
}

var who = prompt("Кто пришел?");
if (who == "Админ") {
    var password = prompt("Пароль");
    if (password == "Чёрный Властелин") {
        alert("Добро пожаловать!");
    } else if (password == null) {
        alert("Вход отменен");
    } else {
        alert("Пароль неверен");
    }
} else if (who == null) {
    alert("Вход отменен");
} else {
    alert("Я вас не знаю");
}
var login = prompt("Введите пароль");

var message = (login == 'Вася') ? 'Привет' :
    (login == 'Директор') ? 'Здравствуйте' :
    (login == '') ? 'Нет логина' :
    '';
alert(message);
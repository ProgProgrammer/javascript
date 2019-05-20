var userName = 'Вася';

function showMessage() {
  userName = "Петя";
  var message = 'Привет, я ' + userName;
  alert(message);
}

showMessage();
alert(userName);
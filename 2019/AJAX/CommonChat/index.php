<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Common Chat</title>
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
</head>
<body>
<div class="container">
    <div class="row">
        <div class="row-window">
            <div class="text" id="answer"></div>
            <div class="arrow">
                <img class="arrow-image" src="images/arrow.svg" alt="arrow">
            </div>
        </div>
        <form class="form" name="form">
            <input class="input" type="text" name="form_input" placeholder="Введите имя">
            <input class="input textarea" type="text" name="form_text" placeholder="Введите сообщение">
            <button class="button" type="submit">
                Отправить
            </button>
        </form>
    </div>
</div>
<script src="dist/task.js"></script>
</body>
</html>
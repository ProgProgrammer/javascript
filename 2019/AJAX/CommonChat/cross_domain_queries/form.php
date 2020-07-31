<?php
header('Access-Control-Allow-Origin: *');
$input = htmlentities($_POST['form_input'], ENT_QUOTES, 'UTF-8');
//print_r($_POST['form_input']);

if ($input === "Как дела, Вован?") {
    echo "Привет, Сергей. Хорошо. Как дела в Москве?";
} else if ($input === "Как дела, Сергей?") {
    echo "Привет, Владимир. Отлично! Как дела в Волгограде?";
} else {
    echo "Вы не ввели правильные данные.";
}
?>
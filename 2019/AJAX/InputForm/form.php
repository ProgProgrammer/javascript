<?php
$input = htmlentities($_POST['form_input'], ENT_QUOTES, 'UTF-8');
if ($input === "Сергей")
{
    echo "Привет, Сергей. Как дела в Москве?";
}
else if ($input === "Владимир")
{
    echo "Привет, Владимир. Как дела в Волгограде?";
}
else
{
    echo "Вы не ввели правильные данные.";
}
?>
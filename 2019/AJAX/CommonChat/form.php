<?php

$text = "";

if ($_POST['form_input'] !== undefined)
{
    $input = htmlentities($_POST['form_input'], ENT_QUOTES, 'UTF-8');
    $input .= "\r\n";
    $textFile = fopen("text.txt", "a");
    fwrite($textFile, $input);
    fclose($textFile);
}

$textLines = file("text.txt");

for ($i = 0; $i < count($textLines); $i++)
{
    $text .= '<span class="text-span">' . $textLines[$i] . '</span><br/>';
}

echo $text;
?>
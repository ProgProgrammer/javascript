<?php

$input = "";
$textFile;
$textArray = [];
$textLines;
$arraySize = 100;


if ($_POST['form_input'] !== undefined && $_POST['form_input'] !== "")
{
    $input = htmlentities($_POST['form_input'], ENT_QUOTES, 'UTF-8');
    $input .= "\r\n";
    $textFile = fopen("text.txt", "a");
    fwrite($textFile, $input);
    fclose($textFile);
}

$textLines = file("text.txt");

if (count($textLines) >= $arraySize)
{
    unset($textLines[0]);
    $textLines = array_values($textLines);
    file_put_contents("text.txt", $textLines);
    $textLines = file("text.txt");
}

for ($i = 0; $i < count($textLines); $i++)
{
    if ($textLines[$i] !== "\r\n" && $textLines[$i] !== "")
        array_push($textArray, $textLines[$i]);
}

echo json_encode($textArray);
?>
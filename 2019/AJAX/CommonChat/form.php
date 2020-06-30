<?php

$array;
$input = "";
$textFile;
$textArray = [];
$textLines;
$arraySize = 101;
$numberLine = 0;
$stringNumber = "";
$dataFile = "text.txt";

header("Content-Type: application/json; charset=UTF-8");
$array = json_decode($_POST['form_input'], true);
if (count($array) !== 0)
{
    $textLines = file($dataFile);
    $numberLine = $textLines[count($textLines) - 1];
    $numberLine = intval($numberLine);
    $numberLine = $numberLine + 1;
    $stringNumber = $numberLine;
    $stringNumber = strval($stringNumber);
    $input = htmlentities($array[0], ENT_QUOTES, 'UTF-8');
    $input .= "\r\n";
    $input .= htmlentities($array[1], ENT_QUOTES, 'UTF-8');
    $input .= "\r\n";
    $input .= htmlentities($array[2], ENT_QUOTES, 'UTF-8');
    $input .= "\r\n";
    $input .= $stringNumber;
    $input .= "\r\n";
    $textFile = fopen($dataFile, "a");
    fwrite($textFile, $input);
    fclose($textFile);
}

$textLines = file($dataFile);

if (count($textLines) >= $arraySize)
{
    unset($textLines[0]);
    $textLines = array_values($textLines);
    file_put_contents($dataFile, $textLines);
    $textLines = file($dataFile);
}

for ($i = 0; $i < count($textLines); $i++)
{
    if ($textLines[$i] !== "\r\n" && $textLines[$i] !== "")
        array_push($textArray, $textLines[$i]);
}

echo json_encode($textArray);
?>
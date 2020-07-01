<?php

$array;
$input = "";
$valueInput = "";
$textFile;
$textArray = [];
$textLines;
$arraySize = 404;
$numberLine = 0;
$stringNumber = "";
$counterCyrcle = 0;
$numberOfLines = 4;
$dataFile = "text.txt";

header("Content-Type: application/json; charset=UTF-8");
$array = json_decode($_POST['form_input'], true);
if (count($array) > 3 &&
    htmlentities($array[0], ENT_QUOTES, 'UTF-8') !== " ")
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

$valueInput = htmlentities($array[3], ENT_QUOTES, 'UTF-8');
$valueInput = intval($valueInput);
$valueInput++;

if (count($textLines) >= $arraySize)
{
    unset($textLines[0]);
    $textLines = array_values($textLines);
    file_put_contents($dataFile, $textLines);
    $textLines = file($dataFile);
}

if ($valueInput === 1)
{
    for ($i = 0; $i < count($textLines); $i++)
    {
        if ($textLines[$i] !== "\r\n" && $textLines[$i] !== "")
        {
            array_push($textArray, $textLines[$i]);
        }
    }
    echo json_encode($textArray);
}
else
{
    for ($a = 0; $a < count($textLines); $a++)
    {
        $counterCyrcle++;

        if ($counterCyrcle % $numberOfLines == 0)
        {
            if ($valueInput === intval($textLines[$a]) + 1)
            {
                for ($i = $a + 1; $i < count($textLines); $i++)
                {
                    if ($textLines[$i] !== "\r\n" && $textLines[$i] !== "")
                    {
                        array_push($textArray, $textLines[$i]);
                    }
                }
                echo json_encode($textArray);
                return;
            }
        }
    }
}

?>
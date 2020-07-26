<?php
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';
require 'PHPMailer/Exception.php';

$text = "OK";
$name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING);
$phone = filter_input(INPUT_POST, 'phone', FILTER_SANITIZE_STRING);
$message = "
	Tester.<br /><br />
	Name: " . $name . "<br />
	Phone: <a href='tel:$phone'>" . $phone . "</a><br />";

$mail = new PHPMailer\PHPMailer\PHPMailer();

$mail->isSMTP();
$mail->CharSet = "UTF-8";
$mail->SMTPAuth = true;

$mail->Host = 'ssl://smtp.yandex.ru';
$mail->Username = 'asdds4.das@yandex.ru';
$mail->Password = '1615842D85a';
$mail->SMTPSecure = 'ssl';
$mail->Port = 465;

$mail->setFrom('asdds4.das@yandex.ru', 'Tester');
$mail->addAddress('dfg9fddfg@yandex.ru');

$mail->isHTML(true);
$mail->Subject = "Test message";
$mail->Body = $message;

//print_r($mail);


if(!$mail->send()) {
    echo 'Ошибка при отправке письма: ' . $mail->ErrorInfo;
} else {
    echo $text;
}
?>
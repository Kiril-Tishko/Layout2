<?php
$name = htmlspecialchars($_POST['name']);
$email = htmlspecialchars($_POST['email']);
$message = htmlspecialchars($_POST['message']);


date_default_timezone_set('Etc/UTC');

require '../lib/PHPMailer/PHPMailerAutoload.php';

$mail = new PHPMailer;


/*
 * Server Configuration
 */

// $mail->SMTPDebug = 1;

$mail->isSMTP();
$mail->Host = 'smtp.gmail.com';                     // Which SMTP server to use.
$mail->SMTPAuth = true;                             // Whether you need to login. This is almost always required.
$mail->Username = "kirillovichtishko@gmail.com";    // Your Gmail address.
$mail->Password = "1243512435";                     // Your Gmail login password or App Specific Password.
$mail->SMTPSecure = 'tls';                          // Which security method to use. TLS is most secure.
$mail->Port = 587;                                  // Which port to use, 587 is the default port for TLS security.
$mail->CharSet = 'utf-8';


/*
 * Message Configuration
 */
$mail->setFrom('kirillovichtishko@gmail.com', 'ЗАЯВКА C САЙТА');   // Set the sender of the message.
$mail->addAddress('kstishko@gmail.com', 'Кирилл Тишко');     // Set the recipient of the message.


/*
 * Message Content
 */
$mail->isHTML(true);

$mail->Subject = 'IvanIvanov.com';
$mail->Body =
'<p>Это сообщение отправлено с сайта: IvanIvanov.com</p><br>
<p>Имя отправителя:&emsp;
    <b>' .$name . '</b>
</p>
<p>Почта / Телефон:&emsp;
    <b>' .$email . '</b>
</p> 
<p>Сообщение:&emsp;
    <b>' .$message . '</b>
</p>';
// $mail->AltBody = 'Основное сообщение чет не пошло, поэтому вот альтернативка )) хз вообще';

if ($mail->send()) {
    echo "Ваше сообщение отправлено!";
} else {
    echo "Ошибка: " . $mail->ErrorInfo;
}
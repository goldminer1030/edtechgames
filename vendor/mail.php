<?php
//Import PHPMailer classes into the global namespace
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require_once 'autoload.php';

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
	$mail->Host = 'smtp.sparkpostmail.com';  //gmail SMTP server
	$mail->SMTPAuth = true;
	$mail->Username = 'SMTP_Injection';   //username
	$mail->Password = 'ae9dd973-1ff9-476a-81f7-272d79ad29e3';   //password
	$mail->SMTPSecure = 'tls';
	$mail->Port = 587;                    //smtp port

    $mail->setFrom('enggphp.01@gmail.com', 'Artisans Web');
	$mail->addAddress('contact@edtechgames.com', 'User Name');

    $mail->isHTML(true);

    $mail->Subject = 'Email Subject';
    $mail->Body    = 'Email Body';

    if (!$mail->send()) {
        echo 'Message could not be sent.';
        echo 'Mailer Error: ' . $mail->ErrorInfo;
    } else {
        echo 'Message has been sent';
    }
} catch (Exception $e) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
}
?>
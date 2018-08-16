<?php
    $email_to = "contact@edtechgames.com";
    $email_subject = "Request to Pilot";
	
	$vname = $_POST['vname']; // required
    $vemail = $_POST['vemail']; // required
    $vrole = $_POST['vrole']; // required
    $message = $_POST['message']; // required

    $email_message = "Form details below:\n\n";
  
    $email_message .= "Name: ".$vname."\n";
    $email_message .= "Email: ".$vemail."\n";
    $email_message .= "Role: ".$vrole."\n";
    $email_message .= "Message: ".$message."\n";
	//$header = "FROM: EdTechGames <support@edtechgames.com>\r\n";
	mail($email_to, $email_subject, $email_message, $header);
?>
<?php

include 'mailin-api/Mailin.php';

$vname          = $_POST['vname']; // required
$vemail         = $_POST['vemail']; // required
$vrole          = $_POST['vrole']; // required
$message        = $_POST['message']; // required
$email_message  = "<p>Form details below:</p>";

$email_message .= "<p><strong>Name:</strong> ".$vname."</p>";
$email_message .= "<p><strong>Email:</strong> ".$vemail."</p>";
$email_message .= "<p><strong>Role:</strong> ".$vrole."</p>";
$email_message .= "<p><strong>Message:</strong> ".$message."</p>";

$mailin = new Mailin('ben@edtechgames.com', 'nAjbFy6CaGtNhPQp');
$mailin->
addTo('smiljka8686@gmail.com', 'Ben Harrison')->
setFrom('ben@edtechgames.com', 'Ben Harrison')->
setReplyTo('ben@edtechgames.com','Ben Harrison')->
setSubject('Request to Pilot')->
setText("Text")->
setHtml('<strong>Hello</strong><br>' . $email_message);
$res = $mailin->send();

/**
Successful send message will be returned in this format:
{'result' => true, 'message' => 'Email sent'}
*/
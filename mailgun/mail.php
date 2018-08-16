<?php
# Include the Autoloader (see "Libraries" for install instructions)
require 'autoload.php';
use Mailgun\Mailgun;


# Instantiate the client.
$mgClient = new Mailgun('e1bc90c836df8d349371bcd6a52ca3cd-e44cc7c1-84ed6c94');
$domain = "sandbox44131ac0ab1a4dd19bfd7460b3e64507.mailgun.org";

# Make the call to the client.

	$vname = $_POST['vname']; // required
    $vemail = $_POST['vemail']; // required
    $vrole = $_POST['vrole']; // required
    $message = $_POST['message']; // required
    $email_message = "Form details below:\n\n";
  
    $email_message .= "Name: ".$vname."\n";
    $email_message .= "Email: ".$vemail."\n";
    $email_message .= "Role: ".$vrole."\n";
    $email_message .= "Message: ".$message."\n";
	
$result = $mgClient->sendMessage("$domain",
          array('from'    => 'EdTechGames <postmaster@sandbox44131ac0ab1a4dd19bfd7460b3e64507.mailgun.org>',
                'to'      => 'EdTechGames <contact@edtechgames.com>',
                'subject' => 'Request to Pilot',
                'text'    => $email_message));
# You can see a record of this email in your logs: https://app.mailgun.com/app/logs

# You can send up to 300 emails/day from this sandbox server.
# Next, you should add your own domain so you can send 10,000 emails/month for free.

?>
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
addTo('contact@edtechgames.com', 'Ben Harrison')->
setFrom('contact@edtechgames.com', 'Ben Harrison')->
setReplyTo('contact@edtechgames.com','Ben Harrison')->
setSubject('Request to Pilot')->
setText("Text")->
setHtml('<strong>Hello</strong><br>' . $email_message);
$res = $mailin->send();
/**
Successful send message will be returned in this format:
{'result' => true, 'message' => 'Email sent'}
*/

//--> send welcome email
if(isset($_POST['vcontact_me']) && $_POST['vcontact_me'] == 'contact') {
  $mailin->
  addTo($vemail, 'Ben Harrison')->
  setFrom('contact@edtechgames.com', 'Ben Harrison')->
  setReplyTo('contact@edtechgames.com','Ben Harrison')->
  setSubject('Welcome to EdtechGames')->
  setHtml('
  <table style="width: 100%; max-width: 580px; display: block;" align="center" cellpadding="0" cellspacing="0">
      <tr>
        <td style="text-align: center;">
          <img src="https://edtechgames.com/images/logo_sm.png" alt="logo" border="0">
        </td>
      </tr>
      <tr>
        <td>
          <h1 style="color:#00b1db; font-size: 36px; text-align: center; text-transform: capitalize;">Hi ' . $vname . '!</h1>
        </td>
      </tr>
      <tr>
        <td style="text-align:center; padding-bottom: 25px;">
          <span style="color:#4a4a4a; font-size: 22px; font-weight: 600;">Welcome to Edtech Games! <br> We are happy you are here.</span>
        </td>
      </tr>
      <tr>
        <td>
          <table cellpadding="0" cellspacing="0">
            <tr>
              <td width="50%" height="260" style="background-color: #eee; padding: 0 25px;">
                <h2 style="text-transform: capitalize; color:#333; font-size: 20px;"><span style="color:#00b1db;">intense<br></span>engagement</h2>
                <h3 style="color:#333; font-size: 18px; font-weight: 500;">Intense engagement enables intense learning!</h3>
              </td>
              <td align="center">
                <img style="width: 100%;" src="https://edtechgames.com/images/character1_sm.png" alt="character 1" border="0">
              </td>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <td>
          <table cellpadding="0" cellspacing="0">
            <tr>
              <td align="center" width="50%" height="260">
                <img src="https://edtechgames.com/images/character2_sm.png" alt="character 2" border="0" height="260">
              </td>
              <td width="50%" style="background-color: #eee; padding: 0 25px;">
                <h2 style="text-transform: capitalize; color:#333; font-size: 20px;"><span style="color:#00b1db;">Cutting<br></span>Edge Curriculum</h2>
                <h3 style="color:#333; font-size: 18px; font-weight: 500;">Intense engagement allows us to pioneer more intense curriculum.</h3>
              </td>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <td>
          <table cellpadding="0" cellspacing="0">
            <tr>
              <td width="50%" height="260" style="background-color: #eee; padding: 0 25px;">
                <h2 style="text-transform: capitalize; color:#333; font-size: 20px;"><span style="color:#00b1db;">Vastly<br></span>Higher Efficacy</h2>
                <h3 style="color:#333; font-size: 18px; font-weight: 500;">Higher Engagement + Better Curriculum = Vastly Higher Efficacy</h3>
              </td>
              <td align="center">
                <img style="width: 100%;" src="https://edtechgames.com/images/character3_sm.png" alt="character 3" border="0">
              </td>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <td>
          <p style="text-align:center; padding: 20px 0; margin: 0;">
            <a href="http://facebook.com/" style="text-decoration: none;">
              <img src="https://edtechgames.com/images/facebook-icon.png" alt="facebook_icon" border="0">
            </a>
            <a href="http://twitter.com/" style="text-decoration: none;">
              <img src="https://edtechgames.com/images/twitter-icon.png" alt="twitter_icon" border="0">
            </a>
            <a href="http://plus.google.com/" style="text-decoration: none;">
              <img src="https://edtechgames.com/images/googleplus-icon.png" alt="googleplus_icon" border="0">
            </a>
            <a href="http://linkedin.com/" style="text-decoration: none;">
              <img src="https://edtechgames.com/images/linkedin-icon.png" alt="linkedin_icon" border="0">
            </a>
          </p>
        </td>
      </tr>
      <tr>
        <td bgcolor="000">
          <p style="text-align: center; color: white; padding: 20px 0; margin: 0;">&copy; 2018 EDTECH GAMES, LLC</p>
        </td>
      </tr>
    </table>
  ');
  
  $res = $mailin->send();
}
//<-- send welcome email
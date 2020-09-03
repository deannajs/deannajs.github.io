<?php
$to      = 'deannajs@umich.edu';
$subject = 'from user on deannajs.github.io';
$message = 'hello';

echo $to;
echo $subject;
echo $message;

var_dump($_POST);
echo $_POST["name"];
echo $_POST["email"];
echo $_POST["message"];
// echo $name;
// echo $email;
// echo $message;



// $headers = 'From: webmaster@example.com' . "\r\n" .
//     'Reply-To: webmaster@example.com' . "\r\n" .
//     'X-Mailer: PHP/' . phpversion();

// mail($to, $subject, $message, $headers);
?> 
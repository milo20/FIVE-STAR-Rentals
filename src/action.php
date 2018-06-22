<?php

    $firstname = $_POST['firstname'];
    $email = $_POST['email'];

    $email_from = 'qianaaaa@gmail.com';
    $email_subject = "New Application Submission";
    $email_body = "Name: $name.\n".
                    "Email: $email.\n";

    $to = "barton.qiana@gmail.com";
    $headers = "From: $email_from \r\n";

    mail($to,$email_subject,$email_body,$headers);

    header("Location: index.html");
?>
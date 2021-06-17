<?php


if ($_POST["message"]) {

    mail("chicagezzz@gmail.com", "Here is the subject line",

        $_POST["insert your message here"] . "From: an@email.address");

}

echo htmlspecialchars($_POST['name']); ?>.
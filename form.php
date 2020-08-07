<?php
    if(isset($_POST['submit'])) {
        $name = $_POST['name'];
        $email = $_POST['email'];
        $title = $_POST['title'];
        $message = $_POST['message'];
        $fp = fopen("output.txt", "w+");
        $filedata = "Name: ".$name."/n"." Email: ".$email."/n"." Message Title: ".$title."/n"." Message: ".$message."/n";
        fwrite($fp, $filedata);
        fclose($fp);

        echo "<script type='text/javascript'>alert('Thank you $name. Your message has been sent');</script>";
    }
?>
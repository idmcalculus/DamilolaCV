<?php
    if(isset($_POST['submit'])) {
        $name = $_POST['name'];
        $email = $_POST['email'];
        $title = $_POST['title'];
        $message = $_POST['message'];
        $fp = fopen("output.txt", "w+");
        $filedata = "Name: ".$name."/r/n"." Email: ".$email."/r/n"." Message Title: ".$title."/r/n"." Message: ".$message."/r/n";
        fwrite($fp, $filedata);
        fclose($fp);

        echo "<script type='text/javascript'>alert('Thank you $name. Your message has been sent');</script>";
    }
?>
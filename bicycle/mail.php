<?php
 
	$post = (!empty($_POST)) ? true : false;
	 
	if($post)
	{
	$email = trim($_POST['email']);
	$email = htmlspecialchars($_POST['email']);
	$error = '';
	 
	if(!$error)
	{
	 
	 
	$name_tema = "=?utf-8?b?". base64_encode($name) ."?=";
	 
	$subject ="Новая заявка с сайта https://buboscandiacus28.github.io/bicycle/index.html";
	$subject1 = "=?utf-8?b?". base64_encode($subject) ."?=";
	/*
	$message ="\n\nСообщение: ".$message."\n\nИмя: " .$name."\n\nТелефон: ".$tel."\n\n";
	*/
	$message1 ="\n\nE-mail: " .$email."\n\n";    
	 
	 
	$header = "Content-Type: text/plain; charset=utf-8\n";
	 
	$header .= "From: Новая заявка <28filosof28@gmail.com>\n\n";  
	$mail = mail("28filosof28@gmail.com", $subject1, iconv ('utf-8', 'windows-1251', $message1), iconv ('utf-8', 'windows-1251', $header));
	 
	if($mail)
	{
	echo 'OK';
	}
	 
	}
	else
	{
	echo '<div class="notification_error">'.$error.'</div>';
	}
	 
	}
?>
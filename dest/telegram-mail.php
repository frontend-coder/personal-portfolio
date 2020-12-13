<?php

/* https://api.telegram.org/bot1408324998:AAE3fOILkdLpWDZvbvu32tqxN4bQl9KPEBQ/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$projectname = $_POST['Project_name'];
$formsubject = $_POST['Pagesite'];

$name = $_POST['name'];
$phone = $_POST['phone'];

$theme = $_POST['theme'];
$message = $_POST['message'];
$agree_form = $_POST['agree'];
if(!$agree_form ==="Да") {
  $agree_form = 'Нет';
}

$token = "1408324998:AAE3fOILkdLpWDZvbvu32tqxN4bQl9KPEBQ";
$chat_id = "-330347791";
$arr = array(
  'Название проекта: ' => $projectname,
  'Страница сайта: ' => $formsubject,
	'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,
  'Тема сообщения' => $theme,
  'Сообщение' => $message,
  'Согласие на обработку' => $agree_form
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

// if ($sendToTelegram) {
//   header('Location: thank-you.html');
// } else {
//   echo "Error";
// }
?>

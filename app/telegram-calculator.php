<?php

/* https://api.telegram.org/bot1408324998:AAE3fOILkdLpWDZvbvu32tqxN4bQl9KPEBQ/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$projectname = $_POST['Project_name'];
$formsubject = $_POST['Pagesite'];

$name = $_POST['name'];
$phone = $_POST['phone'];

$cost_final = $_POST['cost-progect-inruble'];




$cost_final_grivna = $_POST['cost-progect-ingrivna'];
$cost_final_bel = $_POST['cost-progect-bel-ruble'];



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
  'Финальная строимость работ(руб) : ' => $cost_final,
  'Финальная строимость работ(грн): ' => $cost_final_grivna,
  'Финальная строимость работ(бел.руб.): ' => $cost_final_bel,
  'Согласие на обработку ' => $agree_form
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

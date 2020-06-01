<?php
//Даные телеграмм
$token ='994138058:AAFcqV-6avvCh8z1zMkYDafz3rQhcN8zKGs';
$chatid = '-354273811';
$success = 'Сообщение отправлено';
$text_error = 'Форма не заполнена';

if ($_SERVER['REQUEST_METHOD'] == 'POST'){

//данные из форм
$plaсeformes = trim($_POST['Placement']);
$plaсeformestwo = trim($_POST['Form-options']);
$hawcall = trim($_POST['hawcall']);
$advisecheck = trim($_POST['advisecheck']);
$name = trim($_POST['Name']);
$phone = trim($_POST['Phone']);
$timecall = trim($_POST['time-call']);

// сообщение
$tmtext = array(
"Способ вызова" => $plaсeformes,
"Место размещения формы" => $plaсeformestwo,
"Как с вами связаться" => $hawcall,
"Согласие на обработку" => $advisecheck,
"Время дозвона" => $timecall,
"Имя" => $name,
"Телефон" => $phone,
);
//собираем все в кучу
$txt='';
foreach($tmtext as $key => $value) {
     $txt .= "<b>".$key."</b>: ".$value."%0A";
  }
#Отправляем сообщение
fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chatid}&parse_mode=html&text={$txt}","r");
echo $success;
}
else{
echo $text_error;
}
?>

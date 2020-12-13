<?php

/* https://api.telegram.org/bot1408324998:AAE3fOILkdLpWDZvbvu32tqxN4bQl9KPEBQ/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$projectname = $_POST['Project_name'];
$formsubject = $_POST['form_subject'];

$name = $_POST['name'];
$phone = $_POST['phone'];

$dosite = $_POST['dosite'];
if ( $dosite === 'sitevisitka' ) {
$typeSite = 'сайт-визитка';
$sitePagesUnique = $_POST['pages-unique'];
$sitePagesGeneral = $_POST['pages-general'];
$siteQuantityUniqueBlock = $_POST['price-unique-block'];
$siteQuantityGeneralBlock = $_POST['price-general-block'];
} elseif ( $dosite === 'blog' ) {
$typeSite = 'блог';
$sitePagesUnique = $_POST['pages-unique-blog'];
$sitePagesGeneral = $_POST['pages-general-blog'];
$siteQuantityUniqueBlock = $_POST['prices-unique-blogs'];
$siteQuantityGeneralBlock = $_POST['prices-general-blogs'];
} elseif ( $dosite === 'landing' ) {
$typeSite = 'одностраничный лендинг пейд';
$siteQuantityUniqueBlock = $_POST['pages-section'];
} elseif ( $dosite === 'landingplusblog' ) {
$typeSite = 'Лендинг пейдж + блог';
$sitePagesUnique = $_POST['lpb-unique'];
$sitePagesGeneral = $_POST['lpb-general'];
$siteQuantityGeneralBlock = $_POST['lpb-section'];
}

$mobilepoint = $_POST['mobilepoint'];
$carousel = $_POST['carousel'];
$modals = $_POST['modals'];
$calculate = $_POST['calculate'];
$blockPortfolio = $_POST['block-portfolio'];

$pixelPerfect = $_POST['PixelPerfect'];

if($pixelPerfect =='да'){
  $pixelPerfect = 'да';
} else {
   $pixelPerfect = 'нет'; 
}
$retinaReady = $_POST['RetinaReady'];
if($retinaReady =='да'){
  $retinaReady = 'да';
} else {
   $retinaReady = 'нет'; 
}

$animationBlocks = $_POST['AnimationBlocks'];
if($animationBlocks =='да'){
  $animationBlocks = 'да';
} else {
   $animationBlocks = 'нет'; 
}

$googlePageSpeed = $_POST['GooglePageSpeed'];
if($googlePageSpeed =='да'){
  $googlePageSpeed = 'да';
} else {
   $googlePageSpeed = 'нет'; 
}

$speedWork = $_POST['SpeedWork'];
if($speedWork =='да'){
  $speedWork = 'да';
} else {
   $speedWork = 'нет'; 
}

$cms = $_POST['cms'];




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
  'Что верстаем' => $typeSite,
  'Количество уникальных страниц - ' => $sitePagesUnique,
  'Количество типовых страниц - ' => $sitePagesGeneral,
  'Количество блоков на уник. стр. - ' => $siteQuantityUniqueBlock,
  'Количество блоков на тип. стр. - ' => $siteQuantityGeneralBlock ,
  '        ' => '           ',
  'Дополнительный функционал       ' => '           ',
  '        ' => '           ',
  'Количество brack points - ' => $mobilepoint,
  'Количество слайдеров c контентом - ' => $carousel,
  'Всплывающая форма обратной связи - ' => $modals,
  'Калькулятор услуг - ' => $calculate,
  'Портофлио со всплывающим окном - ' => $blockPortfolio,
   '        ' => '           ',
  'Дополнительно       ' => '           ',
  '        ' => '           ',
  'PixelPerfect - ' => $pixelPerfect,
  'Retina Ready - ' => $retinaReady,
  'Анимация сайта - ' => $animationBlocks,
  'Google Page Speed - ' => $googlePageSpeed,
  'Срочная работа - ' => $speedWork,
   '        ' => '           ',
  'Посадка верстки       ' => '           ',
  '        ' => '           ',
  'Без посадки/CMS - ' => $cms,

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

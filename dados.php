<?php 
echo 'ola';
require 'processamento_dados/curl.php';

session_start();
print_r($_SESSION);
$url = str_replace('/API/','',$_SESSION['url']);
$nova_url = str_replace('.php','',$url);
$evento = $_SESSION['evento'];
print_r($evento);
$net2phone = 'https://go.pccom.pro/crmpro/api/v1/LeadCapture/cff267546e3b44a7f776c860f80f7516';
$webSite = 'https://go.pccom.pro/crmpro/api/v1/LeadCapture/c4dbacc84474eb2e8873a03bef4c5be9';

$processamento = new Curl();
$dados = [
   
    "firstName"=>$_POST['nome'],
    "lasteName"=>$_POST['nome'],
    "emailAddress"=> $_POST['email'],
    "phoneNumber"=> $_POST['telefone'],
    "description"=> $_POST['desc']
];


$processamento->enviar($dados,$webSite);
header('location:/telefonia');
/*
if($nova_url == 'net2phone'){
    $formData = [
   
    "firstName"=>$_POST['nome'],
    "lasteName"=>$_POST['nome'],
    "emailAddress"=> $_POST['email'],
    "phoneNumber"=> $_POST['telefone'],
    "description"=> $_POST['desc']

];

// $c->enviar($formData,$net2phone);

}
*/




?>
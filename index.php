<?php
require_once 'vendor/autoload.php';

use Httpful\Request;

//$url = "https://api.github.com/users/nategood";
/*$url = "https://sg-cmdpractice.demo.sugarcrm.eu/rest/v11_5/help";
$response = \Httpful\Request::get($url)
    ->send();*/

$uri = "https://sg-cmdpractice.demo.sugarcrm.eu/rest/v11_5/oauth2/token";
$responsebis = \Httpful\Request::post($uri)
->body('{
    "grant_type":"password", 
    "client_id":"sugar", 
    "client_secret":"", 
    "username":"will", 
    "password":"MazY7eC6z$W!eC8W", 
    "platform":"base" 
}')
->send();

$token = $responsebis->body->access_token;
$retoken = $responsebis->body->refresh_token;

$fields = "first_name,last_name,email,primary_address_street";
$max = "5";
$filter = '[{"$or":[{"first_name":{"$contains":"a"},"last_name":{"$contains":"b"}}]}]';
$uric = "https://sg-cmdpractice.demo.sugarcrm.eu/rest/v11_5/Contacts?fields=".$fields."&max_num=".$max."&filter=".$filter;
$contacts = \Httpful\Request::get($uric)
    ->addHeader('OAuth_token', $token)
    ->send();

$array = json_decode($contacts, true)['records'];

$contact_id = $array[0]['id'];

$fields = "name,date_entered,status,contact_name,date_due,date_start";
$tfilter = '[0][status][$not_in][]=Completed';
$urit = 'https://sg-cmdpractice.demo.sugarcrm.eu/rest/v11_5/Contacts/'.$contact_id.'/link/all_tasks?fields='.$fields.'max_num=5&filter'.$tfilter;
$tasks = \Httpful\Request::get($urit)
    ->addHeader('OAuth_token', $token)
    ->send();

$tickets = json_decode($tasks, true)['records'];


/*$curit = "https://sg-cmdpractice.demo.sugarcrm.eu/rest/v11_5/Contacts/'.$contact_id.'/Tasks";
$create = \Httpful\Request::post($curit)
    ->body('{
    "name":"Invite to event",
    "description":"Invite to event meeting",
    "date_start":"2019-08-25T14:00:00-00:00",
    "date_due":"2019-08-22T20:00:00-00:00",
}')
    ->send();

var_dump($create);*/

$fields = "name,date_entered,status,contact_name,date_due,date_start";
$tfilter = '[0][status][$not_in][]=Completed';
$urit = 'https://sg-cmdpractice.demo.sugarcrm.eu/rest/v11_5/Contacts/'.$contact_id.'/link/all_tasks?fields='.$fields.'max_num=5&filter'.$tfilter;
$tasksbis = \Httpful\Request::get($urit)
    ->addHeader('OAuth_token', $token)
    ->send();

echo "Le token est : " .$token ."\n";

$smarty = new Smarty();

$smarty->assign(array(
    "page" => null,
    "contacts" => $array,
    "tasks" => $tickets
))->display('views/main.tpl');

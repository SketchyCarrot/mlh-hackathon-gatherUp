<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
$route = $_SERVER["REQUEST_URI"];

switch ($route) {
    case "/":

        break;
    case "/getScribbleWord":
        $res = getScribbleWord();
        echo json_encode($res);
        break;
}


function getScribbleWord()
{
    $fileName = "../assets/Skribble-wordlist.json";
    $wl = json_decode(file_get_contents($fileName));
    $wl_size = count($wl);
    $words = [];
    for ($i = 0; $i < 3; $i++) {
        $word = $wl[(rand(0, $wl_size - 1))];
        array_push($words, $word);
    }
    return $words;
}

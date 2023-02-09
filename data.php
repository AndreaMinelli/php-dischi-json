<?php
//Importo i dati dal database
$db_url = __DIR__ . '/data.json';
$db_data = file_get_contents($db_url);
$discs = json_decode($db_data, true);


//Emetto i dati in json
header('Content-Type: application/json');
echo json_encode($discs);

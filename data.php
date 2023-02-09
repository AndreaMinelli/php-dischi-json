<?php
//Importo i dati dal database
$db_url = __DIR__ . '/data.json';
$db_data = file_get_contents($db_url);
$discs = json_decode($db_data, true);

//Filtro per genere
$genre_filter = $_GET['genre-type'] ?? '';

if ($genre_filter) {
    $discs = array_filter($discs, function ($disc) {
        $genre_filter = $_GET['genre-type'];
        return $genre_filter === $disc['genre'];
    });
}


//Emetto i dati in json
header('Content-Type: application/json');
echo json_encode($discs);

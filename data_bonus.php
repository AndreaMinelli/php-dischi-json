<?php
//Dichiaro le costanti di connessione

const DB_HOST = 'localhost';
const DB_USER = 'root';
const DB_PASSWORD = 'root';
const DB_NAME = 'discs';

//Provo la connessione
try {
    $conn = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);
} catch (Exception $e) {
    echo $e->getMessage();
    die();
}

//Recupero le informazioni da inserire nell'array
try {
    $sql = 'SELECT * FROM `discs`';
    $result = $conn->query($sql);
    if ($result->num_rows) {
        $discs = [];
        while ($row = $result->fetch_assoc()) {
            $discs[] = $row;
        }
    }
} catch (Exception $e) {
    echo $e->getMessage();
    die();
}


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

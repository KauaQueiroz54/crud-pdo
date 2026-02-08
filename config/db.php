<?php

$host = 'localhost';
$dbname = 'php_crud';
$username = 'root';
$password = '';


try{
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
}catch(PDOException $e){
    die("ERROR AO CONECTAR COM O BANCO: " . $e->getMessage());
}

?>
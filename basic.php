<?php

    // definir PDO 
    $pdo = new PDO('sqlite:database.db');

    // escrever SQL
    $statement = $pdo->query("SELECT * FROM usuario");

    // rodar SQL
    $rows = $statement->fetchAll(PDO::FETCH_ASSOC);

    // mostrar na tela
    echo "<pre>";
    var_dump($rows);
    echo "</pre>"

?>
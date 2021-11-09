<?php

    // definir PDO 
    $pdo = new PDO('sqlite:dataBase.db');

    // escrever SQL
    $statement = $pdo->query("SELECT * FROM usuario");

    // rodar SQL
    $rows = $statement->fetchAll(PDO::FETCH_ASSOC);

    // mostrar na tela
    var_dump($rows);
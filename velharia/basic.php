<?php

    // definir PDO 
    $db = new PDO('sqlite:database.db');

    // escrever SQL
    $usuario_statement = $db->query("SELECT * FROM usuario");
    $item_statement = $db->query("SELECT * FROM item");

    // rodar SQL
    $usuarios = $usuario_statement->fetchAll(PDO::FETCH_ASSOC);
    $itens = $item_statement->fetchAll(PDO::FETCH_ASSOC);
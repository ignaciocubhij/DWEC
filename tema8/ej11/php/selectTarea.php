<?php
    require('db.php');

    $db = "notas";

    $conexion = conectar($db);
    $sql = "SELECT * FROM notas";
    $pdo = $conexion->prepare($sql);
    $pdo->execute();

    $datos = $pdo->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($datos);

?>
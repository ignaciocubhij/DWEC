<?php
    require_once 'connect.php';
    $db = 'lista_alumnos';
    $conexion = conectar($db);
    $sql = "SELECT * FROM alumnos";
    $pdo = $conexion->prepare($sql);
    $pdo->execute();

    $datos = $pdo->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($datos);
?>
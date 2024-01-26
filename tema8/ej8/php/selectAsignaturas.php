<?php
    require('./db.php');
    $db = 'escuela';
    $conexion = conectar($db);

    $sql = "SELECT * FROM asignaturas";
    
    $pdo = $conexion->prepare($sql);
    $pdo->execute();

    $datos = $pdo->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($datos);
?>
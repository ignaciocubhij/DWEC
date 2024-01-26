<?php
    require('./db.php');
    $db = 'escuela';
    $conexion = conectar($db);

    $parametros = array(':nombre' => $_GET['asignatura']);
    $sql = "SELECT a.* FROM alumnos a 
            JOIN matriculas m USING(clave_alumno) 
            JOIN asignaturas asig ON m.clave_asignatura = asig.clave_asignatura 
            WHERE asig.nombre = :nombre";
    $pdo = $conexion->prepare($sql);
    $pdo->execute($parametros);

    $datos = $pdo->fetchAll(PDO::FETCH_ASSOC);
    
    header('Content-Type: application/json');

    echo json_encode($datos);
?>
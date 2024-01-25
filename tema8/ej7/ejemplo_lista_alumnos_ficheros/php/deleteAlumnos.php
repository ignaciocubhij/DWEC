<?php

if(isset($_GET['id'])){
    
    require_once 'connect.php';
    $db = 'lista_alumnos';

    $conexion = conectar($db);
    $parametros = array(":id"=>$_GET['id']);
    $sql = "DELETE FROM alumnos WHERE id = :id";
    $pdo = $conexion->prepare($sql);
    $pdo->execute($parametros);
        
}


?>
<?php
require_once("db.php");
$db = "notas";

if(isset($_POST["enviar"])){
    $conexion = conectar($db);
    $parametros = array(":titulo" => $_POST["titulo"], ":descripcion" => $_POST["descripcion"]);
    $sql = "INSERT INTO notas(titulo, descripcion) VALUES(:titulo, :descripcion)";
    $pdo = $conexion->prepare($sql);
    $pdo->execute($parametros);

    echo json_encode(message: 'insertado');

}

?>
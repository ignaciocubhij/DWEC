<?php
require_once("db.php");

$db = "notas";
$conexion = conectar($db);

if(isset($_POST["modificar"])){
    $parametros = array(":id" => $_POST["id_nota"], ":titulo" => $_POST["titulo"], ":descripcion" =>$_POST["descripcion"]);
    $sql = "update notas set titulo = :titulo, descripcion = :descripcion where id_nota = :id";
    $pdo = $conexion->prepare($sql);
    $pdo->exeute($parametros);

    echo json_encode([message => "Modificado"]);
}
?>
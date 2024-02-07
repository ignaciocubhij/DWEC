<?php
require_once("db.php");

$db = "notas";
$conexion = conectar($db);

$parametros = array(":id" => $_POST["id_nota"], ":titulo" => $_POST["titulo"], ":descripcion" =>$_POST["descripcion"]);
$sql = "UPDATE notas SET titulo = :titulo, descripcion = :descripcion WHERE id_nota = :id";
$pdo = $conexion->prepare($sql);
$pdo->execute($parametros);
?>
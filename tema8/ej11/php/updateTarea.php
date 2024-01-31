<?php
require_once("db.php");

$db = "notas";

$conexion = conectar($db);
$parametros = array(":id" => $_POST["id"], ":titulo" => $_POST["titulo"], ":descripcion" =>$_POST["descripcion"]);
$sql = "update notas set titulo = :titulo descripcion = :descripcion where id_nota = :id";
$pdo = $conexion->prepare($sql);
$pdo->exeute($parametros);
?>
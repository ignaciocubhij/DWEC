<?php
require_once("db.php");
$db = "notas";

$conexion = conectar($db);
$parametros = array(":titulo" => $_POST["titulo"], ":descripcion" => $_POST["descripcion"]);
$sql = "INSERT INTO notas(titulo, descripcion) VALUES(:titulo, :descripcion)";
$pdo = $conexion->prepare($sql);
$pdo->execute($parametros);

$datos = $pdo->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($datos);
?>
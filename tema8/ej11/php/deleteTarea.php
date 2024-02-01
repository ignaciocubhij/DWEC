<?php
require_once("db.php");

$db = "nostas";

$conexioin = conectar($db);
$parametros = array(":id_nota" => $_POST["id_nota"]);
$sql = "DELETE FROM notas WHERE id_nota = :id_nota";
$pdo = $conexion->prepare($sql);
$pdo->execute($parametros);